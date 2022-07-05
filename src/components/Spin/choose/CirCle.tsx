import classNames from "classnames"
import React from "react"
import { getPrefixCls } from "../../../util/prefixcls"
import "./circle.less"
export type CircleProps = {
    // 线条颜色
    FirstColor?: string,
    SecondColor?: string,
    ThirdColor?: string,
    //  图像大小
    size: "large" | "middle" | "small",
    direction: "left" | "right",
    Period1: string,
    Period2: string,
    Period3: string,
}
export const Circle = (props: CircleProps) => {
    const { size = "middle", direction = "left", FirstColor, SecondColor, ThirdColor, Period1 = "3s", Period2 = "2.5s", Period3 = "2s" } = props
    const prefixCls = getPrefixCls("spin")
    const CirCleClassName1 = classNames(
        `${prefixCls}-circle-${size}-Out6`,
        `${prefixCls}-circle-${direction}`
    )
    const CirCleClassName2 = classNames(
        `${prefixCls}-circle-${size}-Out5`
    )
    const CirCleClassName3 = classNames(
        `${prefixCls}-circle-${size}-Out4`,
        `${prefixCls}-circle-${direction}`
    )
    const CirCleClassName4 = classNames(
        `${prefixCls}-circle-${size}-Out3`
    )
    const CirCleClassName5 = classNames(
        `${prefixCls}-circle-${size}-Out2`,
        `${prefixCls}-circle-${direction}`
    )
    const CirCleClassName6 = classNames(
        `${prefixCls}-circle-${size}-Out1`
    )
    return (
        <span className={CirCleClassName1} style={{
            borderLeftColor: FirstColor,
            animationDuration: Period1
        }}>
            <span className={CirCleClassName2}>
                <span className={CirCleClassName3} style={{
                    borderTopColor: SecondColor,
                    animationDuration: Period2
                }}>
                    <span className={CirCleClassName4}>
                        <span className={CirCleClassName5} style={{
                            borderRightColor: ThirdColor,
                            animationDuration: Period3
                        }}>
                            <span className={CirCleClassName6}></span>
                        </span>
                    </span>
                </span>
            </span>
        </span>)
}