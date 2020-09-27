process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config()
import Hapi from '@hapi/hapi'
import { getCategories, } from '../controller/categoryController'

const init = async () => {

  const server = Hapi.server({
      port: process.env.PORT || 3000,
      host: process.env.HOST || 'localhost'
  });
  server.app.key = process.env.APIKEY;
  server.auth.api = process.env.APIKEY;

  // server.route({
  //     method: 'GET',
  //     path: '/rest/cateservice/category',
	// 		config: {
	// 			handler: getCategories,
	// 			description: 'Gets all user list'
	// 		}	
  // });

  server.route({
      method: 'POST',
      path: '/rest/prodservices/product',
			config: {
				handler: getCategories,
				description: 'Gets all user list'
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