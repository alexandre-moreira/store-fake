import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css'
import lojaImage from '../../assets/images/3858422.jpg'
import Produtos from './Produtos'

// import { Container } from './styles';

const Home = () => {
  return (
      <>
        <div>
            <h1 className='center'>Bem vindo a Fake Store!</h1>
            <p className='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Suspendisse fringilla dui sit amet lectus blandit, non pulvinar purus molestie. Aenean vitae enim turpis.
            </p>
            <p className='center'><img src={lojaImage} className='image-loja' /></p>
            <hr/>
        </div>
        <div className='grade-produtos'>
            <Produtos />
        </div>
     </>
    );
}

export default Home;