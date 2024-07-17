import React, { useState } from 'react';
import Button from './Button'; // Asegúrate de tener la ruta correcta al componente Button

const ParentComponent = () => {
    const [isDark, setIsDark] = useState(false);

    const containerStyle = isDark ? 'bg-black text-white border-white' : 'bg-white text-black border-black';

    return (
        <div className={`flex flex-col items-center justify-self-center p-6 border ${containerStyle}`}>

            <h1 className='text-2xl'>Color Theme</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officia eum ipsum, soluta minima temporibus quidem corrupti ad alias eos maxime, veniam ipsa sequi modi, atque provident. Unde, vero saepe.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi voluptatum reiciendis iste explicabo eum quam distinctio ea assumenda, mollitia veritatis doloremque eius optio necessitatibus modi cum eveniet facilis provident!</p>

            <Button isDark={isDark} setIsDark={setIsDark} />

        </div>
    );
};

export default ParentComponent;