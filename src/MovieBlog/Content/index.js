import React from 'react';
import { keys } from 'lodash';
import styled from 'styled-components';
import movies from '../movies';

const StyledSection = styled.section`
  background-color: white; 
  padding: 60px 30px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: auto;
`;

export default () => (
  <StyledSection>
    {keys(movies).map(key => (
      <Card key={key}>
        <img src={`${movies[key].smallImage}`} height="200" width="200" />
      </Card>
    ))}
  </StyledSection>
);
