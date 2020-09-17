import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Contacts extends Component {
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
    render() {
        var { isLoaded , items} = this.state
        const news=items
        console.log(news)
        const
            a = window.location.pathname;
        const
            url = a.substring(a.lastIndexOf('/') + 1)

        var
            types = [];
        news.map((it)=> {
            if (it.TypeF == url) {
                types.push(it)
            }
        })
        console.log(types)




        const pa = news.sort(function (a, b) {
            return new Date(b.Date) - new Date(a.Date);

        });


        console.log(pa)
        types.sort(function (a, b) {
            return new Date(b.Date) - new Date(a.Date);

        });
        console.log(types)
            return (
                <div>
                    <div className="row" style={{ marginLeft : 30}}>
                    <section className="lastNews">
                        <br></br>
                        <div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                            <h2>آخر الأخبار</h2>
                            <hr />
                        </div>
                        <div >

                            {
                                pa.slice(0,5).map((p)=>{


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
                                news.slice(0,5).map((p)=>{


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
                    </section>
                        <div style={{marginLeft : 490}} >
                            <br></br>
                            <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                                <h2>{url.replace()}</h2>
                                <hr />
                            </div>

                            <div className="row" >
                                {types.slice(0,1).map((i)=>
                                {
                                    return(
                                                <div>

                                                    <div >
                                                        <Link to={`/article/${i._id}`} style={{textDecoration: 'none'}}>
                                                            <div >
                                                                <figure >
                                                                    <a>  <img src={i.Photo} style = {{ width : 700, height :450}} /></a>
                                                                    <figcaption >
                                                                        {i.Type}
                                                                    </figcaption>
                                                                </figure>
                                                            </div>
                                                            <h6 className="dateTime2" style={{float: "right"}}>{i.Date}</h6> <br></br>
                                                            <p style={{float: "right"}}>{i.news}</p>
                                                        </Link>
                                                    </div>
                                                </div>)})}



                            </div>
                            <hr />


                            {types.slice(1).map((i)=>
                                {

                                    return(
                                        (    <div  >
                                            <Link to={`/article/${i._id}`} style={{textDecoration: 'none'}}>


                                                <div  key={i._id}>
                                                    <figure >
                                                        <a>  <img src={i.Photo} style={{width: "350px"}}/></a>
                                                        <figcaption style={{position : "relative" , top:"-190px" , backgroundColor : "red" , left:"450px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
                                                            {i.Type}
                                                        </figcaption>
                                                    </figure>
                                                    <div  >

                                                        <time className="dateTime">{i.Date}</time>
                                                        <h3 className="smallTitle"  > {i.news}</h3>
                                                        <hr></hr>
                                                    </div>
                                                </div>

                                            </Link>    </div>) )  }

                            )} </div>
                </div>
                </div>
            )
        }

}
export default Contacts
