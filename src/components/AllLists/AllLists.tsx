import * as React from 'react';

import { Action } from '../types';
import List from '../List';
import Score from '../Score';

import * as data from './data';

const AllLists = () => {
    const [selected, setSelected] = React.useState<string[]>([]);
    const count = selected.length;

    const handleChangeSelected = React.useCallback(
        (value: string, action: Action) => {
            if (action === Action.Add) {
                setSelected(prevState => [...prevState, value]);
            } else {
                const newSelected = selected.filter(item => item !== value);
                setSelected(newSelected);
            }
        },
        [selected],
    );

    return (
        <div className="flex flex-col items-center">
            <Score count={count} />
            <List items={data.USStates} onChange={handleChangeSelected} selected={selected} title="US States" />
            <List items={data.USTerritories} onChange={handleChangeSelected} selected={selected} title="US Territories" />
            <List items={data.NativeAmericans} onChange={handleChangeSelected} selected={selected} title="Native American Nations" />
            <List items={data.CanadianProvinces} onChange={handleChangeSelected} selected={selected} title="Canadian Provinces" />
            <List items={data.MexicanStates} onChange={handleChangeSelected} selected={selected} title="Mexican States" />
        </div>
    );
};

export default AllLists;