import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

function Detail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  return <>{id}</>;
}

export default Detail;
