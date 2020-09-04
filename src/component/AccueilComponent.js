import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem , PaginationLink , PaginationItem , Pagination, Col , Table,Row} from 'reactstrap';
import StickyHeadTable from './NewsComponent';
import { Link } from "react-router-dom";
import Newscard from './Newscard'
import {News} from '../shared/News'
import { render } from "@testing-library/react";
import Test from './Test'
import Videos from "./VideoComponent";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
const Wrapper = styled.div`width: 100%`;
const Page = styled.div`width: 100%`;
let cult;
cult=[];
let news;
news=News;
var p= news.sort(function(a, b){
    return new Date(b.date) - new Date(a.date);

})

p.sort();
p.map((i)=>{
    if(i.typef=="culture"){
        cult.push(i)
    }
})

    function Lastest (last) {
   
        return (
            <div  >
            <time className="dateTime">{last.last.date}</time> 
            <h3 className="smallTitle"  > {last.last.news}</h3>
            <hr></hr>
        </div>
        );
    }
    function Cultur() {
         render ()
        {return(


             cult.slice(1).map((i)=>{
             return(
                 <div className="row" >
                     <section>
                     <div style={{height: "76px" , width: "320px", marginRight:"10px"}}>
                         <Link  to={`/article/${i.id}`} style={{textDecoration: 'none'}}>
                             <div style={{float:"right" }}>
                                 <figure >
                                     <a>  <img src={i.photo} style={{width: "200px"}}/></a>
                                 </figure>
                                 <div><time className="dateTime">{i.date}</time> </div>
                                 <div> <h3 className="smallTitle"  > {i.news}</h3></div>
                             </div>

                         </Link>

                     </div>
                     </section>
                 </div>
             )
             })

        ) }}
function Sport(){
        render()
    {
            return(
                <div>
                    <Link  to={`/article/${cult[0].id}` } style={{textDecoration: 'none' ,marginRight:"10px"}}>
                        <div style={{float:"right" , padding:"10px"}}>
                            <figure >
                                <a>  <img src={cult[0].photo} style={{width: "400px"}}/></a>
                            </figure>
                            <div><time className="dateTime">{cult[0].date}</time> </div>
                            <div> <h3 className="smallTitle"  > {cult[0].news}</h3></div>
                        </div>

                    </Link>

                </div>
            )
    }
}


    function Politique (rows){
       render()
        {  var   news=rows.rows; console.log(rows)
            return (
                
            news.map((i)=>{
                if(i.typef =="arabe" || i.typef =="national" ||i.typef =="international" )
                {
            return(
                  <div>
                     <div  >
                    
                    <Link to={`/article/${i.id}`} style={{textDecoration: 'none'}}>
         <div  key={i.id}>
         <figure >
          <a>  <img src={i.photo} style={{width: "350px"}}/></a>
          <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"520px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
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
         </div>
                  </div>
              )}}))}}  
    

      const Accueil = (props) =>{
          var nj=0; var ns=0;
    var just = p.map((i)=>{

        if(i.typef=="justice" & nj<5){
            nj++;
        return(
            <div style={{height: "76px" , width: "320px"}} >

                <Link to={`/article/${i.id}`} style={{textDecoration: 'none'}}>
                    <div className="row"  key={i.id}>
                        <Lastest last={i} />
                        <img style={{height:"50px" , width:"60px"}} src={i.photo}/>
                    </div>
                </Link>
            </div>
        )
        }})
          var soc = p.map((i)=>{

              if(i.typef=="social" & ns<5){
                  ns++;
                  return(
                      <div style={{height: "76px" , width: "320px"}} >

                          <Link to={`/article/${i.id}`} style={{textDecoration: 'none'}}>
                              <div className="row" key={i.id}>


                                  <Lastest last={i} />

                              </div>
                          </Link>
                      </div>
                  )
              }})
     var na=0;
         var Acc = p.map((it)=>{
             if(na<5&& it.videos==""){
                 na++
            return(
                
                     <div style={{height: "76px" , width: "320px"}} >
                   
                   <Link to={`/article/${it.id}`} style={{textDecoration: 'none'}}>
                <div  key={it.id}>
                
                    <Lastest last={it} />
                </div>
            </Link>
                </div>
            )}

        })
        
      var news=News;
        var lect = news.map((it)=>{
   
            return(
                
                     <div className="row" style={{height: "76px" , width: "320px"}} >
                         <div>
                  <a>  <img src={it.photo} style={{width: "70px" ,marginLeft:250,textAlign:"right"}}/></a> </div>
                   <Link to={`/article/${it.id}`} style={{textDecoration: 'none'}}>
                <div  key={it.id}>
                
                    <Lastest last={it} />
                    <hr></hr>
                </div>
            </Link>
            
                </div>
                
            )

        })


     
       
        
   

    return (
       
        <div >
            <div>
                <Breadcrumb style ={{width :'70px' , marginLeft : 30}}>
                   
                    <BreadcrumbItem active >Menu</BreadcrumbItem>
                </Breadcrumb>
                </div  >
                <div className="row" style={{ marginLeft : 30}}>
                <section className="lastNews">
                <div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h2>آخر الأخبار</h2>
                    <hr />
                </div>
            <div>
                {Acc}
            </div>
            <br></br> <br></br>
            <div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h2>الأكثر قراءة</h2>
                    <hr />
                </div>
                    <div>
                        {Acc}
                    </div>
                    <br></br>

                    <div>
                        <div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                            <h2>مجتمع
                            </h2>
                            <hr />
                        </div>
                        <div>
                            {soc}
                        </div>
                    </div>
            </section>
            
          <div >
             <Newscard/>
         </div>
         <div >
          <StickyHeadTable /> 
          <br>
          </br>
          <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h2>سياسة</h2>
                  
                </div>  
                <br></br>
          <Politique rows={News} />
          </div>
         <div>
     
          </div> 
            <div>
            
        
            </div>
            </div>
       <div>
           <section>
            <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                   <div> <h2>رياضة</h2></div>
                </div>

           <div style={{height: "250px" , width: "1150px",marginLeft:"100px"}} ><Videos/></div>
           </section>


       </div>
            <div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-12 col-md m-1">
                        </div>
                        <div className="col-12 col-md m-1">
                            aaaaaaaa
                        </div>
                        <div className="col-12 col-md m-1">
                           aaaaaaaaaaaaaa
                        </div>
                    </div>
                </div>
        </div>


        </div>
    );
}
export default Accueil ;
