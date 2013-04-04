var Events = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
      this.respond(params, {
          format: 'html'
          , template: 'app/views/events/index'
      });
  };

  this.add = function (req, resp, params) {
      this.respond(params, {
          format: 'html'
          , template: 'app/views/events/add'
      });
  };

  this.create = function (req, resp, params) {
    // Save the resource, then display index page
    this.redirect({controller: this.name});
  };

  this.show = function (req, resp, params) {
    this.respond({params: params});
  };

  this.edit = function (req, resp, params) {
    this.respond({params: params});
  };

  this.update = function (req, resp, params) {
    // Save the resource, then display the item page
    this.redirect({controller: this.name, id: params.id});
  };

  this.destroy = function (req, resp, params) {
    this.respond({params: params});
  };

};

exports.Events = Events;

