export interface IBorder {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: IBorder[] | null;
}
