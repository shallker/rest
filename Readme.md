
# rest-api

  Restful api request

## Installation

  Install with [component(1)](http://component.io):

    $ component install shallker/rest-api

## API
```javascript
var restAPI = new RestAPI('/api/users');
```

### restAPI
#### .create(Object doc, Function callback, Function onError)
#### .read(String id, Function callback, Function onError)
#### .update(String id, Object data, Function callback, Function onError)
#### .delete(String id, Function callback, Function onError)
#### .query(Object selector, Function callback, Function onError)

## Todo
- test

## License

  MIT
