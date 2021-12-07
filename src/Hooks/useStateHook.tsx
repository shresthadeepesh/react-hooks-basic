import React, { useState, useEffect } from 'react';

const Theme = () => {
    const [theme, setTheme] = useState<boolean>(false);

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