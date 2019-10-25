import React, { Component } from "react";

import "./tour.scss";
export default class Tour extends Component {
    state = {
        showInfo:false
    }
    handleInfo = () =>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
  render() {
    //console.log(this.props.tour)  
  return (
    <article className="tour">
      <div className="img-container">
        <img src={this.props.img} alt="from the city" />
        {console.log(this.props.img)}
        <span className="close-btn" onClick={() => this.props.removeTour(this.props.id)}>
          <i className="fa fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{this.props.city}</h3>
        <h4>{this.props.name}</h4>
        <h5>
          info{" "}
          <span onClick={this.handleInfo}>
            {!this.state.showInfo && (
              <i className="fa fa-caret-square-o-down"></i>
            )}
            {this.state.showInfo && <i className="fa fa-caret-square-o-up"></i>}
          </span>
        </h5>
        {this.state.showInfo && <p>{this.props.info}</p>}
      </div>
    </article>
  );
  }
}
