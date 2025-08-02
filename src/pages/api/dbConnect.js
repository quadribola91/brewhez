// lib/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || process.env.LOCAL_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI or LOCAL_MONGODB_URI in .env.local');
}

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGODB_URI);
}

export default dbConnect;
