export interface CountryCardProps {
  capital: string;
  flags: { png: string; svg: string; alt: string };
  name: { common: string; official: string; nativeName: object };
  population: number;
  region: string;
}

export interface CountryProps {
  altSpellings: string[];
  area?: number;
  borders: string[];
  capital?: string[];
  capitalInfo?: { latlng: number[] };
  car?: {
    side: string;
    signs: string[];
  };
  cca2?: string;
  cca3?: string;
  ccn3?: string;
  cioc?: string;
  coatOfArms?: { png: string; svg: string };
  continents?: string[];
  currencies?: { EUR: { name: string; symbol: string } };
  denonyms?: { eng: string };
  fifa?: string;
  flag?: string;
  flags: { png: string; svg: string; alt: string };
  gini?: { number: number };
  idd?: { root: string; suffixex: string[] };
  independent?: boolean;
  landlocked?: boolean;
  languages: object;
  maps?: { googleMaps: string; openStreetMaps: string };
  name: { common: string; official: string; nativeName: object };
  population: number;
  postalCode?: { format: string; regex: string };
  region: string;
  startOfWeek?: string;
  status?: string;
  subregion: string;
  timezones?: string[];
  tld: string[];
  translations?: object;
  unMember?: boolean;
}
