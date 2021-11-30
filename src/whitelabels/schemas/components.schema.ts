import * as mongoose from 'mongoose';


export const ComponentsSchema = new mongoose.Schema({
    id         : Number,
    whitelabel : String,
    components : { any: Object }
})