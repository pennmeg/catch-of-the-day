import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCX6IwOo4-Mp79QwhzLWrHG3eHRiCIrc8M",
  authDomain: "catch-of-the-day-m-penn.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-m-penn.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
