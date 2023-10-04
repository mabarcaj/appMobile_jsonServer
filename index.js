const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3333;
server.use(middlewares);
server.use(router);

server.listen(port);
