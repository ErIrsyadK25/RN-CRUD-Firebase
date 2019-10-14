import * as firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyCLSQeQM-7noI25soAOHQqFJZZlZpufbFU',
	authDomain: 'reactcrud-e09fb.firebaseapp.com',
	databaseURL: 'https://reactcrud-e09fb.firebaseio.com',
	projectId: 'reactcrud-e09fb',
	storageBucket: 'reactcrud-e09fb.appspot.com',
	messagingSenderId: '2874053378',
	appId: '1:2874053378:web:0b3c0904428256818b281b',
	measurementId: 'G-CHRVCK09PS',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
