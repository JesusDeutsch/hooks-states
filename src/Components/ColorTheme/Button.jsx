import React from 'react';

const Button = ({ isDark, setIsDark }) => {

    const buttonStyle = isDark ? 'bg-gray-600 text-white w-[150px]' : 'bg-gray-300 text-black text-white w-[150px]';

    return (

        <button className={`mt-4 p-2 border rounded ${buttonStyle}`} onClick={() => setIsDark(!isDark)}>

            {isDark ? 'Light' : 'Dark'}

        </button>
    );
};

export default Button;