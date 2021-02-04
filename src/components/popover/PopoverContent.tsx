import React from "react";
import styled, { css } from "styled-components";
import { PopoverProps } from "./common";

// row styles
const row = css<PopoverProps>`
  transform: translate(
    calc(${({ popoverWidth }: PopoverProps) => popoverWidth}px + 12px),
    0
  );
`;

const rowReverse = css<PopoverProps>`
  transform: translate(
    calc(-${({ popoverWidth }: PopoverProps) => popoverWidth}px + -12px),
    0
  );
`;

// column styles
const column = css`
  transform: translate(
    0,
    calc(${({ popoverHeight }: PopoverProps) => popoverHeight}px + 12px)
  );
`;

const columnReverse = css<PopoverProps>`
  transform: translate(
    0,
    calc(-${({ popoverHeight }: PopoverProps) => popoverHeight}px - 12px)
  );
`;

const getDirection = (direction: any) => {
  switch (direction) {
    case "row":
      return row;
    case "row-reverse":
      return rowReverse;
    case "column":
      return column;
    case "column-reverse":
      return columnReverse;
    default:
      return "row";
  }
};

const ContentWrapper = styled.div<PopoverProps>`
  display: flex;
  position: absolute;
  cursor: pointer;
  ${({ direction }: any) => getDirection(direction)}
  ${({ style }: PopoverProps) => style};
  z-index: 999;
`;

type PropsType = React.PropsWithChildren<PopoverProps>;

const PopoverContent = React.forwardRef((props: PropsType, ref: any) => {
  const {
    children,
    style,
    popoverWidth,
    popoverHeight,
    direction = "row",
    alignItems = "start"
  } = props;

  return (
    <ContentWrapper
      style={style}
      ref={ref}
      direction={direction}
      alignItems={alignItems}
      popoverWidth={popoverWidth}
      popoverHeight={popoverHeight}
    >
      {children}
    </ContentWrapper>
  );
});

export default PopoverContent;
