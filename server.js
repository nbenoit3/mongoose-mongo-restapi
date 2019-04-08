import express from 'express';//importing express
import mongoose from 'mongoose' //importing mongoose
import bodyParser from  'body-parser' //allows us to send objects (data) thorugh http post to our db or api
import routes from './src/routes/crmRoutes' // Importing endpoints from crm Routes 

const app = express(); //applying express to application
const PORT = 3000; //PORT for  local host server to run on


//mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb');

//body parser set up
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

/*routes are able to access express from export
 *uisng routes function from crmRoutes.js file
 */
routes(app);  

//home route for locat host
app.get('/', (req,res)=>{
    res.send(`Server is running on port ${PORT}`);
})


//prompts sever is running
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});