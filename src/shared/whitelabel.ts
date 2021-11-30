import { Meta } from './meta';


export interface Whitelabel {
    id               : string;
    name             : string;
    appId            : string;
    host             : string;
    imagesPath       : string;
    googleMapskey    : string;
    recaptchaKey     : string;
    facebookId       : string;
    mainColor        : string;
    textColor        : string;
    placeholderImage : string;
    apiUrl           : string;
    isApp            : boolean;
    isMaster         : boolean;
    meta             : Meta;
    routes           : any;
}