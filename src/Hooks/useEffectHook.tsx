import React, { useState, useEffect } from 'react';

const Theme = () => {
    const [theme, setTheme] = useState<boolean>(false);


    // useEffect(() => {
    //     // execute side Effect
    //     // mount
    //
    //     return () => {
    //       // unmount, for cleanup function
    //     };
    // }, [
    //     // array of dependencies
    // ]);

    useEffect(() => {
        document.title = `${!theme ? 'Light' : 'Dark'} Theme`;
    }, [theme]);

    const switchTheme = () => {
        // set the switched theme to the state or any other business logic
        // like setting it to the storage or database
        setTheme(!theme);
    }

    return (
        <>
            <button onClick={switchTheme}>Toggle Theme</button>
        </>
    );
}

export default Theme;
