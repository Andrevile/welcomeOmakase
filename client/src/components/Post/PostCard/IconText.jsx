import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    margin-left: 10px;
  }
`;
function IconText({ icon, text, handler }) {
  return (
    <IconWrapper onClick={handler}>
      {icon}
      <span>{text}</span>
    </IconWrapper>
  );
}

export default IconText;
