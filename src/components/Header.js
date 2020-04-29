import React from 'react';

export default function Header() {
    return (
        <div>
            <h1
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '20px',
                    backgroundColor: 'lightgray',
                    height: '10vh',
                    fontFamily: 'permanent marker',
                    fontSize: '50px'  
                }}
            >
                John Stilwell React Final
            </h1>
        </div>
    );
}
