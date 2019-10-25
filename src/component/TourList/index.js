import React, { Component } from "react";

import { tourData } from "../../tourData";
import Tour from "../Tour/Tour";

import "./touList.scss";
export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = (id)=>{
   const {tours} = this.state;
   const sortedTours = tours.filter(tour =>tour.id !== id)
   this.setState({
     tours:sortedTours
   })
  }
 
  render() {
    const city = this.state.tours;
    return (
      <section className="tourlist">
      { city.map(tour =>
        <Tour key={tour.id} {...tour} removeTour={this.removeTour} />
      ) 
    }
      </section>
    );
  }
}
