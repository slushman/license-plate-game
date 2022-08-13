import * as React from 'react';

import Button from '../Button';

interface HeaderProps {
  count: number;
  onClickScore: () => void;
  onReset: (newValue: string[]) => void;
}

const Header = ({
  count,
  onClickScore,
  onReset,
}: HeaderProps) => {
  const handleNewGame = React.useCallback(
    () => onReset([]),
    [onReset],
  );

  return (
    <header className="items-center flex justify-between pt-4 pb-6 w-full">
      <Button label={`Score: ${count}`} onClick={onClickScore} />
      <h1 className="text-center">Plates</h1>
      <Button label="New Game" onClick={handleNewGame} />
    </header>
  );
};

export default React.memo(Header);
