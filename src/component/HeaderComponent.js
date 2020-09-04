import React, { Component } from "react";
import {
MDBNavbar,  MDBFormInline , MDBCol, MDBIcon 
} from "mdbreact";
import { Nav, NavbarBrand, NavItem,  } from 'reactstrap';

import { NavLink ,Link} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import {FaYoutube,FaTwitter,FaInstagram, FaFacebookF } from "react-icons/fa";

function Header (props) {

  const act = props.act.map((ac)=>{
 
    return (
<div key={ac.id} className="img1">
    {
      <Link style={{color:"#FFFFFF"}} to={`/article/${ac.id}`} style={{textDecoration: 'none'}}>
      <p>{ac.news} <MDBIcon icon="globe-africa" />   </p> </Link>
    }
    </div> 
    )
  })

  return (

      <MDBNavbar className="headerColor" dark expand="md">
      <div class="row"> 
    <div>
    <a href={"https://www.instagram.com/?hl=fr"} target="_blank"  style = {{ marginLeft : 30 }}><FaInstagram/></a> 
     <a href={"https://www.alikhbariaattounsia.com/#"}target="_blank"  style = {{ marginLeft : 30 }}><FaYoutube/></a>
     <a href={"https://www.facebook.com/alikhbaria/"}target="_blank"  style = {{ marginLeft : 30 }}><FaFacebookF/></a>
     <a href={"https://www.alikhbariaattounsia.com/#"}target="_blank" style = {{ marginLeft : 30 }}><FaTwitter/></a>
    </div>
 
    <div className="containerr" style = {{ marginLeft : 30  }}>
    <div  className="bn-label" style = {{ marginLeft : 1310  ,top:"12px"}} >
    الأخبار
      </div> 
<div className="marquee" style={{color:"#FFFFFF"}}>
   {act} 

  </div>
</div>
          <NavbarBrand ><div className="col-4"> <Link to="/test"  ><img src='assets/images/logo.png' style = {{ width : 150, height : 60, marginLeft : 1350 }} alt='الاخبارية التونسية'   /> </Link> </div></NavbarBrand>
      <NavbarBrand >
      <div className="col-8" style={{top:"10px"}}>
      <div className="col-9">
    
      </div>
      
                            <Nav navbar >
                            <MDBCol md="2" >
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" aria-label="Search" />
      </MDBFormInline>
    </MDBCol>
 
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
                            
                            <NavDropdown  style={{marginLeft:20,top:"-10px"}} title="سياسة"  >
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
      </NavbarBrand>
      </div>
      </MDBNavbar>

    );
  }


export default Header;
