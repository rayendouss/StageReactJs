
import React, { Component } from "react";
import {
    MDBNavbar,  MDBFormInline , MDBCol, MDBIcon
} from "mdbreact";
import { Nav, NavbarBrand, NavItem,  } from 'reactstrap';
import {News} from '../shared/News'
import { NavLink ,Link} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import {FaYoutube,FaTwitter,FaInstagram, FaFacebookF } from "react-icons/fa";

let news;
news=News;
var p= news.sort(function(a, b){
    return new Date(b.date) - new Date(a.date);

})
const scroll = p.slice(1,6).map((i)=>{
    return(
        <div key={i.id} className="img1">
            {
                <Link style={{color:"#FFFFFF"}} to={`/article/${i.id}`} style={{textDecoration: 'none'}}>
                    <p>{i.news} <MDBIcon icon="globe-africa" />   </p> </Link>
            }
        </div>
    )
})

function Header(props){
    return (
        <MDBNavbar className="headerSite" >
            <div className="container-fluid">
                <div className="headerPage">
                    <div >
                        <Link to="/h"  ><img src='assets/images/logo.png' style = {{ width : 150, height : 60, marginLeft : 1350 }} alt='الاخبارية التونسية'   /> </Link>
                    </div>
                    <div className="col-12 .col-md-8" style={{top:"-70px"}}>
                        <div className="topHeader">
                            <div className="row">
                                <div>
                                    <a href={"https://www.instagram.com/?hl=fr"} target="_blank"  style = {{ marginLeft : 30 }}><FaInstagram/></a>
                                    <a href={"https://www.alikhbariaattounsia.com/#"}target="_blank"  style = {{ marginLeft : 30 }}><FaYoutube/></a>
                                    <a href={"https://www.facebook.com/alikhbaria/"}target="_blank"  style = {{ marginLeft : 30 }}><FaFacebookF/></a>
                                    <a href={"https://www.alikhbariaattounsia.com/#"}target="_blank" style = {{ marginLeft : 30 }}><FaTwitter/></a>
                                </div>
                                <div className="containerr" style = {{ marginLeft : 10  }}>
                                    <div  className="bn-label" style = {{ marginLeft : 1280  ,top:"-3px"}} >
                                        :الأخبار
                                    </div>
                                    <div className="marquee" style={{color:"#FFFFFF"}}>
                                        {scroll}

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="social">

                            <Nav className="row">

                                <NavItem style={{marginLeft:280}} >
                                    <NavLink className="nlink10" to='/contactus' style={{textDecoration: 'none'}}>من نحن</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink9" to='/videos' style={{textDecoration: 'none'}}>متابعات بالفيديو</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink8" to='/organisation' style={{textDecoration: 'none'}}>منظمات</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink7" to='/education' style={{textDecoration: 'none'}} >تعليم</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink6" to='/justice'  style={{textDecoration: 'none'}}>قضاء</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink5" to='/social' style={{textDecoration: 'none'}}>مجتمع</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink4" to='/sport' style={{textDecoration: 'none'}} >رياضة</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink3" to='/culture' style={{textDecoration: 'none'}} >ثقافة</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink2" to='/economie' style={{textDecoration: 'none'}} >أقتصاد</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft:20}} >
                                    <NavLink className="nlink" to="/securite" style={{textDecoration: 'none'}}>أمن</NavLink>
                                </NavItem>
                                <NavDropdown title="سياسة"  style={{marginLeft:20,top:"-10px" ,color:"white"}}  >
                                    <NavDropdown.Item href="/politique/national" style={{textDecoration: 'none'}}>وطنية</NavDropdown.Item>
                                    <NavDropdown.Item href="/politique/arabe" style={{textDecoration: 'none'}}>عربية</NavDropdown.Item>
                                    <NavDropdown.Item href="/politique/international" style={{textDecoration: 'none'}}>عالمية</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                <NavItem style={{marginLeft:20}}>
                                    <NavLink className="nlink12"  to='/' style={{textDecoration: 'none'}} > الرئيسية</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>

                </div>

            </div>
        </MDBNavbar>
    )
}
export default Header;
