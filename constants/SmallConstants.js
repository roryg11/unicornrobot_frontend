var keyMirror = require('keymirror');

var APIRooT = "http://localhost:3002";

module.exports = {
  APIEndpoints: {
    LOGIN:        APIRoot + '/v1/login',
    REGISTRATION: APIRoot + '/v1/users',
    USERS:        APIRoot + '/v1/users' // might get some issues here
  },
  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),
  ActionTypes: keyMirror({
    // session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null

    // routes
    REDIRECT: null,

    LOAD_USERS: null,
    RECEIVE_USERS: null,
    LOAD_USER: null,
    RECEIVE_USER: null,
    CREATE_USER: null,
    RECEIVE_CREATED_USER: null
  })
};
