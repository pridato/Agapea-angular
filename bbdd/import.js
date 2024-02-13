const { initializeFirebaseApp, restore } = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = () => {
  try {
    console.log('Initializing Firebase');
    const firestore = initializeFirebaseApp(serviceAccount);

    console.log('Firebase Initialized');

    ['provincias', 'municipios', 'libros', 'categorias'].forEach(
      (item) => {
        restore(
          firestore,
          '/Users/davidarroyo/Documents/projects/segunda_eval/angular/importFireBase/' + item + '.json',
          {
            autoParseDates: true,
            geos: ['location', 'locations'],
            refs: ['refKey']
          }
        );
        console.log(`Uploaded:${item} .....`);
      }
    );
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
