import React, { Component } from "react";
import styled from "styled-components"
import Slider from "react-slick";
import {News} from '../shared/News'
import {Link} from "react-router-dom";
const Wrapper = styled.div`width: 100%`;
const Page = styled.div`width: 100%`;
export default class Videos extends Component {
    state={
        items:[],
        isLoaded:false
    }

    componentDidMount() {
        fetch('http://localhost:3100/article/sport')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data ,isLoaded : true })
                console.log(data)
            })
            .catch(console.log)

    }

  render() {
      const news=this.state.items;
     news.sort(function (a, b) {
          return new Date(b.Date) - new Date(a.Date);

      });
console.log(news)
    return (
      <Wrapper>
         <Slider
         speed={1200}
         slidesToShow={2}
         slidesToScroll={2}
         infinite={false}

         >
             {news.map((i)=>{
                 if(i.TypeF=="sport")
                return( <div >
                    <Page  >

                            <div style={{marginLeft:250  }}>
                                <figure >
                                    <a>  <img src={i.Photo} style={{width: "300px"}}/></a>
                                </figure>
                                <div><time className="dateTime">{i.Date}</time> </div>
                                <Link  to={`/article/${i._id}`} style={{textDecoration: 'none'}}>
                                <div> <h3 className="smallTitle"  > {i.news}</h3></div> </Link>
                            </div>




                 </Page></div>
                )})}

         </Slider>
      </Wrapper>
    );

}}

