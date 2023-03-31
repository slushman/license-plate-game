export enum USTerritoryValue {
  AmericanSamoa = 'UST-AS',
  WashingtonDC = 'UST-DC',
  Guam = 'UST-GU',
  JohnstonAtoll = 'UST-JA',
  MidwayAtoll = 'UST-MY',
  NorthernMarianaIslands = 'UST-MP',
  PanamaCanalZone = 'UST-PC',
  PuertoRico = 'UST-PR',
  USGovernment = 'UST-US',
  USVirginIslands = 'UST-VI',
  WakeIsland = 'UST-WK',
}

export enum USTerritoryName {
  AmericanSamoa = 'American Samoa',
  WashingtonDC = 'Washington D.C.',
  Guam = 'Guam',
  JohnstonAtoll = 'Johnston Atoll',
  MidwayAtoll = 'Midway Atoll',
  NorthernMarianaIslands = 'Northern Mariana Islands',
  PanamaCanalZone = 'Panama Canal Zone',
  PuertoRico = 'Puerto Rico',
  USGovernment = 'US Government',
  USVirginIslands = 'US Virgin Islands',
  WakeIsland = 'Wake Island',
}

export const USTerritories = [
  {
    value: USTerritoryValue.AmericanSamoa,
    label: USTerritoryName.AmericanSamoa,
  },
  {
    value: USTerritoryValue.WashingtonDC,
    label: USTerritoryName.WashingtonDC,
  },
  {
    value: USTerritoryValue.Guam,
    label: USTerritoryName.Guam,
  },
  {
    value: USTerritoryValue.JohnstonAtoll,
    label: USTerritoryName.JohnstonAtoll,
  },
  {
    value: USTerritoryValue.MidwayAtoll,
    label: USTerritoryName.MidwayAtoll,
  },
  {
    value: USTerritoryValue.NorthernMarianaIslands,
    label: USTerritoryName.NorthernMarianaIslands,
  },
  {
    value: USTerritoryValue.PanamaCanalZone,
    label: USTerritoryName.PanamaCanalZone,
  },
  {
    value: USTerritoryValue.PuertoRico,
    label: USTerritoryName.PuertoRico,
  },
  {
    value: USTerritoryValue.USGovernment,
    label: USTerritoryName.USGovernment,
  },
  {
    value: USTerritoryValue.USVirginIslands,
    label: USTerritoryName.USVirginIslands,
  },
  {
    value: USTerritoryValue.WakeIsland,
    label: USTerritoryName.WakeIsland,
  },
];

export const translateUSTerritoryValueToLabel = (value: USTerritoryValue) => {
  switch (value) {
    case USTerritoryValue.AmericanSamoa:
      return USTerritoryName.AmericanSamoa;
    case USTerritoryValue.WashingtonDC:
      return USTerritoryName.WashingtonDC;
    case USTerritoryValue.Guam:
      return USTerritoryName.Guam;
    case USTerritoryValue.JohnstonAtoll:
      return USTerritoryName.JohnstonAtoll;
    case USTerritoryValue.MidwayAtoll:
      return USTerritoryName.MidwayAtoll;
    case USTerritoryValue.NorthernMarianaIslands:
      return USTerritoryName.NorthernMarianaIslands;
    case USTerritoryValue.PanamaCanalZone:
      return USTerritoryName.PanamaCanalZone;
    case USTerritoryValue.PuertoRico:
      return USTerritoryName.PuertoRico;
    case USTerritoryValue.USGovernment:
      return USTerritoryName.USGovernment;
    case USTerritoryValue.USVirginIslands:
      return USTerritoryName.USVirginIslands;
    case USTerritoryValue.WakeIsland:
      return USTerritoryName.WakeIsland;
  }
};

export const translateUSTerritoryLabelToValue = (label: USTerritoryName) => {
  switch (label) {
    case USTerritoryName.AmericanSamoa:
      return USTerritoryValue.AmericanSamoa;
    case USTerritoryName.WashingtonDC:
      return USTerritoryValue.WashingtonDC;
    case USTerritoryName.Guam:
      return USTerritoryValue.Guam;
    case USTerritoryName.JohnstonAtoll:
      return USTerritoryValue.JohnstonAtoll;
    case USTerritoryName.MidwayAtoll:
      return USTerritoryValue.MidwayAtoll;
    case USTerritoryName.NorthernMarianaIslands:
      return USTerritoryValue.NorthernMarianaIslands;
    case USTerritoryName.PanamaCanalZone:
      return USTerritoryValue.PanamaCanalZone;
    case USTerritoryName.PuertoRico:
      return USTerritoryValue.PuertoRico;
    case USTerritoryName.USGovernment:
      return USTerritoryValue.USGovernment;
    case USTerritoryName.USVirginIslands:
      return USTerritoryValue.USVirginIslands;
    case USTerritoryName.WakeIsland:
      return USTerritoryValue.WakeIsland;
  }
};
