import React, { Component } from 'react';
import {News} from '../shared/News';
import Card from "@material-ui/core/Card";
import ReactPlayer from "react-player"
import CardImg from "react-bootstrap/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import CardBody from "reactstrap/es/CardBody";
import {CardContent} from "semantic-ui-react";
import { Link } from 'react-router-dom';
export class Videos extends Component {
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
        console.log(this.state.items)
        return (
            <div>
                <section>

                    <br></br>
                    <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 6px solid #d10909" ,marginRight : 30}} >
                        <h2>متابعات بالفيديو</h2>

                    </div>
                    <div className="row" style={{marginLeft:450}}>
                        {
                            this.state.items.map((i)=>{
                                if(i.Videos !="null"){
                                    return(

                                        <div className="row" style={{marginLeft:40}}>
                                            <Link to={`/article/${i._id}`}  style={{textDecoration: 'none'}}>
                                                <Card >

                                                    <CardImg src={i.Photo} />
                                                    <br></br>
                                                    <CardContent  > {i.news}</CardContent>
                                                    <h6 className="dateTime2" style={{float: "right"}}>{i.Date}</h6>

                                                </Card>
                                            </Link>
                                        </div>

                                    )}})}</div>

                </section>
            </div>
        );
    }
}
export default Videos ;
