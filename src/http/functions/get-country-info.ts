import { env } from '../../env';
import { IBorder } from '../../models/borders-interface';
import { ICountryFlags } from '../../models/country-flags-interface';
import { ICountryInfo } from '../../models/country-info-interface';
import { IPopulationValues } from '../../models/country-populations';
import { getFlagsByCountry } from './get-flag-by-country';
import { getPopulationForCountry } from './get-population-for-country';

interface GetCountryInfoProps {
  countryCode: string;
}

interface GetCountryInfoResponse {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: IBorder[];
  populations: IPopulationValues[];
  countryFlag: ICountryFlags | null;
}

export async function getCountryInfo({
  countryCode,
}: GetCountryInfoProps): Promise<GetCountryInfoResponse> {
  const response = await fetch(`${env.COUNTRY_INFO_URL}/${countryCode}`);

  const countryInfo: ICountryInfo = await response.json();

  const populations = await getPopulationForCountry({
    countryName: countryInfo.commonName,
  });

  const countryFlag = await getFlagsByCountry({
    countryCode,
  });

  return {
    ...countryInfo,
    populations: populations || [],
    countryFlag: countryFlag || null,
  };
}
