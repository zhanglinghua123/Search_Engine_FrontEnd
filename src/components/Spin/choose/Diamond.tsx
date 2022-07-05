import classNames from "classnames"
import React from "react"
import { getPrefixCls } from "../../../util/prefixcls"
import "./diamond.less"
export type DiamondProps = {
    size?: "large" | "middle" | "small",
    // direction: "left" | "right"
    Color?: string
}
export const Diamond = (props: DiamondProps) => {
    const { size = "middle", Color } = props
    const prefixCls = getPrefixCls("spin") + "-diamond"
    const DiamondContainer = classNames(
        `${prefixCls}-container`,
        {
            [`${prefixCls}-container-${size}`]: size,
        }
    )
    const DiamondItem = classNames(
        `${prefixCls}-item`
    )
    return (
        <span className={DiamondContainer}>
            <span style={{
                backgroundColor: Color
            }} className={DiamondItem}></span>
            <span className={DiamondItem} style={{
                backgroundColor: Color
            }} ></span>
            <span className={DiamondItem} style={{
                backgroundColor: Color
            }} ></span>
            <span className={DiamondItem} style={{
                backgroundColor: Color
            }} ></span>
            <span className={DiamondItem} style={{
                backgroundColor: Color
            }} ></span>
        </span>
    )
}