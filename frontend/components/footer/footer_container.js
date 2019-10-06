import { connect } from 'react-redux';
import Footer from './footer';

const mapStateToProps = (state, ownProps) => {
    let footClass = ownProps.myType;
    return { footClass };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
