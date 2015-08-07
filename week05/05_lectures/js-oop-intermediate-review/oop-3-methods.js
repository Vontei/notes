/*
  There are 2 ways to add methods to each class.
  The first is not ideal because of performance
  reasons. For each instance of the class that is
  created, it will also attach a new copy of the
  method(s). That can take up a large amount of
  memory depending on how many and how large.
  The better way is to attach them to the object
  prototype. This is a shared value amongst all
  instances of the object, which means that even
  if you create 1,000 instances, they will all
  utilize the same function in memory. Much more
  efficient.
*/
