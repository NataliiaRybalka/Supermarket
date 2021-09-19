import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './MainPage.css';

import { Account, Login, Registration } from '../account';
import { Header, Footer } from '../header-footer';
<<<<<<< HEAD
import { Categories, Fruits } from '../products';
=======
import { Categories, ProductPage, ProductsList } from '../products';
>>>>>>> master
import { Payment, Delivery, Contacts, Rules } from "../pages";

export default function MainPage() {
  return (
      <div>
        <Router>
          <Header />

<<<<<<< HEAD
          <main>
            <Switch>
              <Route path={'/login'}> <RouterLoginRegistr /> </Route>
              {categories.map(category => (
                  <Route path={`/${category.nameEnglish}`} key={category._id}> {category.name} </Route>
              ))}

              <Route path={'/payment'}> <Payment/> </Route>
              <Route path={'/delivery'}> <Delivery/> </Route>
              <Route path={'/contacts'}> <Contacts/> </Route>
              <Route path={'/rules'}> <Rules/> </Route>
              <Route path={'/fruits'}> <Fruits/> </Route>
              <Route path={'/'}> <Categories /> </Route>
            </Switch>
          </main>

          <Footer />
        </Router>
      </div>
=======
        <main>
          <Switch>
            <Route path={'/account/:id'}> <Account /> </Route>
            <Route path={'/login'}> <Login /> </Route>
            <Route path={'/registration'}> <Registration /> </Route>
            <Route path={'/payment'}> <Payment/> </Route>
            <Route path={'/delivery'}> <Delivery/> </Route>
            <Route path={'/contacts'}> <Contacts/> </Route>
            <Route path={'/rules'}> <Rules/> </Route>
            <Route path={'/:categoryName/:productName'}> <ProductPage /> </Route>
            <Route path={'/:categoryName'}> <ProductsList /> </Route>
            <Route path={'/'}> <Categories /> </Route>
          </Switch>
        </main>
        
        <Footer />
      </Router>
    </div>
>>>>>>> master
  )
}
