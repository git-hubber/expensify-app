import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// const onValueChange = database.ref('expenses')
// .on('value', snapshot => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// }, (e) => {
//   console.log('Error with data fateching ', e);
// });

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').push({
//   description: 'Mobile bill',
//   amount: 125,
//   createdAt: moment().add(47, 'years').unix(),
//   note: 'Mobile phone bill'
// });

// database.ref('expenses').push({
//   description: 'Electricity bill',
//   amount: 256,
//   createdAt: moment().add(47, 'years').add('1', 'days').unix(),
//   note: 'Home Electricity bill'
// });

// database.ref('expenses').push({
//   description: 'Gas bill',
//   amount: 202,
//   createdAt: moment().add(47, 'years').add('2', 'days').unix(),
//   note: 'Home gas bill'
// });


// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'some note'
// }, {
//   id: '13',
//   title: 'Second note',
//   body: 'some other note'
// }];

// const firebaseNotes = {
//   notes: {
//     1234: {
//       id: '12',
//       title: 'First note',
//       body: 'some note'
//     },
//     1235: {
//       id: '13',
//       title: 'Second note',
//       body: 'some other note'
//     }
//   }
// }

// database.ref().set(firebaseNotes);

// database.ref().set({
//   name: 'Martin Speedie',
//   age: 30,
//   isSingle: true,
//   stressLevel: 6,
//   location: {
//     city: 'Melbourne',
//     country: 'Australia'
//   },
//   job: {
//     title: 'Software engineer',
//     company: 'Google'
//   }
// }).then(() => {
//   console.log("Data is saved");
// }).catch((error) => {
//   console.log("Data failed to sync", error);
// });

// database.ref('location/city').set('Richmond');

// database.ref('attributes').set({
//   height: 178,
//   weight: 80
// }).then(() => {
//   console.log("Phew...");
// }).catch((e) => {
//   console.log("Shit hit the fan ", e);
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log("data was removed");
//   }).catch((e) => {
//     console.log("data was not removed", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

  // const onValueChange = database.ref()
  // .on('value', snapshot => {
  //   const val = snapshot.val();
  //   console.log(val);
  // }, (e) => {
  //   console.log('Error with data fateching ', e);
  // });

  // setTimeout(() => {
  //   database.ref().update({
  //     stressLevel: 2,
  //     'job/company': 'Mingle',
  //     'location/city': 'Melbourne'
  //   });

  //   database.ref().off('value', onValueChange);
  // }, 5000);

