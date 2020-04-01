import { withRouter } from 'react-router-dom'

const ButtonToNavigate = ({ history }) => (
  <button
    type="button"
    onClick={() => history.push('/my-new-location')}
  >
    Navigate
  </button>
);


ButtonToNavigate.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }),
};

export default withRouter(ButtonToNavigate);