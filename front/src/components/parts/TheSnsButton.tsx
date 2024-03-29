import React, { FunctionComponent } from "react";
import styled from "styled-components";

const TheSnsButtonStyle = styled.button`
  border-radius: 16px;
  width: 200px;
  height: 44px;
  padding: 4px 16px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.75;
  }

  background-color: ${(props: { color: string }) => props.color};
`;

type TheSnsButtonProps = {
  name: string;
  color: string;
  className?: string;
};

const TheSnsButton: FunctionComponent<TheSnsButtonProps> = (props) => {
  const { name, color, className } = props;

  return (
    <TheSnsButtonStyle className={className} color={color}>
      {name}
    </TheSnsButtonStyle>
  );
};

export default TheSnsButton;
