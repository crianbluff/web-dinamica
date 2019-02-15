import firebase from 'firebase/app';

const config = {
	apiKey: "AIzaSyA1qg3icLooSApVQpvzQXrsOItrpiD5GeY",
	authDomain: "web-dinamica-d78f3.firebaseapp.com",
	databaseURL: "https://web-dinamica-d78f3.firebaseio.com",
	projectId: "web-dinamica-d78f3",
	storageBucket: "web-dinamica-d78f3.appspot.com",
	messagingSenderId: "36726613603"
};

const init = () => firebase.initializeApp(config);

init();