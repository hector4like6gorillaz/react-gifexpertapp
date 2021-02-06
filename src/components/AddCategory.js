import React, {useState} from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    
    const [Input, setInput] = useState("");
    
    const HandleInputChange = (e) =>{
        //console.log()
        setInput(e.target.value);
    }
    
    const HandleSubmit = (e)=>{
        e.preventDefault();
        if(Input.trim().length>2){
        setCategories(cats => [ Input,...cats ]);
        setInput("");
        }
    }
    return (
        <form onSubmit = {HandleSubmit}>
        
            <input 
            type="text"
            value = {Input}
            onChange = {HandleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
}