const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Note.find({}).then(function(dbNote) {
      res.json(dbNote);
    });
  },
  find: function(req, res) {
    db.Note.find({ headlineId: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  },
  create: function(req, res) {
    db.Note.create(req.body).then(function(dbNote) {
      res.json(dbNote);
    });
  },
  delete: function(req, res) {
    db.Note.remove({ _id: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  }
};
