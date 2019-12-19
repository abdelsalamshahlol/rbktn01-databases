var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((result)=>{
        res.json(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      let params = [req.body['name']];
      models.users.post(params, (err, result)=>{
        if (err) {
          res.writeHead(500);
          res.end('err');
        }
        res.json(result);
      });
    }
  }
};

