import React from 'react';

export default function ButtonSizes(props) {

    function handleElement(e) { 
       
        props.handleTagId(e.target.id)
  
      }

  return (   
        
            <p className="main-tag category-item" onClick={handleElement} id={props.id}>
                {props.title}
            </p>
       
    );
}
