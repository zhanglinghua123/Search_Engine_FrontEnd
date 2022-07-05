import { useState } from "react";
import { SpinProps, ChangeSize } from "./type";
import * as React from "react"
import classNames from "classnames";
import { getPrefixCls } from "../../util/prefixcls";
import "./style/Spin.less"
// import { MapIntoSpin } from "./util";
let firstGet: undefined | Boolean
export const Spin = (props: SpinProps) => {
    const { spinning = true, size = "small", tip, delay, style, className, wrapperClassName, indicator, fontBaseSize = "6px", FontColor = "blue", tipClassName } = props
    const getDelaySpinning = (spinning: boolean, delay: number | undefined) => {
        return spinning || (!spinning && !delay)
    }
    // 不能对这里设置为undefined 否则会触发重复渲染
    // let TimeSpinning: NodeJS.Timeout | undefined
    const [Spinning, setSpinning] = useState<Boolean>(getDelaySpinning(spinning, delay))
    const [TimeSpinning, setTimeSpinning] = useState<NodeJS.Timeout | undefined>(undefined)
    console.log(Spinning)
    React.useEffect(() => {
        firstGet = true
    }, [])
    // //  当Spinning 与delay变换的时候 则消除定时器 并设置新的定时器
    React.useEffect(() => {
        if (firstGet) {
            firstGet = false
            // 根据当前的prop设定定时器 定时器变量
            if (spinning == false && delay) {
                setTimeSpinning(setTimeout(() =>
                    setSpinning(true)
                    , delay * 1000))
            }
        } else {
            console.log(Spinning, TimeSpinning)
            setSpinning(getDelaySpinning(spinning, delay))
            clearTimeout(TimeSpinning)
            // 根据当前的prop设定定时器 定时器变量
            if (spinning == false && delay) {
                setTimeSpinning(setTimeout(() =>
                    setSpinning(true)
                    , delay * 1000))
            }
        }
    }, [spinning, delay])
    //  设置对应的less类名称
    const prefixCls = getPrefixCls("spin")

    const SpinContainerClassName = classNames(
        `${prefixCls}-container`,
        className
    )
    const SpinMessage = classNames(
        `${prefixCls}-message`,
        {
            [`${prefixCls}-message-${size}`]: size,
        }
    )
    const SpinContainerContainerClassName = classNames(
        `${prefixCls}-container-container`,
        wrapperClassName
    )
    return (
        <div className={SpinContainerContainerClassName}>
            <div className={SpinContainerClassName} style={style}>
                {Spinning && (indicator)}
                {Spinning && <span className={classNames(SpinMessage, tipClassName)} style={{ color: FontColor, fontSize: fontBaseSize }}>{tip}</span>}
            </div>
            {props.children}
        </div>
    )
}
export default Spin