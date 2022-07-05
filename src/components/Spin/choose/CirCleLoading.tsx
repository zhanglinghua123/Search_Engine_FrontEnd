import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { getPrefixCls } from "../../../util/prefixcls"
import "./circleloading.less"
export type CirCleLoadingType = {
    Color?: string,
    size?: "large" | "middle" | "small",
    borderSize?: number,
    // 返回对应的加载百分比
    LoadingPercent?: () => number,
}
export const CanvasSize = {
    "large": [100, 25],
    "middle": [75, 20],
    "small": [50, 15],
}
let Timer: NodeJS.Timeout | undefined
export const CirCleLoading = (props: CirCleLoadingType) => {
    let Time = 0
    const DefaultLoadingPercent = () => {
        Time += 1
        return Time
    }
    const SetTimerOut = (NewTimer: any) => {
        Timer = NewTimer
    }
    const { Color = "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%)", size = "middle", LoadingPercent = DefaultLoadingPercent, borderSize = 2 } = props
    const prefixCls = getPrefixCls("spin")
    const CirCleLoadingClass = classNames(`${prefixCls}-canvas`, {
        [`${prefixCls}-canvas-${size}`]: size,
    })
    //  规定canvas 属性
    useEffect(() => {
        const canvas = document.getElementById("my-prefix-spin-canvas") as HTMLCanvasElement
        canvas.width = CanvasSize[size][0]
        canvas.height = CanvasSize[size][0]
        const context = canvas.getContext('2d'), //获取画图环境，指明为2d
            centerX = canvas.width / 2,   //Canvas中心点x轴坐标
            centerY = canvas.height / 2,  //Canvas中心点y轴坐标
            rad = Math.PI * 2 / 100, //将360度分成100份，那么每一份就是rad度
            speed = 0.2; //加载的快慢就靠它了
        context!.fillStyle = Color
        context!.strokeStyle = "#92DD73"
        console.log(centerX, centerY)
        // context!.lineWidth = borderSize

        //  设置定时更新的定时器
        const MidTimer = setInterval(() => {
            console.log(Time)
            Time = LoadingPercent()
            context!.clearRect(0, 0, canvas.width, canvas.height);
            context?.beginPath()
            context!.textAlign = "center"
            context!.textBaseline = "middle"
            context!.fillStyle = "#92DD73"
            context!.font = `${CanvasSize[size][1]}px serif`
            context!.fillText(`${Time}%`, centerX, centerY);
            context!.arc(centerX, centerY, centerX - 1, 0, rad * Time)
            // context?.closePath()
            context?.stroke()
            if (Time == 100)
                clearInterval(MidTimer)
        }, 50)
        // 清空之前老的定时器
        return () => clearInterval(MidTimer)
    }, [size, Color, LoadingPercent])
    return (<canvas id={`${prefixCls}-canvas`} className={CirCleLoadingClass}>
        {`${Time}%`}
    </canvas>)
}