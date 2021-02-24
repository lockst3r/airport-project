import React from 'react';
import classNames from "classnames";

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
      <button className={departureClass} onClick={handleChangeDepartures}>
        Departures
      </button>
      <button className={arrivalClass} onClick={handleChangeArrivals}>
        Arrivals
      </button>
  </div>
  );
};

export default BoardBtns;
