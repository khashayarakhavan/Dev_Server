import React from 'react';
// import Spinner from '../spinner/spinner.component';
// import Spinner2 from '../spinner/spinner.component2';
import Loading from '../loading/loading';
// import Loading from '..';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Loading /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
