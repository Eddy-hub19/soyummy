import React from 'react';
import { Circles } from 'react-loader-spinner';
import { LoaderBox1 } from './LoaderAbsolute.styled';

export const LoaderAbsolute = () => (
  <LoaderBox1>
    <Circles
      height="40"
      width="40"
      color="#8BAA36"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
    />
  </LoaderBox1>
);
