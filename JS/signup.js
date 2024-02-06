import {initializeApp} from "https://esm.sh/firebase/app";
//import {Auth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getDatabase} from "https://esm.sh/firebase/app"

//import firebase from "firebase/app"
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
//export const auth= getAuth(app)

const authenticate = firebaseConfig
const database = firebaseConfig


function signUp(){
  let userName=document.getElementById("name").value
let email=document.getElementById("email").value
let passWord=document.getElementById("password").value
//UserId=document.getElementById("idN")
let country=document.getElementById("country").value
let idNumber= document.getElementById("idNumber").value
let phone=document.getElementById("phone").value
let street=document.getElementById("street").value
let postalCode=document.getElementById("postalCode").value
let dob=document.getElementById("dob").value
let signUp=document.getElementById("signUp")

firebase.database().ref('users/' + user.uid).set({
             username: username,
              dob: dob,
                phone: phone,
                idNumber: idNumber,
                 country: country,
                street: street,
                postalCode: postalCode
            });
              console.log('User created successfully:', user);
            alert('User created successfully!')
          
            .catch(function(err) {
              var errorCode = err.code;
              var errorMessage = err.message;
              console.log(errorMessage);
        
           })
          }



/*let signupBtn = document.getElementById("signupBtn");
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
    
}
*/



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