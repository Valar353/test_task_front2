import React from 'react';
import { connect } from 'react-redux';
import App from "../Components/App";

function AppContainer(props) {
  return (
      <App products={props} />
  )
}
const mapStateToProps = function(state) {
  return state.products;
}

export default connect(mapStateToProps)(AppContainer);