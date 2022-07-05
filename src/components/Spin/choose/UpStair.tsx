import classNames from "classnames"
import React from "react"
import { getPrefixCls } from "../../../util/prefixcls"
import { SpinProps, SpinSize } from "../type"
import './upstair.less'
export type UpStairProps = {
    size: SpinSize,
    SpinColor?: string;
    direction?: 'left' | 'rtl';
}
export const UpStair = (props: UpStairProps) => {
    const { size = "middle", direction = "rtl", SpinColor } = props
    const prefixCls = getPrefixCls("spin")
    const SpinClassName = classNames(
        {
            [`${prefixCls}-upstair-size-${size}`]: size,
            [`${prefixCls}-upstair-rtl`]: direction === 'rtl',

        },
        `${prefixCls}-upstair-dot`
    )
    return (
        <span className={SpinClassName}>
            <i className={`${prefixCls}-upstair-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-upstair-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-upstair-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-upstair-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-upstair-dot-item`} style={{ backgroundColor: SpinColor }} />
        </span>
    )
}