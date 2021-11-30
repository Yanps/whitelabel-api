import * as mongoose from 'mongoose';


export const NavigationsSchema = new mongoose.Schema({
    id         : Number,
    whitelabel : String,
    navigation : Array
})