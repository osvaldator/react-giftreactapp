import { useState } from 'react';
import React from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExperoApp = ( { comp } ) => {

    //const categories = ['One', 'Samurai', 'Dragon'];
     const [categories, setCategories]= useState(['One']);

    // const handleAdd = () => {
    //         setCatergories([...categories, 'Simpsons'])
    //         //setCatergories(cat => [...cat, 'Simpsons'])

    //}

    return (
        <>
            <h2> { comp } </h2>
           <AddCategory setCategories={ setCategories } />
            <hr/>
            
            <ol>
            {
                categories.map( (category) =>
                    (
                        <GifGrid 
                            key={category}
                            category={ category }  
                        />
                    //{
                    //(  return <li key={category}>{category}</li>
                    //}

                    )
                )
            }
            </ol>
        </>
        
    );
}


 