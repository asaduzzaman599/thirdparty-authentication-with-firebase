import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

    apiKey: "AIzaSyBsyZaAIXKUlhiSQutWBvhUKaVzZ5KklxY",
    authDomain: "thired-party-authentication.firebaseapp.com",
    projectId: "thired-party-authentication",
    storageBucket: "thired-party-authentication.appspot.com",
    messagingSenderId: "229045232789",
    appId: "1:229045232789:web:0cd69cfd114337f89ca79c"
};

const app = initializeApp(firebaseConfig);

export default app;