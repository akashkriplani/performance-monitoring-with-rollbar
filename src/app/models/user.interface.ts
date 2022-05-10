export interface Address {
  city: string;
  geo: Coords;
  street: string;
  suite: string;
  zipcode: string;
}

export interface Coords {
  lat: string;
  lng: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
