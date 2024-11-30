import { IBorder } from "./borders-interface"

export interface ICountryInfo {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: IBorder[]
}