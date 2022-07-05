import classNames from "classnames"
import React from "react"
import { getPrefixCls } from "../../../util/prefixcls"
import { SpinSize } from "../type"
import "./barrolling.less"
export type BarRollingProps = {
    SpinColor?: string;
    size?: SpinSize
}
export const BarRolling = (props: BarRollingProps) => {
    const prefixCls = getPrefixCls('spin')
    const { size = "middle", SpinColor = "#0DC9F3" } = props
    const SpinClassName = classNames(
        {
            [`${prefixCls}-barrolling-size-${size}`]: size,

        },
        `${prefixCls}-barrolling-dot`
    )
    return (
        <span className={SpinClassName}>
            <i className={`${prefixCls}-barrolling-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-barrolling-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-barrolling-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-barrolling-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-barrolling-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-barrolling-dot-ball`} style={{ backgroundColor: SpinColor }}></i>
        </span>
    )

}