import React, { Component } from 'react';
import {News} from '../shared/News';
import { propTypes } from 'react-bootstrap/esm/Image';
import Politique from './PolitiqueComponent'
const Education=(props)=> {
  const news = News;
  const a =window.location.pathname;
const url = a.substring(a.lastIndexOf('/') + 1)
 var i = 0 ;
    return (
        <Politique />
    )
}
export default Education ;