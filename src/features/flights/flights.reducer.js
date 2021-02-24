import { ARRIVAL_LIST_RECEVEID, DEPARTURE_LIST_RECEIVED, FILTER_TEXT } from './flights.actions';

const initialState = {
  flightsList: [],
  arrivalClick: false,
  departureClick: false,
  filterText: '',
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPARTURE_LIST_RECEIVED: {
      return {
        ...state,
        flightsList: action.payload.departure,
        arrivalClick: false,
        departureClick: true,
      };
    }

    case ARRIVAL_LIST_RECEVEID: {
      return {
        ...state,
        flightsList: action.payload.arrival,
        arrivalClick: true,
        departureClick: false,
      };
    }

    case FILTER_TEXT: {
      return {
        ...state,
        filterText: action.payload.text,
      };
    }

    default:
      return state;
  }
};

export default flightsReducer;
