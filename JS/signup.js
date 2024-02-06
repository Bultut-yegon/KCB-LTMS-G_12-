import {initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth/";
import {getDatabase} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

//const appSettings = 'https://kcb-lms-default-rtdb.firebaseio.com/'

const firebaseConfig = {
  apiKey: "AIzaSyBbMbTOH3NHv6fp4jAT3HA3vA6-Ur23In4",
  authDomain: "group-12-kcb-lms.firebaseapp.com",
  projectId: "group-12-kcb-lms",
  storageBucket: "group-12-kcb-lms.appspot.com",
  messagingSenderId: "15476877993",
  appId: "1:15476877993:web:1c45be65570b120d48d7b8"
};
const app= initializeApp(firebaseConfig)

// to be used anywhere for authentication
export const auth= getAuth()

const authenticate = firebase.auth()
const database = firebase.Database()


let userName=document.getElementById("name")
let email=document.getElementById("email")
let passWord=document.getElementById("password")
//UserId=document.getElementById("idN")
let country=document.getElementById("country")
let idNumber= document.getElementById("idNumber")
let phone=document.getElementById("phone")
let street=document.getElementById("street")
let postalCode=document.getElementById("postalCode")
let dob=document.getElementById("dob")


let signupBtn = document.getElementById("signupBtn");
//let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

window.signUp=function(e){
  e.preventDefault();
  let user={
    name:userName.value,
    email:email.value,
    password:password.value,
    country:country.value,
    idNumber:idNumber.value ,
    phone:phone.value,
    street:street.value,
    postalCode:postalCode.value,
    dob:dob.value
}

  createUserWithEmailAndPassword(auth, user.name,user.password,user.country,user.idNumber,user.phone,user.street,user.postalCode,user.dob,user.email)
  .then(function(user) {
      console.log(user.uid);
    })
    .catch(function(err) {
       var errorCode = err.code;
       var errorMessage = err.message;
       console.log(errorMessage);
 
    })
}



/*createUserWithEmailAndPassword(auth, user.name,user.password,user.country,user.idNumber,user.phone,user.street,user.postalCode,user.dob,user.email){
    function createUser(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
     .then(function(user) {
        console.log(user.uid);
      })
      .catch(function(err) {
        var errorCode = err.code;
        var errorMessage = err.message;
        console.log(errorMessage);
      })
    }
}
*/