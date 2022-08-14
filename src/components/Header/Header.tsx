import * as React from 'react';

import Button from '../Button';

interface HeaderProps {
  onClickScore: () => void;
  onReset: () => void;
  score: number;
}

const Header = ({
  onClickScore,
  onReset,
  score,
}: HeaderProps) => {
  return (
    <header className="items-center flex justify-between pt-4 pb-6 w-full">
      <Button label={`Score: ${score}`} onClick={onClickScore} />
      <h1 className="text-center">Plates</h1>
      <Button label="New Game" onClick={onReset} />
    </header>
  );
};

export default React.memo(Header);
