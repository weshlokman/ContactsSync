
import {addNewContact, getContacts, getContactsWithId} from  '../controllers/crmController';

const routes = (app) => {
   app.route('/contact')

    .get((req, res, next) => {
       //middleware 
       console.log(`Request from: ${req.originalUrl}`)
       console.log(`Request from: ${req.method}`)
       next();
    }, getContacts)

    .post(addNewContact);

   app.route('/contact/:contactID') 
    .get(getContactsWithId)

    .put((req, res) =>
    res.send('PUT request successful '))

    .delete((req, res) =>
    res.send('PUT request successful '));
}

export default routes;