# ssb-message-types

ssb-message-types is a collection of message types organized in a way that they
can be translated into user friendly permissions for a metamask experiment. The types list and their groupings live in [./permissions-groups.json](./permissions-groups.json). The types
in this collection are types who's frequency exceeded 10 messages out of 100k and/or looked like they belonged
to types who's frequency exceeded 10 out of 100k.
**If I removed an important type or I am missing some you value or if you have a better proposal of a way to organize the types please submit a PR that would be great!** other then to have a repo to organize the types this is mostly to help me reason about ssb messages.

type-find.js is what I use to  look at the different message types. It requires sbot to be running

an example dialect of an application, metamask and a user:
```
application: "oh cool this user has ssb. Hey metamask can i get users persona?"
metamask: "hey user this application would like access to your persona would you like to provide that -> yay/nay"
user: "yay"
application: "oh cool i now have permission from the user to access parts of their persona"
```

## A little about the structure of the object
Top level keys must be unique and are not necessarily message types, message types that are not unique to top level keys
reference that group. This is so bigger permission sets can have lots of types but still be
easily human readable for documentation (in the future (like even maybe later this week) this may change and permission sets may be divided up into separate files as we see more type variations and more sets or I might get rid of the unnecessary mapping 'cause really i just did it for fun).

Not all types only belong to one category.

Top level keys will end with a `!` if they expose private messages.
This is important to note because wording will have to be designed to properly communicate the danger of this to users.


example:

'bar' will refernce the top level key so in this case 'bar' is 'baz'
```json
{
  "foo": ["bar"],

  "bar": ["baz"],

}
```

I'm how ever only doing this one level deep so if the sub group references another it wont port over that groups types so don't get to fancy.

## a note on Documentation

The type-docs directory is empty currently if you feel so inclined To fill it with the specs of each message type pleas do so. I will be slowly filling it out this week as time goes on.