import React, {useEffect} from 'react';
import { Switch, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import * as flightsActions from '../../flights.actions';
import BoardBtns from '../board-buttons/BoardBtns';
import TableDescrptn from '../table-descrptn/TableDescrptn';
import TableList from '../table-list/TableList';
import * as flightsSelectors from '../../flights.selectors';

const Board = ({ flightsList, arrivalClick, departureClick, getArrivalList, getDepartureList }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/arrivals') getArrivalList();

    if (location.pathname === '/departures') getDepartureList();
  }, []);

  return (
    <div className="board">
      <BoardBtns
        arrivalClick={arrivalClick}
        departureClick={departureClick}
        handleChangeDepartures={getDepartureList}
        handleChangeArrivals={getArrivalList}
      />
      <div className="board__table">
        <TableDescrptn />
        <Switch>
        <TableList flightsList={flightsList} />
        </Switch>
      </div>
    </div>
  );
};

const mapDispatch = {
  getArrivalList: flightsActions.getArrivalList,
  getDepartureList: flightsActions.getDepartureList,
};

const mapState = state => {
  return {
    flightsList: flightsSelectors.filteredFlightsSelector(state),
    arrivalClick: flightsSelectors.flightsArrivalClick(state),
    departureClick: flightsSelectors.flightsDepartureClick(state),
  };
};

export default connect(mapState, mapDispatch)(Board);
