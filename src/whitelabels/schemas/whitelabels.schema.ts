import * as mongoose from 'mongoose';


const MetaSchema = new mongoose.Schema({
    keywords    : String,
    title       : String,
    description : String,
    name        : String
});


export const WhitelabelsSchema = new mongoose.Schema({
    id               : Number,
    name             : String,
    appId            : String,
    host             : String,
    imagesPath       : String,
    googleMapskey    : String,
    recaptchaKey     : String,
    facebookId       : String,
    mainColor        : String,
    textColor        : String,
    placeholderImage : String,
    apiUrl           : String,
    isApp            : Boolean,
    isMaster         : Boolean,
    routes           : { any: Object },
    meta             : { type: MetaSchema, default: {} }
})