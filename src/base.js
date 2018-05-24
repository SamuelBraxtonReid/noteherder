import firebase from 'firebase';
import 'firebase/database';
import Rebase from 're-base';

var config = {
    apiKey: "AIzaSyDJjndwLxSuUQMu2Cnzfr3nVV_UdfIN6oI",
    authDomain: "noteherder-83687.firebaseapp.com",
    databaseURL: "https://noteherder-83687.firebaseio.com",
    projectId: "noteherder-83687",
    storageBucket: "noteherder-83687.appspot.com",
    messagingSenderId: "729881471042"
};

const app = firebase.initializeApp(config);

export default Rebase.createClass(app.database());