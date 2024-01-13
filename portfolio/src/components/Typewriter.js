import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, infinite }) => {
    const [ currentText, setCurrentText ] = useState("");
    const [ currentIdx, setCurrentIdx ] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIdx <= text.length) {
            timeout = setTimeout(() => {
               setCurrentText(prevText => prevText + text[currentIdx]);
               setCurrentIdx(prevIdx => prevIdx + 1); 
            }, delay);
        } else if (infinite) {
            setCurrentIdx(0);
            setCurrentText("");
        }

        return () => clearTimeout(timeout);
    }, [ currentIdx, delay, infinite, text ]);

    return <span className="text-5xl font-barlow font-bold">{ currentText }</span>
}

export default Typewriter;