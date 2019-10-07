import { connect } from 'react-redux';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => {
  let isSignUp = ownProps.mySignUp;
  let headClass = ownProps.myType;
  let navType = ownProps.navType;

  return { headClass, isSignUp, navType };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
