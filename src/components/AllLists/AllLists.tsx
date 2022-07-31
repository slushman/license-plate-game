import * as React from 'react';

import { Action } from '../types';
import FilterSearch from '../FilterSearch';
import List from '../List';
import { ListItemType } from '../types';
import Score from '../Score';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import * as data from './data';

const AllLists = () => {
    const [searchText, setSearchText] = React.useState('');

    // change 'plates-selected' to 'plates-{uuid}' to have different saved games
    const [selected, setSelected] = useLocalStorage('plates-selected', []);
    const count = selected.length;

    const handleChangeSelected = React.useCallback(
        (value: string, action: Action) => {
            if (action === Action.Add) {
                setSelected((prevState: string[]) => [...prevState, value]);
            } else {
                const newSelected = selected.filter((item: string) => item !== value);
                setSelected(newSelected);
            }
        },
        [selected, setSelected],
    );

    const filtered = (items: ListItemType[]) => items.filter((item: ListItemType) => item.label.toLowerCase().includes(searchText));

    return (
        <div className="flex flex-col items-center p-4">
            <Score count={count} />
            <FilterSearch searchText={searchText} setSearchText={setSearchText} />
            <List items={filtered(data.USStates)} onChange={handleChangeSelected} selected={selected} title="US States" />
            <List items={filtered(data.USTerritories)} onChange={handleChangeSelected} selected={selected} title="US Territories" />
            <List items={filtered(data.NativeAmericans)} onChange={handleChangeSelected} selected={selected} title="Native American Nations" />
            <List items={filtered(data.CanadianProvinces)} onChange={handleChangeSelected} selected={selected} title="Canadian Provinces" />
            <List items={filtered(data.MexicanStates)} onChange={handleChangeSelected} selected={selected} title="Mexican States" />
        </div>
    );
};

export default AllLists;
