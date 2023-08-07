import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.ATLAS_CONNECTION_STRING, { family: 4 });

export default connectMongo;