import React, { FunctionComponent } from "react";
import styled from "styled-components";

const TheButtonStyle = styled.button`
    height: 44px;
    padding: 4px 20px;
    background: #0094e8;
    border-radius: 48px;
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
`;

type TheButtonProps = {
  name: string;
  className?: string;
};

const TheButton: FunctionComponent<TheButtonProps> = (props) => {
  const { name, className } = props;

  return (
    <TheButtonStyle className={className}>
      {name}
    </TheButtonStyle>
  );
};

export default TheButton;
