var SmallConstants = require('../constants/SmallConstants.js');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSources = SmallConstants.PayloadSources;

var SmallAppDispatcher = assign(new Dispatcher (), {
  handlerServerAction: function(action){
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispay(payload);
  },
  handleViewAction: function(action){
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = SmallAppDispatcher;