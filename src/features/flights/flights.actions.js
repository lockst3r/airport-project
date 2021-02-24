import {  fetchFlightsList } from './flights.gateway';

export const DEPARTURE_LIST_RECEIVED = 'FLIGHT/DEPARTURE_LIST_RECEIVED';
export const ARRIVAL_LIST_RECEVEID = 'FLIGHTS/ARRIVAL_LIST_RECEVEID';
export const FILTER_TEXT = 'FLIGHT/FILTERED_TEXT';

export const arrivalListReceived = arrival => {
  const action = {
    type: ARRIVAL_LIST_RECEVEID,
    payload: {
      arrival,
    },
  };
  return action;
};

export const departureListReceived = departure => {
  const action = {
    type: DEPARTURE_LIST_RECEIVED,
    payload: {
      departure,
    },
  };

  return action;
};

export const setFilterText = text => {
  return {
    type: FILTER_TEXT,
    payload: {
      text,
    },
  };
};

export const getArrivalList = () => {
  const thunkAction = function (dispatch) {
    fetchFlightsList().then(data =>
      dispatch(
        arrivalListReceived(
          data.body.arrival.map(item => {
            return {
              id: item.ID,
              terminal: item.term,
              localTime: item.actual,
              destination: item['airportFromID.name_en'],
              status: item.status,
              airlineLogo: item.airline.en.logoName,
              airlineName: item.airline.en.name,
              flight: item.codeShareData[0].codeShare,
            };
          }),
        ),
      ),
    );
  };

  return thunkAction;
};

export const getDepartureList = () => {
  const thunkAction = function (dispatch) {
    fetchFlightsList().then(data =>
      dispatch(
        departureListReceived(
          data.body.departure.map(item => {
            return {
              id: item.ID,
              terminal: item.term,
              localTime: item.actual,
              destination: item['airportToID.name_en'],
              status: item.status,
              airlineLogo: item.airline.en.logoName,
              airlineName: item.airline.en.name,
              flight: item.codeShareData[0].codeShare,
            };
          }),
        ),
      ),
    );
  };

  return thunkAction;
};
