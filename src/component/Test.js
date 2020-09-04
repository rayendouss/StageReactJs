import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "semantic-ui-react/dist/commonjs/views/Item";
import {News} from '../shared/News';
import {Link} from "react-router-dom";
class Test extends Component{

   render(){
       const news= News;
       var newstri=[];
       news.map((i)=>{
           if(i.videos!=""){
               newstri.push(i)
           }
       })
       var p= newstri.sort(function(a, b){
           return new Date(b.date) - new Date(a.date);

       })

       return(
           <div>

           <Carousel itemsToShow={1} style={{width:250,height:100, background:"white" }}>
                   <Item >
                       <img src={p[0].photo}  style={{width:200, height:100}}/>
                       <h6 className="dateTime2" style={{color:"red"}}>{p[0].date}</h6>
                       <p>{p[0].news}</p>

                   </Item>
                   <Item>
                       <img src={p[1].photo } style={{width:200, height:100}} />
                       <h6 className="dateTime2" style={{color:"red"}}>{p[1].date}</h6>
                       <p>{p[1].news}</p>
                   </Item>
                   <Item>
                       <img src={p[2].photo} style={{width:200, height:100}}/>
                       <h6 className="dateTime2" style={{color:"red"}}>{p[2].date}</h6>
                       <p>{p[2].news}</p>
                   </Item>
           </Carousel>
           </div>
       )
   }
}
export default Test ;
