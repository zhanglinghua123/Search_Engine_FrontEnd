import React from "react";
import { BarRolling } from "./choose/BarRolling";
import { FourSphereRotate } from "./choose/FourSphereRotate";

export type SpinSize = "small" | "middle" | "large"
export type SpinIndicator = React.ReactElement<HTMLElement>;
export interface SpinProps {
    // prefixCls?: string;
    className?: string;
    spinning?: boolean;
    fontBaseSize: string;
    style?: React.CSSProperties;
    size?: SpinSize;
    tip?: React.ReactNode;
    tipClassName?:string
    delay?: number;
    FontColor?: string;
    wrapperClassName?: string;
    indicator?: SpinIndicator;
    children?: React.ReactNode;
    // direction?: 'left' | 'rtl';
}

export const ChangeSize = {
    "large": 2,
    "middle": 1.5,
    "small": 1,
}