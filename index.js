//npm install express
//localhost:3000
// => console.log(`Example app listening on port ${port}!`)
//---------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs4JCCb5egZH05B4-3LajtKD1zFpRMtYo",
  authDomain: "eminent-quasar-345015.firebaseapp.com",
  projectId: "eminent-quasar-345015",
  storageBucket: "eminent-quasar-345015.appspot.com",
  messagingSenderId: "1096551419296",
  appId: "1:1096551419296:web:6c0b5ee6b8465579d668c5",
  measurementId: "G-Y2HL11VGX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//---------

const express = require('express');
const app_express = express();//istanza di express
const personeRouter=require('./routes/persone')
const port = 3000;

app_express.use(express.json())

app_express.use('/api/persone',personeRouter)


var fb = new Firebase("https://eminent-quasar-345015-default-rtdb.europe-west1.firebasedatabase.app/");
fb.set({ name: "Nuovo valore da inserire" });


app_express.listen(port);