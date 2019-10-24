const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  createdDate: { type: Date, default: Date.now },
  noteText: { type: String }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
