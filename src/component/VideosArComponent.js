import React, { Component } from 'react';
import {News} from '../shared/News';
import Card from "@material-ui/core/Card";
import ReactPlayer from "react-player"
import CardImg from "react-bootstrap/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import CardBody from "reactstrap/es/CardBody";
import {CardContent} from "semantic-ui-react";
import { Link } from 'react-router-dom';
const Videos=(props)=> {
    const news = News;
    const a =window.location.pathname;
    const url = a.substring(a.lastIndexOf('/') + 1)
    var i = 0 ;
    return (

        <div >
            <section>

            <br></br>
    <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 6px solid #d10909" ,marginLeft : 1450}} >
        <h2>{url}</h2>
        <hr />
    </div>
                <div className="row" style={{marginLeft:350}}>
                {
                    news.map((i)=>{
                        if(i.videos !=""){
                            return(
             <div className="row" style={{marginLeft:40}}>
                 <Link to={`/article/${i.id}`}  style={{textDecoration: 'none'}}>
                   <Card >

                       <CardImg src={i.photo} />
                       <br></br>
                       <CardContent  > {i.news}</CardContent>
                       <h6 className="dateTime2" style={{float: "right"}}>{i.date}</h6>

                   </Card>
                 </Link>
             </div>

                            )}})}</div>

            </section>
        </div>
    )
}
export default Videos ;
