import React from 'react';
import {
    MDBContainer, MDBRow, MDBFooter
    } from "mdbreact";

    import { Link} from 'react-router-dom';

    import { FaYoutube,FaTwitter,FaInstagram, FaFacebookF } from "react-icons/fa";
    
 function Footer(props) {
    return(
       
       
       <MDBFooter color="black" className="font-small pt-4 mt-4">
     
        <MDBContainer fluid className="text-center text-md-left">
            <div >
          <MDBRow>
            
          <ul className="col-sm">
              <Link to="/"  ><img src='assets/images/logo.png'  alt='الاخبارية التونسية'   /> </Link>
              </ul>
              <ul className="col-sm">
              <li> <Link title="تعليم" to="/education" style={{textDecoration: 'none'}}>تعليم</Link></li>
             <li><Link title="منظمات" to="/organisation" style={{textDecoration: 'none'}}>منظمات</Link></li>
             <li><Link title="متابعات بالفيديو" to="/videos" style={{textDecoration: 'none'}}>متابعات بالفيديو</Link></li>
             <li><Link title="من نحن" to="/contactus" style={{textDecoration: 'none'}}>من نحن</Link></li>

            </ul>
            <ul className=" col-sm">
            <li> <Link title="ثقافة" to="/culture" style={{textDecoration: 'none'}}>ثقافة</Link></li>
             <li><Link title="رياضة" to="/sport" style={{textDecoration: 'none'}}>رياضة</Link></li>
             <li><Link title="مجتمع" to="/social" style={{textDecoration: 'none'}}>مجتمع</Link></li>
             <li><Link title="قضاء" to="/justice" style={{textDecoration: 'none'}}>قضاء</Link></li>
            </ul>
            <ul className=" col-sm">
            <li> <Link title="الرئيسية" to="/" style={{textDecoration: 'none'}}>الرئيسية</Link></li>
             <li><Link title="سياسة" to="/politique/national" style={{textDecoration: 'none'}}> سياسة</Link></li>
             <li><Link title="أمن" to="/securite" style={{textDecoration: 'none'}}>أمن</Link></li>
             <li><Link title="اقتصاد" to="/economie" style={{textDecoration: 'none'}}>اقتصاد</Link></li>
            </ul>
          
          </MDBRow>
          </div>
          <span className="line" ></span> 
          <br></br>
        <div className="row " >
          <div className="col-md-4" style = {{ marginLeft : 15 }}>
    <a href={"https://www.instagram.com/?hl=fr"} target="_blank" className="fa" style = {{ marginLeft : 15 ,textDecoration: 'none'}}><FaInstagram/></a>
     <a href={"https://www.alikhbariaattounsia.com/#"}target="_blank" className="fa"  style = {{ marginLeft : 15 ,textDecoration: 'none'}}><FaYoutube/></a>
     <a href={"https://www.facebook.com/alikhbaria/"}target="_blank" className="fa"  style = {{ marginLeft : 15 ,textDecoration: 'none'}}><FaFacebookF/></a>
     <a href={"https://www.alikhbariaattounsia.com/#"}target="_blank" className="fa" style = {{ marginLeft : 15 ,textDecoration: 'none' }}><FaTwitter/></a>
    </div>
        
    <div style = {{ marginLeft : 1050 }}  >  <a href="https://www.tanitweb.com" style={{color:"#FF0000"}} target="_blank">TANITWEB</a> : الإخباريّة التونسيّة. تطوير الموقع من قبل é2020 ©  
  
     </div>
    </div>
    </MDBContainer>
      </MDBFooter>
    )
}
export default Footer;
