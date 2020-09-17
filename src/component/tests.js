import React, {Component, useEffect, useState} from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import {News} from '../shared/News';
import { act } from "react-dom/test-utils";
import Card from "@material-ui/core/Card";
import CardImg from "react-bootstrap/CardImg";
import {CardContent} from "semantic-ui-react";
import ReactPlayer from "react-player";
import axios from 'axios'
function Lastest(data) {
render()
    {
        console.log(data)
     return  ( <div className="row" style={{ marginLeft : 30}}>
            <section className="lastNews">
                <br></br>
                <div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h2>آخر الأخبار</h2>
                    <hr />
                </div>
                <div >

                    {
                        data.slice(0,5).map((p)=>{


                            return (
                                <div style={{height: "76px" , width: "320px"}} >
                                    <Link to={`/article/${p._id}`} style={{textDecoration: 'none'}}>

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

                        })
                    }
                </div>
                <div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h2>الأكثر قراءة</h2>
                    <hr />
                </div>
                <div >

                    {
                        data.slice(0,5).map((p)=>{


                            return (
                                <div style={{height: "76px" , width: "320px"}} >
                                    <Link to={`/article/${p._id}`} style={{textDecoration: 'none'}}>

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

                        })
                    })
                </div>
            </section>
        </div>)
    }
}
function Detail(art){
    console.log(art.art)
    render()
    {
        if(art.art.Videos=="null"){
            return (  <div>

                <div style={{marginLeft : 450}} >
                    <br></br>
                    <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 8px solid #d10909"}}>

                        <h3 className="dateTime" > {art.art.Date}</h3>
                        <hr />
                    </div>

                    <div >
                        <figure >
                            <a>  <img src={art.art.Photo} style = {{ width : 700, height :450}} /></a>
                            <figcaption style={{position : "relative" , top:"-430px" , backgroundColor : "red" , left:"645px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
                                {art.art.Type}
                            </figcaption>
                        </figure>
                    </div>
                    <h6 className="dateTime" style={{float: "right"}}>{art.art.Date}</h6> <br></br>
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

                                        <ReactPlayer url={art.art.Videos} />
                                        <br></br>
                                        <CardContent  > {art.art.news}</CardContent>
                                        <h6 className="dateTime2" style={{float: "right"}}>{art.art.Date}</h6>

                                    </Card>

                                </div>

                            </div>

                        </section>
                    </div>
                </div>
            )
        }

    }}

const Tests=(props)=> {
    const [data, setData] = useState([])


    const a = window.location.pathname;
    const url = a.substring(a.lastIndexOf('/') + 1);
    console.log(url)
    useEffect(() => {

        axios.get(`http://localhost:3100/news/${url}`)
            .then(result => {
                setData(result.data)
            })

    },[])
    var news = data;

    console.log(data)
    return(
        <div >

            <div className="row" style={{ marginLeft : 30}}>

            </div>
            <Detail art={news} />
            <Lastest data={data} />
        </div>
    )
}
export default Tests ;
