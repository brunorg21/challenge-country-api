export interface IPopulationValues {
  year: number;
  value: number;
}

export interface ICountryPopulations {
  country: string;
  code: string;
  iso3: string;
  populationCounts: IPopulationValues[];
}
