import { ReactNode, CSSProperties } from "react";

export interface PopoverProps {
  style?: CSSProperties;
  contentComponent?: ReactNode;
  direction?: Direction;
  position?: string;
  popoverWidth?: number;
  popoverHeight?: number;
  alignItems?: AlignItems;
}

export type Direction = "row" | "row-reverse" | "column" | "column-reverse";

export type AlignItems = "start" | "end";
