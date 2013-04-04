var Friends = function () {
    this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

    this.index = function (req, resp, params) {
        this.respond(params, {
            format: 'html'
            , template: 'app/views/friends/index'
        });
    };
};

exports.Friends = Friends;

