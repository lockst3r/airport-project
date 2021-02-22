import React from 'react';

const TableList = () => {
  return (
    <ul className="table-list">
      <li className="table-list__item">
        <span className="description__terminal">
          <span className="item">terminal</span>
        </span>
        <span className="description__time">localTime</span>
        <span className="description__destination">destination</span>
        <span className="description__status">status</span>
        <span className="description__airline">
          <img type="logo" className="logo" src="" />
          item.airlineName
        </span>
        <span className="description__flight">item.flight</span>
      </li>
    </ul>
  );
};

export default TableList;
