import React, { ReactNode, useState, CSSProperties, useRef } from "react";
import styled from "styled-components";
import PopoverContent from "./PopoverContent";
import { useOnClickOutside } from "./hooks";
import { Direction, Position } from "./common";

const PopoverWrapper = styled.span`
  position: relative;
  display: inline-flex;
  flex: auto;
  cursor: pointer;
`;

export interface PopoverProps {
  style?: CSSProperties;
  contentComponent?: ReactNode;
  direction?: Direction;
  position?: string;
  align?: Position;
}

const Popover = (props: React.PropsWithChildren<PopoverProps>) => {
  const { style, children, contentComponent, direction } = props;

  const [isOpen, setIsOpen] = useState(false);

  const popoverRef = useRef(null);
  const contentRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(popoverRef, () => setIsOpen(false));

  return (
    <PopoverWrapper onClick={handleClick} style={style} ref={popoverRef}>
      {children}
      {isOpen && (
        <PopoverContent ref={contentRef} direction={direction}>
          {contentComponent}
        </PopoverContent>
      )}
    </PopoverWrapper>
  );
};

export default Popover;
