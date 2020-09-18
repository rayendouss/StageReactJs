import React, { Component } from "react";

import {News} from '../shared/News'
import { Link } from "react-router-dom";
export class Newscard extends Component{
    state={
        items:[],
        isLoaded:false
    }

    componentDidMount() {
        fetch('http://localhost:3100/all')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data.news ,isLoaded : true })

            })
            .catch(console.log)

    }

   render (){

    function newest (tab){

      var max=tab[0];
      tab.map((i)=>{
          if (Date.parse(i.Date)>Date.parse(max.Date)){
           max=i
          }
        })
        return max;
    }
    var type=this.state.items

  var eco= [];
  var sec= [];
       var soci=[]
       var ara =[]

       type.map((i)=>{
      if(i.TypeF=="economie"){
          eco.push(i);
      }
      else if (i.TypeF=="securite"){
          sec.push(i);
      }else if(i.TypeF=="arabe"){
          ara.push(i)
      }
      else if(i.TypeF=="social"){
          soci.push(i)
      }
  })
       ara.sort(function (a, b) {
           return new Date(b.Date) - new Date(a.Date);

       });
       soci.sort(function (a, b) {
           return new Date(b.Date) - new Date(a.Date);

       });
       eco.sort(function (a, b) {
           return new Date(b.Date) - new Date(a.Date);

       });
  sec.sort(function (a, b) {
           return new Date(b.Date) - new Date(a.Date);

       });
  var firsteco=eco[0];
       var firstsec=sec[0];

      var AcNews  =News ;
   
      var max=AcNews[0] ;
      var types=[];
      console.log(max)
      AcNews.map((i)=>{
    
        if(Date.parse(i.Date)>Date.parse(max.Date)){
            max=i;
        }
      })

      types.push(max);
      var max2=AcNews[0];

      AcNews.map((i)=>{
       if(Date.parse(i.Date)>Date.parse(max2.Date) ){
        if(max!=i){
    
          max2=i
          
        }
       }
      })

    types.push(max2)
  console.log(ara)
       console.log(soci)
         return (

            <div >
                {
                    ara.slice(0,1).map((i)=>{
                  return(  <div>

                        <Link to={`/article/${i._id}`} style={{textDecoration: 'none'}}>
                            <div>
                                <figure>
                                    <a> <img src={i.Photo} style={{width: "350px", marginLeft: 20}}/></a>
                                    <figcaption style={{
                                        position: "relative",
                                        backgroundColor: "red",
                                        left: "315px",
                                        height: "30px",
                                        lineHeight: "30px",
                                        width: "50px",
                                        padding: "0 15Opx",
                                        color: "white",
                                        borderRight: " 6px solid #FFFFFF",
                                        marginRight: "20",
                                        top:"-180px"
                                    }}>
                                        {i.Type}
                                    </figcaption>
                                </figure>
                                <div>
                                    <time className="dateTime">{i.Date}</time>
                                    <h3 className="smallTitle">{i.news}</h3>
                                    <hr></hr>
                                </div>
                            </div>

                        </Link>
                    </div>)})}
            <div>
                {
                    soci.slice(0,1).map((i)=>{
                        return(  <div>

                            <Link to={`/article/${i._id}`} style={{textDecoration: 'none'}}>
                                <div>
                                    <figure>
                                        <a> <img src={i.Photo} style={{width: "350px", marginLeft: 20}}/></a>
                                        <figcaption style={{
                                            position: "relative",
                                            backgroundColor: "red",
                                            left: "315px",
                                            height: "30px",
                                            lineHeight: "30px",
                                            width: "50px",
                                            padding: "0 15Opx",
                                            color: "white",
                                            borderRight: " 6px solid #FFFFFF",
                                            marginRight: "20",
                                            top:"-180px"
                                        }}>
                                            {i.Type}
                                        </figcaption>
                                    </figure>
                                    <div>
                                        <time className="dateTime">{i.Date}</time>
                                        <h3 className="smallTitle">{i.news}</h3>
                                        <hr></hr>
                                    </div>
                                </div>

                            </Link>
                        </div>)})}
            <div>

  <div>
  <div style={{height: "76px" , width: "320px"}} >
   {
     eco.map((p)=>{
         if(p==firsteco){
             return (
                 <Link to={`/article/${p._id}`}>

                     <div  key={p._id}>
                         <figure >

                             <a>  <img src={p.Photo} style={{width: "350px", marginLeft:20}}/></a>
                             <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"315px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
                                 {p.Type}
                             </figcaption>
                         </figure>
                         <div  >
                             <time className="dateTime">{p.Date}</time>
                             <h3 className="smallTitle"  > {p.news}</h3>
                             <hr></hr>
                         </div>
                     </div>
                 </Link>
             )
         }
else{
             return(
                 <div style={{height: "76px" , width: "320px"}} >

                     <Link to={`/article/${p._id}`}>

                         <div  key={p._id}>

                             <div  >
                                 <time className="dateTime">{p.Date}</time>
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

 
   {
     sec.map((p)=>{
             if(firstsec==p){
             return(
                 <Link to={`/article/${p._id}`}>

                     <div  key={p._id}>
                         <figure >
                             <a>  <img src={p.Photo} style={{width: "350px", marginLeft:20}}/></a>
                             <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"315px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
                                 {p.Type}
                             </figcaption>
                         </figure>
                         <div  >
                             <time className="dateTime">{p.Date}</time>
                             <h3 className="smallTitle"  > {p.news}</h3>
                             <hr></hr>
                         </div>
                     </div>
                 </Link>
             )
             }
             else{
                 return(
                     <div style={{height: "76px" , width: "320px"}} >
                         <Link to={`/article/${p._id}`}>

                             <div  key={p._id}>

                                 <div  >
                                     <time className="dateTime">{p.Date}</time>
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
