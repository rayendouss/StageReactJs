import React, { Component } from "react";
import { Link } from 'react-router-dom';


const Newsdetail = (props)=>{
    if (props.news != null){
        return (
            <h1>{props.news.id}</h1>
        )
    }
}
export default Newsdetail;