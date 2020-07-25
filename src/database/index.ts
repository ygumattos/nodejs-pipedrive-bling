import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://linkapi_db:linkapi10@node-linkapi.x29pd.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
);
