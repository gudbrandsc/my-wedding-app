import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

function SakuraContainer({ number = 100, children }) {
  const getLeafs = () => {
    let res = [];
    for (let i = 0; i <= number; i++) {
      res.push(<span key={`${i}-leaf`} />);
    }
    return res;
  };
  return (
    <div className={'sakura-container'}>
      <img src="//i.imgur.com/dGOOfnA.png" alt="image-top-right" className="top-right-decoration" />
      <img src="//i.imgur.com/t6ffnbn.png" alt="image-top-left" className="top-left-decoration" />
      <div className="container">
        <div className="sakura">{getLeafs()}</div>
      </div>
    </div>
  );
}

SakuraContainer.propTypes = {
  number: PropTypes.number,
  children: PropTypes.node
};

SakuraContainer.defaultProps = {
  number: 100
};

export default SakuraContainer;
