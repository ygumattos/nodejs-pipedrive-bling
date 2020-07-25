import { Schema, model } from 'mongoose';

const ConsolidatedSchema = new Schema({
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

const Consolidated = model('Consolidated', ConsolidatedSchema);
export default Consolidated;
