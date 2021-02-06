
import React  from 'react';
import { GifGridItem } from './GifGridItem';

import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrif = ({category }) => {

    const { data: imagenes, loading } = useFetchGifs(category);
    /*const [images,setImages] = useState([]);

    useEffect(()=>{
        obtenergif( category )
        .then( setImages );
    },[ category ])
*/
    
    
    //
    return (
        <>
        <h2>{ category }</h2>
        {loading && <p className= "animate__animated animate__jello">Cargando...</p>}
        {
        <div className = "cardgrid">            
            
                {
                    imagenes.map( img => (                        
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            
            </div>
            }
        </>
    )
}
