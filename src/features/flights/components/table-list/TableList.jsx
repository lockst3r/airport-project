import React from 'react';
import PropTypes from 'prop-types';
import { setTime } from '../../utils/dateUtils';
import { green, blue } from '../../utils/styleUtils';

const TableList = ({ flightsList }) => (
  <ul className="table-list">
    {flightsList.map(item => {
      const colorStyle = item.terminal === 'A' ? green : blue;

      return (
        <li className="table-list__item" key={item.id}>
          <span className="description__terminal">
            <span className="item" style={colorStyle}>
              {item.terminal}
            </span>
          </span>
          <span className="description__time">{setTime(item.localTime)}</span>
          <span className="description__destination">{item.destination}</span>
          <span className="description__status">{item.status}</span>
          <span className="description__airline">
            <img type="logo" className="logo" src={`${item.airlineLogo}`} />
            {item.airlineName}
          </span>
          <span className="description__flight">{item.flight}</span>
        </li>
      );
    })}
  </ul>
);

TableList.propTypes = {
  flightsList: PropTypes.arrayOf(
    PropTypes.shape({
      terminal: PropTypes.string,
      localTime: PropTypes.string,
      status: PropTypes.string,
      airlineLogo: PropTypes.string,
      airlineName: PropTypes.string,
      flight: PropTypes.string,
    }),
  ),
};

export default TableList;
