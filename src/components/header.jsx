import React from 'react';

export default function Header(props){
    return (
        <div>
            <h1>{props.headerText}</h1>
            <h1>{props.arbitraryPhrase}</h1>
        </div>
    )
}