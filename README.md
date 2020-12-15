# comedyshack
node express mongodb app for jokes
Comedyshack is built using Node.js, Express and MongoDB. It uses the Model View Controller architecture. The model is built using Mongoose schema and data is stored in a MongoDB database which can be accessed using the web or through the application using a connection string. The API comprises of controllers to perform POST, GET, UPDATE and DELETE requests. The frontend views are rendered using Pug template engine by the viewsController. Jokes can be submitted by the client and data is sent by Axios using Asynchronous JavaScript And XML (AJAX) requests to post data to the API. The app is hosted on herokuapp. Error handling is also implemented. Some useful API features like filtering, sorting, limiting and pagination are also implemented on the API. There jokes were imported using a function read the data from the json file - fs.readFileSync and saved in mongoDB using the create() function in mongoose Schema. Further details can be found on the github repository. 
repo: https://github.shenoy/comedyshack 
Link to the hosted app: https://comedyshack.herokuapp.com
Here you can view various links by category or submit a joke using a form. 

MongoDB access details 

There are 3 ways you can connect to this database: 
Connect using the application
You can access the database just by using any IDE using node.js like Visual Studio Code in your computer as it has the connection string. Just clone the github repository on your computer and use “npm install” to install all the packages and you are ready to use the application on your computer at localhost:3000 from your browser. 

Connect using MongoDB Compass
You can also acess the database if you download and install mongodb compass and use the connection string above to connect.   https://www.mongodb.com/products/compass

Connect using MongoDB Atlas :  This requires a google sign in which are my personal login details.


How to use the REST API 

Endpoint : http://comedyshack.herokuapp.com/api/v1/jokes/
A GET request to this url fetches all the data available on the database. 
Example GET request with sort : 
http://comedyshack.herokuapp.com/api/v1/jokes?sort=type

the above request fetches data in alphabetical order of type. 
Example GET request with limit : 
http://comedyshack.herokuapp.com/api/v1/jokes?limit=10
the above request fetches 10 jokes. 

Example POST request: 
You can also submit a joke using the API. 
http://comedyshack.herokuapp.com/api/v1/jokes
Request Body in JSON format :  {  “type”: “ any string” , “setup” : “What type of music do balloons hate?”, “punchline”:“Popmusic.“} 
 
