import React, { Component } from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import {News} from '../shared/News';
import { act } from "react-dom/test-utils";
import Card from "@material-ui/core/Card";
import CardImg from "react-bootstrap/CardImg";
import {CardContent} from "semantic-ui-react";
import ReactPlayer from "react-player";
function Detail(art){
    render()
    {
        if(art.art.videos==""){
 return (  <div>

        <div style={{marginLeft : 450}} >
            <br></br>
            <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 8px solid #d10909"}}>

                <h3 className="dateTime" > {art.art.date}</h3>
                <hr />
            </div>

            <div >
                <figure >
                    <a>  <img src={art.art.photo} style = {{ width : 700, height :450}} /></a>
                    <figcaption style={{position : "relative" , top:"-430px" , backgroundColor : "red" , left:"645px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
                        {art.art.type}
                    </figcaption>
                </figure>
            </div>
            <h6 className="dateTime" style={{float: "right"}}>{art.art.date}</h6> <br></br>
            <p style={{float: "right"}}>{art.art.news}</p>
        </div>

    </div>)

}else{
           return(
               <div>
                   <div >
                       <section>

                           <br></br>

                           <div className="row" style={{marginLeft:350}}>

                                               <div className="row" style={{marginLeft:40}}>

                                                       <Card >

                                                         <ReactPlayer url={art.art.videos} />
                                                           <br></br>
                                                           <CardContent  > {art.art.news}</CardContent>
                                                           <h6 className="dateTime2" style={{float: "right"}}>{art.art.date}</h6>

                                                       </Card>

                                               </div>

                                          </div>

                       </section>
                   </div>
               </div>
           )
        }

    }}

const PostDetail=(props)=> {
    
  const news = News;
    const a =window.location.pathname;
    const url = a.substring(a.lastIndexOf('/') + 1);
    console.log(url)
    var art = news.filter((i) => i.id == url)[0]
     console.log(art)
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
          <br></br>
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
           <Detail art={art} />
               </div>
            </div>  
        )
  }
  export default PostDetail ;
