/// <reference path="../airtable.d.ts" />

import * as functions from 'firebase-functions';
import { airtable } from 'airtable';


const base: airtable.Airtable.Base = new airtable.Airtable({apiKey: 'keyfVnG5zIX3QPaqa' }).base('appQeSXJABkUlar3x');


export const addToAirtable = functions.firestore
  .document('customers/{customerId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    console.log(data);
    // Add the data to the Airtable Base
    // return base.table('CustomerData').create(data)
    return base.table('CustomerData').create(data);
});
