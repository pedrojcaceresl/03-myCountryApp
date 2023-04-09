export interface Country {
    altSpellings: string[];
    area: number;
    borders: string[];
    capital: string[];
    capitalInfo: CapitalInfo;
    car: Car;
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms: CoatOfArms;
    continents: string[];
    currencies: Currencies;
    demonyms: Demonyms;
    fifa: string;
    flag: string;
    flags: Flags;
    gini: Gini;
    idd: Idd;
    independent: boolean;
    landlocked: boolean;
    languages: Languages;
    latlng: number[];
    maps: Maps;
    name: Name;
    population: number;
    postalCode: PostalCode;
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: { [key: string]: Translation };
    unMember: boolean;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side: string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface Currencies {
    EUR: Eur;
}

export interface Eur {
    name: string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Gini {
    '2018': number;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Languages {
    spa: string;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: Translation;
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex: string;
}
