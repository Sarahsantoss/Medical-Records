import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyDMDyemldtXqxPzlN1pa3mFgQiBZ1dHXzg",
    authDomain: "app1-3fec9.firebaseapp.com",
    databaseURL: "https://app1-3fec9.firebaseio.com",
    projectId: "app1-3fec9",
    storageBucket: "app1-3fec9.appspot.com",
    messagingSenderId: "465460982199"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  