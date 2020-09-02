import React, { Component } from 'react';
import {News} from '../shared/News';
import Culture from './CultureComponent'
import Politique from './PolitiqueComponent'
const Social=(props)=> {
  const news = News;
  const a =window.location.pathname;
const url = a.substring(a.lastIndexOf('/') + 1)
 var i = 0 ;
    return (
        <Politique />
    )
}
export default Social ;