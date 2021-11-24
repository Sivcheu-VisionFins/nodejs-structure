const Model = require('../model/models.model');

exports.helloAPI = (req, res, next) => {
  res.send('Hello From API');
};
