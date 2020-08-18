import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';


export class Owl3 extends Component {

  render() {

    return (

      <div>

        <div className='container-fluid' >

          <div className="row title" style={{ marginBottom: "20px" }} >

            <div className="col-sm-12 btn btn-info">


            </div>

          </div>

        </div>

        <div className='container-fluid' >

          <OwlCarousel items={2}

            className="owl-theme"
            autoplay={true}
            loop
            nav
            margin={4} >

            <div ><img className="img" src={'./images/covid1.PNG'} /></div>

            <div ><img className="img" src={'./images/covid2.PNG'} /></div>
            <div ><img className="img" src={'./images/covid1.PNG'} /></div>

          </OwlCarousel>
        </div>
      </div>

    )

  }

}

export default Owl3