#!/usr/bin/env node

/**
 * Module dependencies.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config()
import Hapi from '@hapi/hapi'

const init = async () => {

  const server = Hapi.server({
      port: process.env.PORT || 3000,
      host: process.env.HOST || 'localhost'
  });
  server.app.key = process.env.APIKEY;
  server.auth.api = process.env.APIKEY;

  server.route({
      method: 'GET',
      path: '/rest/cateservice/category',
      handler: (request, h, error) => {
        console.log(`masukkk`, request.response);
        console.log(`error`, error);
        return "hello world"
      }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();