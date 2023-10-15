//for importing json server
const jsonServer = require("json-server");

// create json server using json-server library
const MpServer = jsonServer.create();

// set up route for db.json file
const router = jsonServer.router("db.json");

// returns middlewares used by json server
// for conversion of json data to js
const middleware = jsonServer.defaults();

//use diffrent port numbers for the front and backend
// the default port number is 3000 so we need to use another port!!
// set up port for server app
const port = 4000 || process.env.PORT;

// use middleware and router in server
MpServer.use(middleware);
MpServer.use(router);

// server should listen for request  from font-end
MpServer.listen(port, () => {
  console.log(
    `Media player server started at port ${port}, waiting for request!!`
  );
});
