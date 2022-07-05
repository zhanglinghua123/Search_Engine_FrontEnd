import classNames from "classnames"
import React from "react"
import { getPrefixCls } from "../../../util/prefixcls"
import { SpinProps, SpinSize } from "../type"
import './foursphererotate.less'
export type FourSphereRotateProps = {
    SpinColor?: string;
    direction?: 'left' | 'rtl';
    size?: SpinSize
}
export const FourSphereRotate = (props: FourSphereRotateProps) => {
    const { size = "middle", direction = "rtl", SpinColor = "#0DC9F3" } = props
    const prefixCls = getPrefixCls("spin")
    const SpinClassName = classNames(
        {
            [`${prefixCls}-foursphererotate-size-${size}`]: size,
            [`${prefixCls}-foursphererotate-rtl`]: direction === 'rtl',

        },
        `${prefixCls}-foursphererotate-dot`
    )
    return (
        <span className={SpinClassName}>
            <i className={`${prefixCls}-foursphererotate-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-foursphererotate-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-foursphererotate-dot-item`} style={{ backgroundColor: SpinColor }} />
            <i className={`${prefixCls}-foursphererotate-dot-item`} style={{ backgroundColor: SpinColor }} />
        </span>
    )
}