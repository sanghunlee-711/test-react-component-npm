import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  color: red;
`;

export interface TestComponentProps {
  text?: string;
}

const NewTestComponent: React.FC<TestComponentProps> = ({ text }) => (
  <Wrapper>{text ? text : 'Test Component'}</Wrapper>
);

export default NewTestComponent;
