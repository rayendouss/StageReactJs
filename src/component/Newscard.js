import React, { Component } from "react";

import {News} from '../shared/News'
import { Link } from "react-router-dom";
export class Newscard extends Component{
   
   render (){
    function newest (tab){
      console.log("aa")
      var max=tab[0];
      tab.map((i)=>{
          if (Date.parse(i.date)>Date.parse(max.date)){
           max=i
          }
        })
        return max;
    }
    const type=News
  var eco= [];
  var sec= []; 
  type.map((i)=>{
    if(i.typef=="economie"){
      eco.push(i);
    }
    else if (i.typef=="securite"){
      sec.push(i);
    }
  })
  const maxe=eco;
  var maxeco=newest(maxe)
  const maxse=sec
  var maxsec = newest(maxse)

      var AcNews  =News ;
   
      var max=AcNews[0] ;
      var types=[];
      console.log(max)
      AcNews.map((i)=>{
    
        if(Date.parse(i.date)>Date.parse(max.date)){
            max=i;
        }
      })
      console.log(max)
      types.push(max);
      var max2=AcNews[0];
      console.log(max2)
      AcNews.map((i)=>{
       if(Date.parse(i.date)>Date.parse(max2.date) ){
        if(max!=i){
    
          max2=i
          
        }
       }
      })
      console.log("aaaaaaa",max2)
    types.push(max2)
    AcNews=types;
         return (

            <div >
                aaaaaaaaaaaaaaaaaaaaaaaa
            {AcNews.map((i)=>
            
         (    <div  >
                                  
                    <Link to={`/article/${i.id}`} style={{textDecoration: 'none'}}>
         <div  key={i.id}>
         <figure >
          <a>  <img src={i.photo} style={{width: "350px", marginLeft:20}}/></a>
          <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"315px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
            {i.type}
          </figcaption>
          </figure>
          <div  >
       <time className="dateTime">{i.date}</time> 
       <h3 className="smallTitle"  > {i.news}</h3>
       <hr></hr>
   </div>
         </div>
     </Link>
         </div>)
      
            )} 
            <div>
            <div>
  <div>
  <div style={{height: "76px" , width: "320px"}} >
          <Link to={`/article/${maxeco.id}`}>
      
   <div  key={maxeco.id}>
   <figure >

          <a>  <img src={maxeco.photo} style={{width: "350px", marginLeft:20}}/></a>
          <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"315px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
            {maxeco.type}
          </figcaption>
          </figure>
   <div  >
 <time className="dateTime">{maxeco.date}</time> 
 <h3 className="smallTitle"  > {maxeco.news}</h3>
 <hr></hr>
</div>
   </div>
   </Link>
 
   {
     eco.map((p)=>{
       if(p!=maxeco){
         return(
          <div style={{height: "76px" , width: "320px"}} >
          <Link to={`/article/${p.id}`}>
      
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
   <div>
   <div>
  <div style={{height: "76px" , width: "320px"}} >
          <Link to={`/article/${maxsec.id}`}>
      
   <div  key={maxsec.id}>
   <figure >
          <a>  <img src={maxsec.photo} style={{width: "350px", marginLeft:20}}/></a>
          <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"315px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
            {maxsec.type}
          </figcaption>
          </figure>
   <div  >
 <time className="dateTime">{maxsec.date}</time> 
 <h3 className="smallTitle"  > {maxsec.news}</h3>
 <hr></hr>
</div>
   </div>
   </Link>
 
   {
     sec.map((p)=>{
       if(p!=maxsec){
         return(
          <div style={{height: "76px" , width: "320px"}} >
          <Link to={`/article/${p.id}`}>
      
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
            </div>
   </div>
</div>


            </div>
          
            </div>   </div>
         
  </div>
   
       ) 
    }
}
export default Newscard;
