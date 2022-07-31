import * as React from 'react';

import ListItem from '../ListItem';
import { ListInterface, ListItemType } from '../types';

const List = ({ items, onChange, selected, title }: ListInterface) => {

    return (
        <section className="w-full">
            <h2 className="text-center">{title}</h2>
            <ul className="grid grid-cols-boxes justify-center">
                {items.map(({ label, value }: ListItemType, index: number) => {
                    const checked = selected.includes(value);
                    return <ListItem checked={checked} key={index} label={label} onChange={onChange} value={value} />;
                })}
            </ul>
        </section>
    );
};

export default React.memo(List);
