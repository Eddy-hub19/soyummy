import React from 'react';
import { Circles } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => (
  <LoaderBox>
    <Circles
      height="40"
      width="40"
      color="#8BAA36"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
    />
  </LoaderBox>
);
