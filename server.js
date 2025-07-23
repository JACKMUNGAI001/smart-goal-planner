import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Make sure db.json is in root
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
});
