import { FastifyInstance } from 'fastify';
import { getAllAvailableCountries } from '../functions/get-all-available-countries';
import { validateCountryCodeParam } from '../validators/validate-country-code-param';
import { getCountryInfo } from '../functions/get-country-info';

export function countriesRoutes(app: FastifyInstance) {
  app.get('/countries', async (_, reply) => {
    try {
      const countries = await getAllAvailableCountries();
      return reply.send({
        countries,
      });
    } catch (error) {
      return reply.status(500).send({
        message: 'Internal Server Error',
        error,
      });
    }
  });

  app.get('/countries/:countryCode', async (request, reply) => {
    const { countryCode } = validateCountryCodeParam.parse(request.params);

    try {
      const countryInfo = await getCountryInfo({
        countryCode,
      });

      return reply.status(200).send({
        countryInfo,
      });
    } catch (error) {
      return reply.status(500).send({
        message: 'Internal Server Error',
        error,
      });
    }
  });
}
