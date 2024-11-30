import { env } from '../../env';
import { ICountry } from '../../models/country-interface';

export async function getAllAvailableCountries() {
  const response = await fetch(env.AVAILABLE_COUNTRIES_URL);

  const countries: ICountry[] = await response.json();

  return countries;
}
