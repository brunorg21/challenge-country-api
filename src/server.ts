import fastify from 'fastify';
import { countriesRoutes } from './http/routes/countries';

const app = fastify();

app.register(countriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running'))
  .catch((e) => console.log(e));
