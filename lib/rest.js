var eventy = require('eventy');
var Paramer = require('paramer');
var Http = require('http');

module.exports = function (endpoint) {
  var rest = function () {
    return this;
  }.call(eventy({}));

  function error(err) {
    err.name = 'rest';
    throw err;
  }

  rest.create = function (doc, callback, onError) {
    var http = new Http;

    http.header('Content-Type', 'application/json');

    http.on(201, function () {
      callback.call(this, JSON.parse(this.responseText));
    }).fail(onError || error);

    http.POST(endpoint, doc);
    return this;
  }

  rest.read = function (id, callback, onError) {
    var http = new Http;

    http.header('Content-Type', 'application/json');

    http.on(200, function () {
      callback.call(this, JSON.parse(this.responseText));
    }).fail(onError || error);

    http.GET(endpoint + '/' + id);
    return this;
  }

  rest.update = function (id, data, callback, onError) {
    var http = new Http;

    http.header('Content-Type', 'application/json');

    http.on(200, function () {
      callback.call(this, JSON.parse(this.responseText));
    }).fail(onError || error);

    http.PUSH(endpoint + '/' + id, data);
    return this;
  }

  rest.delete = function (id, callback, onError) {
    var http = new Http;

    http.header('Content-Type', 'application/json');

    http.on(200, function () {
      callback.call(this, JSON.parse(this.responseText));
    }).fail(onError || error);

    http.DELETE(endpoint + '/' + id);
    return this;
  }

  rest.query = function (selecter, callback, onError) {
    var paramer = new Paramer(selecter || {});
    var http = new Http;

    http.header('Content-Type', 'application/json');

    http.on(200, function () {
      callback.call(this, JSON.parse(this.responseText));
    }).fail(onError || error);

    http.GET(endpoint + '?' + paramer.build());
    return this;
  }

  return rest;
}
