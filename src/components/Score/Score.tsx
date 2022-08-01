import * as React from 'react';

interface ScoreProps {
    count: number;
}

const Score = ({ count }: ScoreProps) => (
    <div className="p-2 text-xl">Score: {count}</div>
);

export default React.memo(Score);
