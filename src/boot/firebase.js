import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// firebase init - add your own config here
const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    appId: process.env.APP_ID,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

console.log(config)
// Initialize Firebase
const app = initializeApp(config);
const analytics = getAnalytics(app);

const logGAEvent = (eventName, eventParams) => {
    logEvent(analytics, eventName, eventParams);
}
export {
    app,
    logGAEvent
}
