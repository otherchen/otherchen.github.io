import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: ghostwhite; 
  padding: 60px 30px;
`;

const Label = styled.h2`
  margin-top: 0;
`;

const Paragraph = styled.div`
  font-style: italic;
`;

const Purpose = () => (
  <StyledSection>
    <Label>
      An Unexpected Journey
    </Label>
    <Paragraph>
      In the month January, of the year 2018, I gained a magical item, only known in old legends, that allows the holder to see one theatrical movie per day, without cost. 
      As a wise sage once told me, with great power comes great responsibility. Thus, I've decided to put this relic to good use by visiting my local moving picture house, 
      at least once every 2 weeks, to feast my eyes on a new spectacle. Here, in this ledger, I will document my thoughts and experiences.
    </Paragraph>
  </StyledSection>
);

export default Purpose;
