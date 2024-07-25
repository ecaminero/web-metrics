import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    appId: process.env.APP_ID,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    measurementId: process.env.MEASUREMENT_ID,
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {
    app,
    analytics
}
