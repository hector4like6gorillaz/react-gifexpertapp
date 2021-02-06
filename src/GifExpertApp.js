import React,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrif } from "./components/GifGrif";

//import PropTypes from "prop-types";


export const GifExpertApp = ()=> {   
    
    const [categories, setCategories] = useState(["bob esponja"]);    
    //const handleAdd = () => setcategories([...categories, `hunter hunter `]);        
    //const categories = ["one punch", "samurai x", "Dragon ball"];
    //
        return (
            <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>            
            <hr/>
            
            
            <ol>
            {
                categories.map( category => (
                <GifGrif 
                key={category}  
                category ={category}
                />
                ))
            }
            </ol>
            </>
        )
}