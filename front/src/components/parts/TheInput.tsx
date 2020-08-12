import React, { FunctionComponent } from "react";
import styled from "styled-components";

const TheInputStyle = styled.input`
    width: 280px;
    height: 30px;
    vertical-align: middle;
    padding: 0;
    background: #fafafa;
    border-color: #dddddd;
    border-width: 1px;
    border-style: solid;

    &:focus {
      outline: 0;
    }
`;

type TheInputProps = {
  type: string;
  className?: string;
  placeholder?: string;
};

const TheInput: FunctionComponent<TheInputProps> = (props) => {
  const { type,className, placeholder } = props;

  return (
    <TheInputStyle type={type} className={className} placeholder={placeholder}>
    </TheInputStyle>
  );
};

export default TheInput;
