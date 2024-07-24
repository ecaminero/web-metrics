import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/functions';


// firebase init - add your own config here
export const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    appId: process.env.APP_ID,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    measurementId: process.env.MEASUREMENT_ID,
}
firebase.initializeApp(config);

const analytics = firebase.analytics();
const firestore = firebase.firestore()
const database = firebase.database();
const auth = firebase.auth();
const functions = firebase.functions();


// export utils/refs
export {
    auth,
    database,
    firestore,
    functions,
    analytics
}

