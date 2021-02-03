import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PopoverContent from "./PopoverContent";
import { useOnClickOutside } from "./hooks";
import { PopoverProps, Direction, AlignItems } from "./common";

const PopoverWrapper = styled.span`
  position: relative;
  display: inline-flex;
  flex-direction: ${({ direction }: Direction) => direction};
  align-items: ${({ alignItems }: AlignItems) => `flex-${alignItems}`};
  flex: auto;
  cursor: pointer;
  z-index: 2;
`;

const Popover = (props: React.PropsWithChildren<PopoverProps>) => {
  const { style, children, contentComponent, direction, alignItems } = props;

  const [isOpen, setIsOpen] = useState(true);
  const [popoverWidth, setPopoverWidth] = useState(0);
  const [popoverHeight, setPopoverHeight] = useState(0);

  const popoverRef = useRef(null);
  const contentRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("popoverWidth", popoverWidth);
    if (popoverRef.current) {
      setPopoverWidth(popoverRef.current.offsetWidth);
      setPopoverHeight(popoverRef.current.offsetHeight);
    }
  }, [popoverRef]);
  useOnClickOutside(popoverRef, () => setIsOpen(false));

  return (
    <PopoverWrapper
      onClick={handleClick}
      style={style}
      ref={popoverRef}
      direction={direction}
      alignItems={alignItems}
    >
      {children}
      {isOpen && (
        <PopoverContent
          ref={contentRef}
          direction={direction}
          popoverWidth={popoverWidth}
          popoverHeight={popoverHeight}
        >
          {contentComponent}
        </PopoverContent>
      )}
    </PopoverWrapper>
  );
};

export default Popover;
