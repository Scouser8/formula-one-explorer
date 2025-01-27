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
