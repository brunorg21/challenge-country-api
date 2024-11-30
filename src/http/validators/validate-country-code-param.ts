import { z } from 'zod';

export const validateCountryCodeParam = z.object({
  countryCode: z.string(),
});
