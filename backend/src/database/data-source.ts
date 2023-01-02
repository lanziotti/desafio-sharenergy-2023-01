import mongoose from 'mongoose';

const connection = process.env.DB_CONNECT as string

export const AppMongoose = mongoose.connect(connection)