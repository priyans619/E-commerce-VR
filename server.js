const express = require('express');
const next = require('next');
const basicAuth = require('express-basic-auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //  middleware
  server.use(
    basicAuth({
      users: { 'admin': process.env.ADMIN_PASSWORD }, 
      challenge: true,
      realm: 'Protected Area',
    })
  );

  // Handling arequests through Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
