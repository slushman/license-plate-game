export enum CanadianValue {
  Alberta = 'CA-AB',
  BritishColumbia = 'CA-BC',
  Manitoba = 'CA-MB',
  NewBrunswick = 'CA-NB',
  NewfoundlandAndLabrador = 'CA-NL',
  NorthwestTerritories = 'CA-NT',
  NovaScotia = 'CA-NS',
  Nunavut = 'CA-NU',
  Ontario = 'CA-ON',
  PrinceEdwardIsland = 'CA-PE',
  Quebec = 'CA-QC',
  Saskatchewan = 'CA-SK',
  Yukon = 'CA-YT',
}

export enum CanadianName {
  Alberta = 'Alberta',
  BritishColumbia = 'British Columbia',
  Manitoba = 'Manitoba',
  NewBrunswick = 'New Brunswick',
  NewfoundlandAndLabrador = 'Newfoundland and Labrador',
  NorthwestTerritories = 'Northwest Territories',
  NovaScotia = 'Nova Scotia',
  Nunavut = 'Nunavut',
  Ontario = 'Ontario',
  PrinceEdwardIsland = 'Prince Edward Island',
  Quebec = 'Quebec',
  Saskatchewan = 'Saskatchewan',
  Yukon = 'Yukon',
}

export const CanadianProvinces = [
  {
    value: CanadianValue.Alberta,
    label: CanadianName.Alberta,
  },
  {
    value: CanadianValue.BritishColumbia,
    label: CanadianName.BritishColumbia,
  },
  {
    value: CanadianValue.Manitoba,
    label: CanadianName.Manitoba,
  },
  {
    value: CanadianValue.NewBrunswick,
    label: CanadianName.NewBrunswick,
  },
  {
    value: CanadianValue.NewfoundlandAndLabrador,
    label: CanadianName.NewfoundlandAndLabrador,
  },
  {
    value: CanadianValue.NorthwestTerritories,
    label: CanadianName.NorthwestTerritories,
  },
  {
    value: CanadianValue.NovaScotia,
    label: CanadianName.NovaScotia,
  },
  {
    value: CanadianValue.Nunavut,
    label: CanadianName.Nunavut,
  },
  {
    value: CanadianValue.Ontario,
    label: CanadianName.Ontario,
  },
  {
    value: CanadianValue.PrinceEdwardIsland,
    label: CanadianName.PrinceEdwardIsland,
  },
  {
    value: CanadianValue.Quebec,
    label: CanadianName.Quebec,
  },
  {
    value: CanadianValue.Saskatchewan,
    label: CanadianName.Saskatchewan,
  },
  {
    value: CanadianValue.Yukon,
    label: CanadianName.Yukon,
  },
];

export const translateCanadianValueToLabel = (value: CanadianValue) => {
  switch (value) {
    case CanadianValue.Alberta:
      return CanadianName.Alberta;
    case CanadianValue.BritishColumbia:
      return CanadianName.BritishColumbia;
    case CanadianValue.Manitoba:
      return CanadianName.Manitoba;
    case CanadianValue.NewBrunswick:
      return CanadianName.NewBrunswick;
    case CanadianValue.NewfoundlandAndLabrador:
      return CanadianName.NewfoundlandAndLabrador;
    case CanadianValue.NorthwestTerritories:
      return CanadianName.NorthwestTerritories;
    case CanadianValue.NovaScotia:
      return CanadianName.NovaScotia;
    case CanadianValue.Nunavut:
      return CanadianName.Nunavut;
    case CanadianValue.Ontario:
      return CanadianName.Ontario;
    case CanadianValue.PrinceEdwardIsland:
      return CanadianName.PrinceEdwardIsland;
    case CanadianValue.Quebec:
      return CanadianName.Quebec;
    case CanadianValue.Saskatchewan:
      return CanadianName.Saskatchewan;
    case CanadianValue.Yukon:
      return CanadianName.Yukon;
  }
};

export const translateCanadianLabelToValue = (label: CanadianName) => {
  switch (label) {
    case CanadianName.Alberta:
      return CanadianValue.Alberta;
    case CanadianName.BritishColumbia:
      return CanadianValue.BritishColumbia;
    case CanadianName.Manitoba:
      return CanadianValue.Manitoba;
    case CanadianName.NewBrunswick:
      return CanadianValue.NewBrunswick;
    case CanadianName.NewfoundlandAndLabrador:
      return CanadianValue.NewfoundlandAndLabrador;
    case CanadianName.NorthwestTerritories:
      return CanadianValue.NorthwestTerritories;
    case CanadianName.NovaScotia:
      return CanadianValue.NovaScotia;
    case CanadianName.Nunavut:
      return CanadianValue.Nunavut;
    case CanadianName.Ontario:
      return CanadianValue.Ontario;
    case CanadianName.PrinceEdwardIsland:
      return CanadianValue.PrinceEdwardIsland;
    case CanadianName.Quebec:
      return CanadianValue.Quebec;
    case CanadianName.Saskatchewan:
      return CanadianValue.Saskatchewan;
    case CanadianName.Yukon:
      return CanadianValue.Yukon;
  }
};
