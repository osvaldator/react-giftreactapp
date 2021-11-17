import React from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs';
//import React, {useState, useEffect} from 'react'
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFecthGifs(category);

    return (
        <>
            <h3 className="animate__bounce"> { category } </h3>
            
            { loading && <p className="animate__bounce">Loading</p>}

            <div className='card-grid'>
            
                {
                    images.map( img =>
                        (
                        <GifGridItem
                            key={img.id}
                            {...img }
                        />
                        
                    ))
                }
        </div>
        </>
    )
}

