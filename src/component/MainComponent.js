import React, { Component } from 'react';
import Header from './HeaderComponent' ; 
import Footer from './FooterComponent';
import Accueil from './AccueilComponent' ;
import NewsDetail from './NewsDetailComponent';
import {News} from '../shared/News';
import Social from './SocialComponent'
import Politique from './PolitiqueComponent'
import Securite from './SecuriteComponent'
import Economie from './EconomieComponent'
import Culture from './CultureComponent'
import Justice from './JusticeComponent'
import Education from './EducationComponent'
import Sport from './SportComponent'
import Organisation from "./OrganisationComponent"
import PostDetail from './PostDetailComponent'
import Contact from "./Contactus"
import Videos from "./VideosArComponent"
import Test from "./Test"
import Header2 from "./header2";
import { Switch, Route, Redirect , BrowserRouter as Router ,useParams } from 'react-router-dom';
class Main extends Component{
    act =[{id:1,news:'كورونا: 90 % من المصابين في تونس بلا أعراض',date:'12/12/2020',type:'مجتمع',photo:''},{id:2,news:'الحامة: رابع وفاة بفيروس كورونا',date:'12/12/2020',type:'مجتمع',photo:''},{id:3,news:'قطة تونسية تصل ألمانيا في رحلة استثنائية!',date:'12/12/2020',type:'مجتمع',photo:''},{id:5,news:'تشديد القيود لمنع انتشار كورونا في عدد من الدول',date:'12/12/2020',type:'مجتمع',photo:''},{id:4,news:'سلبوا مواطنة وطعنوها ..القبض على عصابة البراكاجات بالطريقة ا...',date:'12/12/2020',type:'مجتمع',photo:''}];
    news=News;
 
  
    render()
    { 
       
        const PolitiqueDetail = ({match}) =>{
           
            return (
                
                <Politique idp={match.params.id} />
            )     
        }
       
    
       
      
        return (
            <Router>
            <div className="row">
                <Route exact path ="/h"><Header2/></Route>
              <Header act={this.act}/>
              <Switch>
                  <Switch>
           <Route exact path ="/" component ={()=><Accueil act={this.act}/>}/>
           <Route exact path="/politique/:idp" > <Politique /></Route>
           <Route exact path="/securite" >  <Securite/>  </Route>
           <Route exact path="/economie" > <Economie/> </Route>
           <Route exact path ="/culture" > <Culture/> </Route>
           <Route exact path ="/sport" > <Sport/></Route>
           <Route exact path ="/justice"> <Justice/> </Route>
           <Route exact path ="/education" ><Education/></Route>
           <Route exact path ="/sport" ><Sport/></Route>
           <Route exact path ="/social" ><Social/></Route>
           <Route exact path ="/organisation" ><Organisation/></Route>
           <Route exact path ="/contactus" ><Contact/></Route>
           <Route exact path ="/article/:id" ><PostDetail/></Route>
           <Route exact path ="/videos"><Videos/></Route>

                      <Route path="/test" > <Test/> </Route>
           <Route  path="news/:id" component={()=><NewsDetail new={this.state.News} />}/>
           </Switch>
                  </Switch>
            <Footer/>
          
            </div>
            </Router>
        )
    }
}
export default Main ;
