import React from 'react';
import {News} from '../shared/News';

import { Link } from 'react-router-dom';
const Contact=(props)=> {
  const news = News;
  const a =window.location.pathname;
const url = a.substring(a.lastIndexOf('/') + 1)
 var i = 0 ;
    return (
        <div className="row">
           
        <section className="lastNews" style={{marginLeft:40}}>
        <br></br>
        <div  style={{backgroundColor : "black" , color : "white", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                            <h2>آخر الأخبار</h2>
                            <hr />
                        </div>  
              <div >
             
                {
                  news.map((p)=>{
                    if(p.id>(news.length)-5){
                    return (
                      <div style={{height: "76px" , width: "320px"}} >
                           <Link to={`/article/${p.id}`}>
                         
                      <div  key={p.id}>
                      
                      <div  >
                    <time className="dateTime">{p.date}</time> 
                    <h3 className="smallTitle"  > {p.news}</h3>
                    <hr></hr>
                </div>
                
                      </div>
                      </Link>
                      </div>
                    )
                  }
                  })
                }
              </div>
              </section>
            <div className="row">
              <div style={{marginLeft:600}}>
              <br></br>
              <div  style={{backgroundColor : "white" , color : "black", textAlign: "right" ,      borderRight:" 6px solid #d10909"}}>
                    <h1>اتصل بنا</h1>
                   
                </div>
                <div style={{textAlign:"right"}} >
                    <br></br>
                    <p>info - plus الاخبارية التونسية" موقع الكتروني اخباري جامع، مستقل، يصدر عن شركة"</p>
                   <div>
                     <ul>
                    <p> <b>العنوان:</b>  59 شارع الحبيب بورقيبة -مقرين- تونس  </p>
                   <p>  "contact@alikhbariaattounsia.com":<b>العنوان الالكتروني</b>  </p>
                   <p> <b>فاكس:</b>72.485.243</p>
                   <p> <b>منسقة التحرير:</b>مروى بونقيشة </p>
                   <p> <b>جوال:</b> 97.876.220 </p>
                   </ul>
                   <h4 >:القسم التجاري</h4>
                   <ul>
                      <p><b>وفاء غواري</b> </p>
                     <p> <b>الاتصال بالرقم:</b>52.120.909 </p>
                     <p>"contact@alikhbariaattounsia.com":<b>العنوان الالكتروني</b></p>
                     <p> <a>kit media</a></p>
                   </ul>
                   </div>
                </div>
              </div>
              </div>
              </div>
    )
}
export default Contact ;