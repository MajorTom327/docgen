import mongoose from 'mongoose';

const R = require('ramda');

mongoose.connect(
  R.pathOr('mongodb://localhost:27017/test', ['env', 'MONGO_URL'], process),
  { useNewUrlParser: true, useUnifiedTopology: true }
)

export default mongoose;