import React, { Component } from "react";
import styled from "styled-components"
import Slider from "react-slick";
import {News} from '../shared/News'
import {Link} from "react-router-dom";
const Wrapper = styled.div`width: 100%`;
const Page = styled.div`width: 100%`;
export default class Videos extends Component {

  render() {
      const news=News;


    return (
      <Wrapper>
         <Slider
         speed={1200}
         slidesToShow={2}
         slidesToScroll={2}
         infinite={false}

         >
             {news.map((i)=>{
                 if(i.typef=="sport")
                return( <div >
                    <Page  >

                            <div style={{marginLeft:250  }}>
                                <figure >
                                    <a>  <img src={i.photo} style={{width: "300px"}}/></a>
                                </figure>
                                <div><time className="dateTime">{i.date}</time> </div>
                                <Link  to={`/article/${i.id}`} style={{textDecoration: 'none'}}>
                                <div> <h3 className="smallTitle"  > {i.news}</h3></div> </Link>
                            </div>




                 </Page></div>
                )})}

         </Slider>
      </Wrapper>
    );

}}

