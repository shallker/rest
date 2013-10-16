
# rest

  Restful api implementation

## Installation

  Install with [component(1)](http://component.io):

    $ component install shallker/rest

## API
```javascript
var rest = new Rest('/api/users');
```

### rest
#### .create(Object doc, Function callback, Function onError)
#### .read(String id, Function callback, Function onError)
#### .update(String id, Object data, Function callback, Function onError)
#### .delete(String id, Function callback, Function onError)
#### .query(Object selector, Function callback, Function onError)

## Todo
- test

## License

  MIT
