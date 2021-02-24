import { createSelector } from 'reselect';

export const flightsListSelector = state => state.flights.flightsList;

 export const flightsArrivalClick = state => state.flights.arrivalClick;

export const flightsDepartureClick = state => state.flights.departureClick;

export const filterTextSelector = state => state.flights.filterText;

export const filteredFlightsSelector = createSelector(
  [flightsListSelector, filterTextSelector],
  (flightsList, filterText) =>
    flightsList.filter(item => {
      return (
        item.flight.toLowerCase().includes(filterText.toLowerCase()) ||
        item.airlineName.toLowerCase().includes(filterText.toLowerCase()) ||
        item.destination.toLowerCase().includes(filterText.toLowerCase())
      );
    }),
);
