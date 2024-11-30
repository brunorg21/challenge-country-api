import { env } from '../../env';
import { ICountryPopulations } from '../../models/country-populations';

interface GetPopulationForCountryProps {
  countryName: string;
}

interface GetPopulationsResponse {
  data: ICountryPopulations[];
}

export async function getPopulationForCountry({
  countryName,
}: GetPopulationForCountryProps) {
  const response = await fetch(`${env.POPULATION_URL}`);

  const { data }: GetPopulationsResponse = await response.json();

  const countryRelated = data.find(
    (country) => country.country === countryName,
  );

  return countryRelated?.populationCounts;
}
