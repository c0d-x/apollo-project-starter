/* eslint-disable */
require('dotenv').config({ path: '../../.env' });
import { ApolloServer } from 'apollo-server';
import { AppModules } from 'project-starter-datas/src/modules';

const isProduction = process.env.NODE_ENV === 'production';

const server = new ApolloServer({
  modules: [AppModules],
  context: session => session,
  formatError: (err) => {
    console.error(err);
    return err;
  },
  cors: {
    origin: '*',
    credentials: true,
  },
  debug: !isProduction,
  playground: !isProduction,
});

// If we're in a test env, we'll manually start it in a test
if (process.env.PORT !== 'test') {
  server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
      console.info(`Server ready at ${url}`);
    });
}

export default server;
