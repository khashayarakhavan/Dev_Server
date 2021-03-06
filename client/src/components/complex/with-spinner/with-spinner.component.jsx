import React from 'react';
import Spinner from 'components/complex/spinner/spinner.component';
// import Spinner from "components/complex/spinner/spinner.component2";
// import Loading from '../loading/loading';
// import Loading from '..';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
