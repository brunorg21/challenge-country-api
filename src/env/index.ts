import { z } from 'zod';
import 'dotenv/config';

const envSchmea = z.object({
  AVAILABLE_COUNTRIES_URL: z.string(),
  COUNTRY_INFO_URL: z.string(),
  POPULATION_URL: z.string(),
  COUNTRY_FLAGS_URL: z.string(),
});

const _env = envSchmea.safeParse(process.env);

if (!_env.success) {
  console.error('Invalid environment variables', _env.error.format());

  throw new Error('Environment variables not found.');
}

export const env = _env.data;
