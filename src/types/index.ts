export type Season = {
  season: string;
  url: string;
};

type Location = {
  lat: string;
  long: string;
  locality: string;
  country: string;
};

type Circuit = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
};

export type Race = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
};

export type Driver = {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
};

export type Result = {
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
  Driver: Driver;
};
