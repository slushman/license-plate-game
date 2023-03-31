export type ListItemType = {
  label: string;
  value: string;
};

export interface ListItemInterface {
  checked: boolean;
  label: string;
  onChange: (value: string, action: Action) => void;
  value: string;
}

export type stateState = {
  [state: string]: boolean;
};

export enum Action {
  Add,
  Remove,
}

export interface ListInterface {
  items: ListItemType[];
  onChange: (value: string, action: Action) => void;
  selected: string[],
  title: string;
}

export enum IconButtonStyle {
  Default,
  Border,
}

export enum IconButtonLayout {
  Default,
  Square,
  Tight,
}
