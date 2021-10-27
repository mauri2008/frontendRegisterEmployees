import React from 'react';

const Head = ({keys, head}) => {
    const  tableHead = head || {};

    return (
        <thead>
            <tr>
                {keys.map((key, index) => (<th key={index}>{tableHead[key]||key}</th> ))}
            </tr>
        </thead>
    );
}    

export default Head;