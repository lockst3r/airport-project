import React from 'react';
import Search from '../search/Search';
import Board from '../board/Board';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as flightsActions from '../../flights.actions';
import PropTypes from 'prop-types';

const Main = ({ setFilterText }) => {
  return (
    <main className="main">
      <Search setFilterText={setFilterText} />
      <Switch>
        <Route path="/:direction?/:flight?">
          <Board />
        </Route>
      </Switch>
    </main>
  );
};

Main.propTypes = {
  setFilterText: PropTypes.func.isRequired,
};

const mapDispatch = {
  setFilterText: flightsActions.setFilterText,
};

export default connect(null, mapDispatch)(Main);
