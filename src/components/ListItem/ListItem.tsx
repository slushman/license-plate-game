import * as React from 'react';
import classnames from 'classnames';

import { Action, ListItemInterface } from '../types';

const ListItem = ({ checked, label, onChange, value }: ListItemInterface) => {
  const handleChange = () => {
    const action = checked ? Action.Remove : Action.Add;
    onChange(value, action);
  };

  const labelClasses = classnames({
    'bg-lightblue': !checked,
    'bg-medblue': checked,
    'border-2': true,
    'border-lightblue': !checked,
    'border-solid': checked,
    'border-white': checked,
    'items-center': true,
    'm-2': true,
    'p-4': true,
    'text-lg': true,
    'text-medblue': !checked,
    'text-white': checked,
    block: true,
    flex: true,
    rounded: true,
  });

  return (
    <li className="">
      <label className={labelClasses}>
        <div className="text-xl text-center">{checked ? '✓' : ''}</div>
        <input checked={checked} className="mr-4" onChange={handleChange} type="checkbox" value={value} />
        <span>{label}</span>
      </label>
    </li>
  );
};

export default React.memo(ListItem);
