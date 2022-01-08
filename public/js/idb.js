//creates variable to hold db connection
let db;
//establish connection to IndexedDB datababse called 'budget-tracker'
const request = indexedDB.open('pizza_hunt', 1)