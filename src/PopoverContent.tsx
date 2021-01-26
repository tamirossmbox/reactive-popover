import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const buttom = css`
  top: calc(100% + 12px);
`;

const ContentWrapper = styled.div<PopoverContentProps>`
  position: absolute;
  cursor: pointer;
  ${buttom}
  ${({ style }) => style};
`;

type PropsType = React.PropsWithChildren<PopoverContentProps>;

export interface PopoverContentProps {
  style?: {};
  content?: ReactNode;
}

const PopoverContent = (props: PropsType) => {
  const { children, style } = props;

  return <ContentWrapper style={style}>{children}</ContentWrapper>;
};

export default PopoverContent;
