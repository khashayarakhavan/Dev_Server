import React from 'react';
// import Spinner2 from '../spinner/spinner.component2';
import Loading from '../complex/loading/loading';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Loading /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
