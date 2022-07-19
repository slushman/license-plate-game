import * as React from 'react';

interface ScoreProps {
    count: number;
}

const Score = ({ count }: ScoreProps) => {

    return (
        <div className="text-3xl my-8">Total seen: {count}</div>
    );
};

export default React.memo(Score);
