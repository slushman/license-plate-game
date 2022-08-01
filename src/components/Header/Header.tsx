import * as React from 'react';

import Score from '../Score';

interface HeaderProps {
  count: number;
  onReset: (newValue: string[]) => void;
}

const Header = ({
  count,
  onReset,
}: HeaderProps) => {
  const handleNewGame = () => onReset([]);

  return (
    <header className="items-center flex justify-between pt-4 pb-6 w-full">
      <Score count={count} />
      <h1 className="text-center">Plates</h1>
      <button className="bg-darkblue border p-2 rounded text-white" onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default React.memo(Header);
