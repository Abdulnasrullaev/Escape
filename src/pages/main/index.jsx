import React from 'react';
import Home from '../home';
import Navbar from '../nav';
import Postss from '../Post/post';
import { Mainpage } from './style';

function MainPage() {
       return (
              <>
                     <Mainpage>
                            <Navbar />
                            <Home />
                            <Postss/>
                     </Mainpage>
              </>
       );
}

export default MainPage;
