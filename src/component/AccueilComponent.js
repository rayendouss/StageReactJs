import React, { Component } from "react";
import StickyHeadTable from './NewsComponent';
import { Card, CardImg, CardText, CardBody,
    Breadcrumb, BreadcrumbItem  ,CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from "react-router-dom";
import Newscard from './Newscard'
import {News} from '../shared/News'
import { render } from "@testing-library/react";
import Test from './Test';
import Videos from "./VideoComponent";
import styled from "styled-components";
const Wrapper = styled.div`width: 100%`;
const Page = styled.div`width: 100%`;

let news;
news=News;
var p= news.sort(function(a, b){
    return new Date(b.date) - new Date(a.date);

})


    function Lastest (last) {
   
        return (
            <div  >
            <time className="dateTime">{last.last.Date}</time>
            <h3 className="smallTitle"  > {last.last.news}</h3>
            <hr></hr>
        </div>
        );
    }
    function Cultur(rows) {

    console.log(rows.rows)
        var p= rows.rows.sort(function(a, b){
            return new Date(b.date) - new Date(a.date);

        })
        let cult=[];
        p.map((i)=>{
            if(i.TypeF=="culture"){
                cult.push(i)
            }
        })
console.log(cult)
         render ()

        {

            return(


             cult.slice(1,3).map((i)=>{
             return(
                 <div className="row" >
                     <section>
                     <div style={{height: "76px" , width: "320px", marginRight:"10px"}}>
                         <Link  to={`/article/${i._id}`} style={{textDecoration: 'none'}}>
                             <div style={{float:"right" }}>
                                 <figure >
                                     <a>  <img src={i.Photo} style={{width: "200px"}}/></a>
                                 </figure>
                                 <div><time className="dateTime">{i.Date}</time> </div>
                                 <div> <h3 className="smallTitle"  > {i.news}</h3></div>
                             </div>

                         </Link>

                     </div>
                     </section>
                 </div>
             )
             })

        ) }}
function Sport(rows){
 console.log(rows.rows)
    var p= rows.rows.sort(function(a, b){
        return new Date(b.date) - new Date(a.date);

    })
    let cult=[];
    p.map((i)=>{
        if(i.TypeF=="culture"){
            cult.push(i)
        }
    })
    news=News
    console.log(news[0])
    console.log(cult)
var lastcult=rows.rows.filter((p)=>p.TypeF=="culture")

        render()
    {
      return(
           cult.slice(0,1).map((i)=>{
            return (
                <div>
                    <Link to={`/article/${i._id}`} style={{textDecoration: 'none', marginRight: "10px"}}>
                        <div style={{float: "right", padding: "10px"}}>
                            <figure>
                                <a> <img src={i.Photo} style={{width: "350px"}}/></a>
                            </figure>
                            <div>
                                <time className="dateTime">{i.Date}</time>
                            </div>
                            <div><h3 className="smallTitle"> {i.news}</h3></div>
                        </div>

                    </Link>

                </div>
            )})
        )
    }
}

  function  LastVideo(row) {

    render()
      {
          console.log(row.list)
          return(
              <div>
                  <Test rows={row.list}/>
              </div>
          )
      }
  }
    function Politique (rows){
       render()
        {  var   news=rows.rows; console.log(rows)
            return (
                
            news.map((i)=>{
                if(i.TypeF =="arabe" || i.TypeF =="national" ||i.TypeF =="international" )
                {
            return(
                  <div>
                     <div  >
                    
                    <Link to={`/article/${i._id}`} style={{textDecoration: 'none'}}>
         <div  key={i._id}>
         <figure >
          <a>  <img src={i.Photo} style={{width: "350px"}}/></a>
          <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"520px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
            {i.Type}
          </figcaption>
          </figure>
          <div  >
       <time className="dateTime">{i.Date}</time>
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

    var just = props.act.map((i)=>{

        if(i.TypeF=="justice" & nj<5){
            nj++;
        return(
            <div style={{height: "76px" , width: "320px"}} >

                <Link to={`/article/${i._id}`} style={{textDecoration: 'none'}}>
                    <div className="row"  key={i._id}>
                        <Lastest last={i} />
                        <img style={{height:"50px" , width:"60px"}} src={i.Photo}/>
                    </div>
                </Link>
            </div>
        )
        }})
          var soc = props.act.map((i)=>{

              if(i.TypeF=="social" & ns<5){
                  ns++;
                  return(
                      <div style={{height: "76px" , width: "320px"}} >

                          <Link to={`/article/${i._id}`} style={{textDecoration: 'none'}}>
                              <div className="row" key={i._id}>


                                  <Lastest last={i} />

                              </div>
                          </Link>
                      </div>
                  )
              }})
     var na=0;
         var Acc = props.act.map((it)=>{
             if(na<5&& it.Videos=="null"){
                 na++
            return(
                
                     <div style={{height: "76px" , width: "320px"}} >
                   
                   <Link to={`/article/${it._id}`} style={{textDecoration: 'none'}}>
                <div  key={it._id}>
                
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
       
        <div className="acc">
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
         <div className="pagi">
          <StickyHeadTable rows={props.act}/>
          <br>
          </br>
          <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h2>سياسة</h2>
                  
                </div>  
                <br></br>
          <Politique rows={props.act} />
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

           <div className="scroll" style={{height: "250px" , width: "1150px",marginLeft:"100px"}} ><Videos/></div>
           </section>


       </div>
            <div className="types">
                <div className="container">
                    <div className="row ">
                        <div style={{marginRight:50}}>

                            <div  style={{backgroundColor : "black" , color : "white",textAlign: "right" ,      borderRight:" 6px solid #d10909" ,width:350,marginLeft:-50 }}>
                                <h2>قضاء</h2>
                            </div>
                            <div style={{marginLeft : -50}}>
                                {just}
                            </div>

                        </div>
                        <div style={{marginRight:350}}>

                            <div  style={{backgroundColor : "black" , color : "white",textAlign: "right" ,      borderRight:" 6px solid #d10909" ,width:350 }}>

                                <h2>متابعات بالفيديو</h2>
                            </div>
                            <div>
                                <LastVideo list={props.act} />
                            </div>

                        </div>
                        <div >

                            <div  style={{backgroundColor : "black" , color : "white",textAlign: "right" ,      borderRight:" 6px solid #d10909" ,width:300 ,marginRight:"-210px" }}>
                                <h2>ثقافة</h2>

                                <div >
                                    <div  style={{float:"right",marginRight:-20}}> <Sport rows={props.act}/> </div>
                                    <div style={{float:"right"}}> <Cultur rows={props.act}/> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>


        </div>
    );
}
export default Accueil ;
