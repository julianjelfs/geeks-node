var Event = function () {

  this.defineProperties({
    description: {type: 'string'},
    date: {type: 'datetime'},
    venue: {type: 'string'},
    createdby: {type: 'string'},
    latitude: {type: 'number'},
    longitude: {type: 'number'},
    invitations: {type: 'array'}
  });



};

/*
// Can also define them on the prototype
Event.prototype.someOtherMethod = function () {
  // Do some other stuff
};
// Can also define static methods and properties
Event.someStaticMethod = function () {
  // Do some other stuff
};
Event.someStaticProperty = 'YYZ';
*/

Event = geddy.model.register('Event', Event);

