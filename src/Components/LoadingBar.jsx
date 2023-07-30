import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const LoadingBar = ({ type, color, height, width }) => {
  return (
    <div className="loading-bar">
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
};

LoadingBar.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

LoadingBar.defaultProps = {
  type: 'spin',
  color: '#007bff',
  height: 50,
  width: 50,
};

export default LoadingBar;