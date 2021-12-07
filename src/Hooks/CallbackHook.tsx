import React, { useState, useCallback } from 'react';

interface IChildComponentProps {
    count: number;
    updateCount: () => void;
}

const ChildComponent: React.FC<IChildComponentProps> = ({ count, updateCount }) => {
    return (
        <div>
            <button onClick={updateCount}>Child Component {count}</button>
        </div>
    );
}

const CallbackHook = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <>
            <ChildComponent count={count} updateCount={handleClick} />
        </>
    );
}

export default CallbackHook;