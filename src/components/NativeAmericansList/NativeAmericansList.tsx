import * as React from "react";

import List from "../List";
import { Action, ListItemType } from "../types";
import { NativeAmericanNations } from "../../data/native-americans";

interface NativeAmericansListProps {
  onChange: (value: string, action: Action) => void;
  searchText: string;
  selected: string[];
}

const NativeAmericansList = ({
  onChange,
  searchText,
  selected,
}: NativeAmericansListProps) => {
  const items = NativeAmericanNations.filter((item: ListItemType) =>
    item.label.toLowerCase().includes(searchText)
  );

  return (
    <List
      items={items}
      onChange={onChange}
      selected={selected}
      title="Native American Nations"
    />
  );
};

export default NativeAmericansList;
