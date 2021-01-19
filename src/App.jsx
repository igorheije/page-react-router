import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import { Contato } from './components/Contato';
import { Header } from './components/Header';
import { Produtos } from './components/Produtos';
import { Produto } from './components/Produto';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Route exact path="/" component={Produtos}></Route>
          <Route path="/produto/:id" component={Produto}></Route>

          <Route path="*/contato" component={Contato}></Route>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
