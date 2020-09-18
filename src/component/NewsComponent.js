import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "semantic-ui-react/dist/commonjs/views/Item";
import {News} from '../shared/News';
import {Link} from "react-router-dom";

class StickyHeadTable extends Component{
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
  render(){


    return(
        <div>
          <Carousel itemsToShow={1} style={{width:650,height:300, background:"white" ,marginLeft:120}}>

            {
              this.state.items.reverse().slice(0,5).map((p)=>{

                return(
                    <div>

                      <Item >
                        <Link to={`/article/${p._id}`} style={{textDecoration: 'none'}}>
                          <a>
                          <img src={p.Photo} style={{width:450, height:200}}/></a>
                          <figcaption style={{position : "relative" , top:"-430px" , backgroundColor : "red" , left:"645px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
                            {p.TypeF}
                          </figcaption>
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
export default StickyHeadTable ;
