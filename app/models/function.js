const mongoose = require('mongoose');

const functionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  desc: String,
  codeFile: {
    type: String,
    default: 'default.js',
  },
  args: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Concept',
  }],
  returns: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Concept',
  }],
  argsNames: [],
  argsUnits: [],
  returnsNames: [],
  returnsUnits: [],
}, { usePushEach: true });

mongoose.pluralize(null);
const model = mongoose.model('Function', functionSchema);

module.exports = model;
