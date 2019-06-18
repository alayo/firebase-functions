"use strict";
/// <reference path="../airtable.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const airtable_1 = require("airtable");
const base = new airtable_1.airtable.Airtable({ apiKey: 'keyfVnG5zIX3QPaqa' }).base('appQeSXJABkUlar3x');
exports.addToAirtable = functions.firestore
    .document('customers/{customerId}')
    .onCreate((snap, context) => {
    const data = snap.data();
    console.log(data);
    // Add the data to the Airtable Base
    // return base.table('CustomerData').create(data)
    return base.table('CustomerData').create(data);
});
//# sourceMappingURL=index.js.map