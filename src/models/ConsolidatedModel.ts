import mongoose from 'mongoose';

const ConsolidatedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  total_value: {
    type: String,
    required: true,
  },
});

const Consolidated = mongoose.model('Consolidated', ConsolidatedSchema);
export default Consolidated;
