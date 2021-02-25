import React from 'react';
import classNames from "classnames";
import { Link, Switch, Route } from "react-router-dom";


const BoardBtns = ({arrivalClick,
  departureClick,
  handleChangeDepartures,
  handleChangeArrivals}) => {

    const arrivalClass = classNames("btn-section__button btn-section__button__right", {
      clicked: arrivalClick,
    });
    const departureClass = classNames("btn-section__button btn-section__button__left", {
      clicked: departureClick,
    });


  return (
    <div className="btn-section">
      <Link to="/departures">
      <button className={departureClass} onClick={handleChangeDepartures}>
      <i className="fas fa-plane-departure btn-section__icon"></i>
        Departures
      </button>
      </Link>
      <Link to="/arrivals">
      <button className={arrivalClass} onClick={handleChangeArrivals}>
      <i className="fas fa-plane-arrival btn-section__icon"></i>
        Arrivals
      </button>
      </Link>
      <Switch>
        <Route path={"/departures"}></Route>
        <Route path={"/arrivals"}></Route>
      </Switch>
  </div>
  );
};

export default BoardBtns;
