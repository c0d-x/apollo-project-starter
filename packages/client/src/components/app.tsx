import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Header,
  JumboAlert,
  Tabs,
  Tab,
  Footer,
} from '.';

import ImagesContainer from './images/container';
import BreedsContainer from './breeds/container';
import FavouritesContainer from './favourites/container';

function App() {
  return (
    <div id="app">
      <Header />
      <JumboAlert />
      <ToastContainer />
      <Tabs>
        <Tab href="#images" label="Images">
          <ImagesContainer />
        </Tab>
        <Tab href="#breeds" label="Breeds">
          <BreedsContainer />
        </Tab>
        <Tab href="#favourites" label="Favourites">
          <FavouritesContainer />
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
}

export default App;
