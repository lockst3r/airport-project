import React from 'react';
import BoardBtns from '../board-buttons/BoardBtns';
import TableDescrptn from '../table-descrptn/TableDescrptn';
import TableList from '../table-list/TableList';

const Board = () => {
  return (
    <div className="board">
      <BoardBtns />
      <div className="board__table">
        <TableDescrptn />

        <TableList />
      </div>
    </div>
  );
};

export default Board;
