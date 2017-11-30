import * as firebase from 'firebase';

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

export { firebase, database as default };

console.log("NODE_ENV",process.env.NODE_ENV) 
console.log("API_KEY",process.env.APP_KEY)

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

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

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });      
  //   });  
  //   console.log(expenses);  
  // }, (e) => {
  //   console.log(e);
  // });



  // database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a/an ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//   console.log(e);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 1200.00,
//   createdAt: 0
// });



// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a/an ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//   console.log(e);
// });

// setTimeout(() => {
//     database.ref().update({
//     name: 'Colin',
//     job: {
//       company: 'Brose',
//       title: 'Engineer'
//     }
//   });
// }, 3000);


//reading every time data changes:
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching: ', e);
// });

// setTimeout(() => {
//   database.ref('age').set(39);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(40);
// }, 10500);



//reading all data or pass in ref to specific key
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error: ', e);
//   });

// database.ref().set({ //ref root of DB wih no params; set sets val of ref
//   name: 'Leah',
//   age: 36,
//   isSingle: false,
//   stressLevel: 4,
//   job: {
//     title: 'Web App Developer',
//     company: 'jacapps'
//   },
//   location: {
//     city: 'Detroit',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('data is updated');
// }).catch((e) => {
//   console.log('This failed', e);
// });

//database.ref('isSingle').set(null); //can wipe data with set by passing in null

// database.ref().update({ //update requires obj; only updates at root level
//   name: 'Colin',
//   age: 33,
//   job: 'Engineer',
//   isSingle: null,
//   'location/city': 'New York' //updating nested objects
// });

//change specific key; call set on specific location (use forward slash for obj props; e.g. location/city):
// database.ref('attributes').set({
//   hairColor: 'blonde',
//   eyeColor: 'hazel'
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('WHOOPS', e);
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('removed');
//   }).catch((e) => {
//     console.log(e);
//   });

//ref() //wipes all