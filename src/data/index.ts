import * as US from './us';
import * as UST from './us-territories';
import * as NA from './native-americans';
import * as CA from './canada';
import * as MX from './mexico';

export * from './us';
export * from './us-territories';
export * from './native-americans';
export * from './canada';
export * from './mexico';

export const AllStates = [
  ...US.USStates,
  ...UST.USTerritories,
  ...NA.NativeAmericanNations,
  ...CA.CanadianProvinces,
  ...MX.MexicanStates,
];
