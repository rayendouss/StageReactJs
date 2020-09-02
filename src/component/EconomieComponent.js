import React, { Component } from 'react';
import {News} from '../shared/News';
import { propTypes } from 'react-bootstrap/esm/Image';
import Politique from './PolitiqueComponent'
import Videos from "./VideoComponent";
const Economie=(props)=> {
  const news = News;
  const a =window.location.pathname;
const url = a.substring(a.lastIndexOf('/') + 1)
 var i = 0 ;
    return (<div>
        <Politique /></div>
    )
}
export default Economie ;
