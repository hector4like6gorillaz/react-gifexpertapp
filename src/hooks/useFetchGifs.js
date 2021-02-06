import {useState,useEffect} from "react";
import {obtenergif} from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [objeto, setObjeto] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        obtenergif( category )
        .then(imgs =>{

            
            
                setObjeto({
                    data: imgs,
                    loading: false
                });

            

            
        })
    }, [category])

    

    return objeto; //{data: [], loading: true};
}


