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
        block: true,
        'p-4': true,
        'm-2': true,
        'bg-medblue': checked,
        'text-white': checked,
        'text-medblue': !checked,
        'text-lg': true,
        rounded: true,
    });

    return (
        <li className="">
            <label className={labelClasses}>
                <input checked={checked} className="mr-4" onClick={handleChange} type="checkbox" value={value} />
                <span>{label}</span>
            </label>
        </li>
    );
};

export default React.memo(ListItem);
