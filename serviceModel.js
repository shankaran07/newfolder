const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hello: {    
    type: String,
    required: true
  },
  phonenum: {    
    type: String,
    required: true
  },
  bloodgroup: {    
    type: String,
    required: true
  },
  district: {    
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('res', serviceSchema);
