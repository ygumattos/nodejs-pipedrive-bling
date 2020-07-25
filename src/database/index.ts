import mongoose from 'mongoose';
import 'dotenv/config';

const url = process.env.URL_CONNECTION || '';
mongoose.connect(url, { useNewUrlParser: true });
