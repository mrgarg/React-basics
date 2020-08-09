import React from 'react';

export const Destructuring_props = ({name,sirName}) =>{
   //  const {name,sirName}= props   // another way
return (
    <div>
        <h1>Hello {name} {sirName}</h1>
    </div>
    
);
}