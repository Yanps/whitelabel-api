import { findAllWhitelabels, findNavigationByWhitelabel, findComponentsByWhitelabel } from './db-data';
;

console.log("Populating the MongoDB database with some sample data ...");

const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

const MONGODB_CONNECTION_URL = 'mongodb+srv://inchurch-whitelabel-admin:WRQZM1MrOTqcAj1b@cluster0.ejtyc.mongodb.net';


// Database name
const dbName = 'inchurch-whitelabel';

// Create a new MongoClient
const client = new MongoClient(MONGODB_CONNECTION_URL);

client.connect(async (err, client) => {

    try {

        if (err) {
            console.log("Error connecting to database, please check the username and password, exiting.");
            process.exit();
        }

        console.log("Connected correctly to server");

        const db = client.db(dbName);
        const whitelabels = findAllWhitelabels();

 
        for (let i=0; i<whitelabels.length; i+=1) {
            const whitelabel = whitelabels[i];
            const newWhitelabel: any = {...whitelabel};

            delete newWhitelabel.id;

            console.log("Inserting whitelabel...",  newWhitelabel);

            const result = await db.collection('whitelabels').insertOne(newWhitelabel);

            const whitelabelId = result.insertedId;

            const navigation = findNavigationByWhitelabel(whitelabel.id);
            const components = findComponentsByWhitelabel(whitelabel.id);

            console.log('Insert new navigation...', whitelabelId);

            for (let j=0; j<navigation.length; j+=1) {
                const nav = navigation[j];
                const newNav: any = {...nav};

                delete newNav.id;
                delete newNav.whitelabelId;

                newNav.whitelabel = whitelabelId;

                console.log("Inserting Nav", newNav);

                await db.collection("navigations").insertOne(newNav);

            }


            console.log('Insert new components...', whitelabelId);

            for (let j=0; j<components.length; j+=1) {
                const comp = components[j];
                const newComp: any = {...comp};

                delete newComp.id;
                delete newComp.whitelabelId;

                newComp.whitelabel = whitelabelId;

                console.log("Inserting Nav", newComp);

                await db.collection("components").insertOne(newComp);
            }


        }


        console.log('Finished uploading data, creating indexes.');

        await db.collection('whitelabels').createIndex( { "url": 1 }, { unique: true } );

        console.log("Finished creating indexes, exiting.");

        client.close();
        process.exit();


    } catch(err) {
        console.log("Error caught, exiting: ", err);
        client.close();
        process.exit();
    }

});

console.log('updloading data to MongoDB...');
process.stdin.resume();

