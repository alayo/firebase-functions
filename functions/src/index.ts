import * as functions from 'firebase-functions';
import * as Airtable from 'airtable';


const base = new Airtable({apiKey: 'keyfVnG5zIX3QPaqa' }).base('appQeSXJABkUlar3x');


export const addToAirtable = functions.firestore
  .document('customers/{customerId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    console.log(data);
    // Add the data to the Airtable Base
    return base('CustomerData').create(data)
});
