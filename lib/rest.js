var eventy = require('eventy');
var Paramer = require('paramer');
var Http = require('http');

module.exports = Rest;

function Rest(endpoint) {
  var rest = function () {
    this.endpoint = endpoint;

    return this;
  }.call(eventy(this));
}

function error(err) {
  err = err.stack || err;
  console.log('%c' + err, 'color: red;');
}

function onFail(mesg) {
  return function () {
    error(new Error(mesg));
  }
}

Rest.prototype.create = function (doc, callback, onError) {
  var http = new Http;

  http.header('Content-Type', 'application/json');

  http.on(201, function () {
    callback.call(this, JSON.parse(this.responseText));
  }).fail(onError || onFail('create fail'));

  http.POST(this.endpoint, doc);

  return this;
}

Rest.prototype.read = function (id, callback, onError) {
  var http = new Http;

  http.header('Content-Type', 'application/json');

  http.on(200, function () {
    callback.call(this, JSON.parse(this.responseText));
  }).fail(onError || onFail('read fail'));

  http.GET(this.endpoint + '/' + id);

  return this;
}

Rest.prototype.update = function (id, data, callback, onError) {
  var http = new Http;

  http.header('Content-Type', 'application/json');

  http.on(200, function () {
    callback.call(this, JSON.parse(this.responseText));
  }).fail(onError || onFail('update fail'));

  http.PUSH(this.endpoint + '/' + id, data);

  return this;
}

Rest.prototype.delete = function (id, callback, onError) {
  var http = new Http;

  http.header('Content-Type', 'application/json');

  http.on(200, function () {
    callback.call(this, JSON.parse(this.responseText));
  }).fail(onError || onFail('delete fail'));

  http.DELETE(this.endpoint + '/' + id);

  return this;
}

Rest.prototype.query = function (selecter, callback, onError) {
  var paramer = new Paramer(selecter || {});
  var http = new Http;

  http.header('Content-Type', 'application/json');

  http.on(200, function () {
    callback.call(this, JSON.parse(this.responseText));
  }).fail(onError || onFail('query fail'));

  http.GET(this.endpoint + '?' + paramer.build());

  return this;
}

Rest.prototype.queryHead = function (selecter, callback, onError) {
  var paramer = new Paramer(selecter || {});
  var http = new Http;

  http.header('Content-Type', 'application/json');

  http.on(200, function () {
    callback.call(this, JSON.parse(this.responseText));
  }).fail(onError || onFail('queryHead fail'));

  http.HEAD(this.endpoint + '?' + paramer.build());

  return this;
}
