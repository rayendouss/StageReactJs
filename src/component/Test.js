import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "semantic-ui-react/dist/commonjs/views/Item";
import {News} from '../shared/News';
import {Link} from "react-router-dom";

class Test extends Component{
    state={
        items:[],
        isLoaded:false,
        vid:[]
    }

    componentDidMount() {
        fetch('http://localhost:3100/all')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data.news ,isLoaded : true ,vid:data.news.filter(vido=>vido.Videos!="null")})

            })
            .catch(console.log)

    }
    render(){


        return(
            <div>
                <Carousel itemsToShow={1} style={{width:350,height:300, background:"white" }}>

                    {
                        this.state.vid.reverse().slice(0,3).map((p)=>{

                                return(
                                  <div>

                                          <Item >
                                              <Link to={`/article/${p._id}`} style={{textDecoration: 'none'}}>
                                                  <img src={p.Photo} style={{width:250, height:200}}/>
                                              </Link>
                                              <h6 className="dateTime2" style={{color:"red"}}>{p.Date}</h6>
                                              <p>{p.news}</p>

                                          </Item>

                                  </div>
                                )

                        })
                    }
                </Carousel>
            </div>
        )
    }
}
export default Test ;
