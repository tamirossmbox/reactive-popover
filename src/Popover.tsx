import React, {
  ReactNode,
  useState,
  CSSProperties,
  useRef
  // useEffect
} from "react";
import styled from "styled-components";
import PopoverContent from "./PopoverContent";
import { useOnClickOutside } from "./hooks";

type Direction = "row" | "column";
// The Position is about the Popover component relative to the Content.
type Position = "top" | "right" | "bottom" | "left";

const PopoverWrapper = styled.span`
  position: relative;
  display: inline-flex;
  flex: auto;
  cursor: pointer;
`;

interface PopoverProps {
  style?: CSSProperties;
  contentComponent?: ReactNode;
  direction?: Direction;
  position?: string;
  align?: Position;
}

const Popover = (props: React.PropsWithChildren<PopoverProps>) => {
  const { style, children, contentComponent } = props;

  // const [direction, setDirection] = useState<Direction>("row");
  // const [position, setPosition] = useState<Position>("left");
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
        <PopoverContent ref={contentRef}>{contentComponent}</PopoverContent>
      )}
    </PopoverWrapper>
  );
};

export default Popover;
