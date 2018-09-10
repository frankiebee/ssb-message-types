# ssb-message-types

ssb-message-types is a collection of message types organized in a way that they
can be translated into user friendly permissions for a metamask experiment. The types
in this collection are types who's frequency exceeded 10 messages out of 100k and/or looked like they belonged
to types who's frequency exceeded 10 out of 100k.
**If I removed an important type or I am missing some please submit a PR that would be great!**

an example dialect of an application, metamask and a user:
```
application: "oh coll this user has ssb. Hey metamask can i get users persona?"
metamask: "hey user this application would like access to your persona would you like to provide that -> yay/nay"
user: "yay"
application: "oh cool i now have permission from the user to access parts of their persona"
```

## A little about the structure of the object
Top level keys must be unique and message types that are not unique to top level keys
reference that group. This is so bigger permission sets can have lots of types but still be
easily human readable for documentation. Also it will help better represent a person.
Not all types only belong to one category.


example:

```js

module.exports = {
  // 'bar' will refernce the top level key so in this case 'bar' is 'baz'
  foo: ['bar'],

  bar: ['baz'],

}
```

## a note on organization
Try to keep more commonly used sets to the top and less commonly used sets at the bottom.