import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';

import CreateArticle from './components/CreateArticle';
import ShowArticleList from './components/ShowArticleList';
import ShowArticleDetails from './components/ShowArticleDetails';
import UpdateArticleInfo from './components/UpdateArticleInfo';


import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8082";

class App extends Component {
  render() {
    return (

      <Routes>
        <Route exact path='/' element={<ShowArticleList />} />
        <Route path='/create-article' element={<CreateArticle />} />
        <Route path='/edit-article/:id' element={<UpdateArticleInfo />} />
        <Route path='/show-article/:id' element={<ShowArticleDetails />} />
      </Routes>
    );
  }
}

export default App;