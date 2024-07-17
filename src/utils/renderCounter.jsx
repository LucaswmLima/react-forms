import React, { useRef, useEffect } from 'react';

function RenderCounter({ charactersNumber, linesNumber }) {
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
    });

    return (
        <div>
            <h4>Performance meter</h4>
            <p>Number of renders: {renderCount.current}</p>
        </div>
    );
}

export default RenderCounter;