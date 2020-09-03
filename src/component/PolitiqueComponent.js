import React, { Component, useState } from 'react';
import {News} from '../shared/News';

import { Link } from 'react-router-dom';

const Politique=(props)=> {

  const news = News;

  const a =window.location.pathname;
const url = a.substring(a.lastIndexOf('/') + 1)
 var i = 0 ;
 var types=[];
 news.map((it)=>{
     if(it.typef==url)
     {
       types.push(it)
     }
    
 })
 var max=types[0].date ;
 types.map((i)=>{
   if(i.date>max){
       max=i.date
   }
 })
    return (
       
   
        <div >

<div className="row" style={{ marginLeft : 30}}>
  <section className="lastNews">
  <br></br>
<div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h2>آخر الأخبار</h2>
                    <hr />
                </div>  
      <div >
     
        {
          news.map((p)=>{
            if(p.id>(news.length)-5){

            return (
              <div style={{height: "76px" , width: "320px"}} >
                     <Link to={`/article/${p.id}`} style={{textDecoration: 'none'}}>
                 
              <div  key={p.id}>
              
              <div  >
            <time className="dateTime">{p.date}</time> 
            <h3 className="smallTitle"  > {p.news}</h3>
            <hr></hr>
        </div>
              </div>
              </Link>
              </div>
            )
          }
          })
        }
      </div>
      <div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
          <h2>الأكثر قراءة</h2>
          <hr />
      </div>
      <div >

          {
              news.map((p)=>{
                  if(p.id>(news.length)-5){

                      return (
                          <div style={{height: "76px" , width: "320px"}} >
                              <Link to={`/article/${p.id}`} style={{textDecoration: 'none'}}>

                                  <div  key={p.id}>

                                      <div  >
                                          <time className="dateTime">{p.date}</time>
                                          <h3 className="smallTitle"  > {p.news}</h3>
                                          <hr></hr>
                                      </div>
                                  </div>
                              </Link>
                          </div>
                      )
                  }
              })
          }
      </div>
      </section>
        <div style={{marginLeft : 450}} >
        <br></br>
        <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h2>{url.replace()}</h2>
                    <hr />
                </div>
                
                <div className="row" >
                  

{
    types.map((row)=>{
        if(row.date==max){
        return (
            <div>
            
                   <div >
                   <Link to={`/article/${row.id}`} style={{textDecoration: 'none'}}>
              <div >
              <figure >
       <a>  <img src={row.photo} style = {{ width : 700, height :450}} /></a>
       <figcaption >
         {row.type}
       </figcaption>
       </figure>
       </div>
       <h6 className="dateTime2" style={{float: "right"}}>{row.date}</h6> <br></br>
      <p style={{float: "right"}}>{row.news}</p>
      </Link>
     </div>
            </div>
        )
      } })
}
 </div> 
 <hr />


            {news.map((i)=> 
         { if (( i.typef==url)&&(i.date!=max)){

       return(
         (    <div  >
              <Link to={`/article/${i.id}`} style={{textDecoration: 'none'}}>
    
                  
         <div  key={i.id}>
         <figure >
          <a>  <img src={i.photo} style={{width: "350px"}}/></a>
          <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"450px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
            {i.type}
          </figcaption>
          </figure>
          <div  >
       
       <time className="dateTime">{i.date}</time> 
       <h3 className="smallTitle"  > {i.news}</h3>
       <hr></hr>
   </div>
         </div>
     
         </Link>    </div>) )  }} 
      
            )} </div>
        </div>  </div>
    )
   }
export default Politique ;
