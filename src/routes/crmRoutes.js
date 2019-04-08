//Importing controller functions from '/path'
import { 
    addNewContact, 
    getContacts, 
    getContactWithID,
    updateContact,
    deleteContact,
} from "../controllers/crmController";

//route function express will be applied to these routes in the server.js file
const routes = (app) =>{

//settting up routes
app.route('/contact')  //home route.
.get((req, res, next) =>{
   //midddelware
   console.log(`--Request from ${req.originalUrl}`);  //printing URL to the console 
   console.log(`--Request type ${req.method}`);   // printing req method type the console once method is provoked
   next(); // allows the route to retrive contacts
   
}, getContacts)  //next() form above invokes this function from crmController.js to get contacts 


//POST endpoint
.post(addNewContact);


app.route('/contact/:contactId')
//get specific contact
.get(getContactWithID)  // Controller function

//PUT request
.put(updateContact) //Controller function


//DELETE request
.delete(deleteContact);  //contorller function


}

export default routes; // exporting routes