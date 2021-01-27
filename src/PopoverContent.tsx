import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { PopoverProps } from "./Popover";

const buttom = css`
  top: calc(100% + 12px);
`;

// Directions styles
const column = css`
  border: 2px dashed blue;
  left: calc(100% + 12px);
`;

const row = css`
  border: 1px dashed red;
  ${buttom}
`;

// Positions styles

const ContentWrapper = styled.div<PopoverContentProps>`
  position: absolute;
  cursor: pointer;
  ${({ direction }: any) => (direction === "row" ? row : column)}
  ${({ style }) => style};
  z-index: 999;
`;

interface PopoverContentProps extends PopoverProps {
  // style?: {};
  content?: ReactNode;
  // direction: "row" | "column";
}

type PropsType = React.PropsWithChildren<PopoverContentProps>;

const PopoverContent = React.forwardRef((props: PropsType, ref: any) => {
  const { children, style, direction = "row" } = props;

  return (
    <ContentWrapper style={style} ref={ref} direction={direction}>
      {children}
    </ContentWrapper>
  );
});

export default PopoverContent;
