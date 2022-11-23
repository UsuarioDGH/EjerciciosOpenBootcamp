import React, { useState, useEffect } from 'react';
//import React, { useState, useEffect } from 'react';
const ClockF = () => {

    const clock = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San Jose',
    };

    const [user, setUser] = useState(clock);

    useEffect(() => {
        const timerID = setInterval(
            () => {
                updateUser();
            }, 1000
        );
        
        return () => {
            clearInterval (timerID);
        };
    });

    
    const updateUser = () => {
        let edad = user.edad+1;
        return setUser({
            fecha: new Date(),
            edad,
            nombre: user.nombre,
            apellidos: user.apellidos
        });
    };

    return (
        <div>
            <h2>
                Hora Actual:
                {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {user.nombre} { user.apellidos}
            </h3>
            <h1>
                Edad: {user.edad}
            </h1>
        </div>
    );
};

export default ClockF;