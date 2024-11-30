import { env } from '../../env';
import { ICountryFlags } from '../../models/country-flags-interface';

interface GetFlagByCountryProps {
  countryCode: string;
}

interface GetFlagsByCountryResponse {
  data: ICountryFlags[];
}

export async function getFlagsByCountry({
  countryCode,
}: GetFlagByCountryProps) {
  const response = await fetch(`${env.COUNTRY_FLAGS_URL}`);

  const { data }: GetFlagsByCountryResponse = await response.json();

  const countryFlag = data.find((country) => country.iso2 === countryCode);

  return countryFlag;
}
