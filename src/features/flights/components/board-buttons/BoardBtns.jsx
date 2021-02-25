import React from 'react';
import classNames from "classnames";
import { Link, Switch, Route } from "react-router-dom";


const BoardBtns = ({arrivalClick,
  departureClick,
  handleChangeDepartures,
  handleChangeArrivals}) => {

    const arrivalClass = classNames("board-btn board-btn__right", {
      clicked: arrivalClick,
    });
    const departureClass = classNames("board-btn board-btn__left", {
      clicked: departureClick,
    });


  return (
    <div className="btn-section">
      <Link to="/departures">
      <button className={departureClass} onClick={handleChangeDepartures}>
      <i className="fas fa-plane-departure"></i>
        Departures
      </button>
      </Link>
      <Link to="/arrivals">
      <button className={arrivalClass} onClick={handleChangeArrivals}>
      <i className="fas fa-plane-arrival"></i>
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
