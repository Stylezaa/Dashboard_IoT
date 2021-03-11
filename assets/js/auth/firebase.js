var app_fireBase = {};

(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDmoxb18qrDkQ6cnIk2WOY08WAEM4NuS6I",
    authDomain: "authen-b604e.firebaseapp.com",
    databaseURL: "https://authen-b604e.firebaseio.com",
    projectId: "authen-b604e",
    storageBucket: "authen-b604e.appspot.com",
    messagingSenderId: "774271463926",
    appId: "1:774271463926:web:0c7ae4c361c24df9a057d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_fireBase = firebase;
})()