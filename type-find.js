const pull = require('pull-stream')
const ssbClient = require('ssb-client')
const { exit } = require('process')

ssbClient((err, sbot) => {
  if (err) console.log(error)
  const messageTypes = { '--weird': { messages: [] }, private: 0}
  pull(
    sbot.createLogStream({limit: 100000}),
    pull.collect(function (err, msgs) {
      msgs.forEach((msg) => {
        // if unpredicted and strange store message in strange just for kicks
        // however i havent seen any of this
        if (!msg.value || !msg.value.content) {
          return messageTypes['--weird']['messages'].push(msg)
        }

        // private messages have the '.box' at the end and are a string instead of an object
        if ( typeof msg.value.content === 'string'
        && msg.value.content.includes('.box')) {
          return messageTypes['private'] += 1
        }

        // increment know message types
        if (msg.value.content.type === 'curation') console.log(msg.value.content)
        else if (messageTypes[msg.value.content.type]) return messageTypes[msg.value.content.type] += 1
        // initialize unknown message types
        else if (!messageTypes[msg.value.content.type] ) return messageTypes[msg.value.content.type] = 1
      })

      console.log(messageTypes)

      exit()
    })
  )
})
