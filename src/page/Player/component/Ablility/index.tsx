import { useEffect } from "react"
import * as echarts from "echarts"
import "./index.less"
import star from "../../../../static/svg/star.svg"
import starfill from "../../../../static/svg/star-fill.svg"
import foot from "../../../../static/svg/footer.svg"
import { type } from "os"
type EChartsOption = echarts.EChartsOption;
export const AbilityItem = (props: { value: string, type: { key: string, value: number | boolean } }) => {
    const renderIcon = (type: { key: string, value: number | boolean }) => {
        const { key, value } = type
        if (type === undefined) return null
        switch (type.key) {
            case "star":
                return <div className="ability-item-container">
                    {new Array(value).fill(1).map(val => {
                        return <img src={starfill} style={{
                            filter: "invert(82%) sepia(93%) saturate(1018%) hue-rotate(321deg) brightness(93%) contrast(113%)"
                        }} alt="star"></img>
                    })}
                    {new Array(5 - (value as number)).fill(1).map(val => {
                        return <img src={star} style={{
                            filter: "invert(82%) sepia(93%) saturate(1018%) hue-rotate(321deg) brightness(93%) contrast(113%)"
                        }} alt="star"></img>
                    })}
                </div>
            case "foot":
                return <div className="ability-item-container">
                    <img src={foot} style={{
                        transform: "rotateY(180deg)",
                        filter: (value as boolean) ? "invert(82%) sepia(93%) saturate(1018%) hue-rotate(321deg) brightness(93%) contrast(113%)" : "invert(56%) sepia(9%) saturate(12%) hue-rotate(359deg) brightness(94%) contrast(84%)"
                    }} alt="foot"></img>
                    <img src={foot} style={{
                        filter: (!value as boolean) ? "invert(82%) sepia(93%) saturate(1018%) hue-rotate(321deg) brightness(93%) contrast(113%)" : "invert(56%) sepia(9%) saturate(12%) hue-rotate(359deg) brightness(94%) contrast(84%)"
                    }} alt="foot"></img>
                </div>
        }
    }
    return (<div className="ability-item-contain" style={{
        flexBasis: "120px",
        flexShrink: 0,
    }}>
        <p>{props.value}</p>
        {props.type && renderIcon(props.type)}
    </div>)
}
export const Ability = (props: Partial<{
    ContainerStyle: React.CSSProperties,
    // the table data resource
    data: number[]
    name: string[]
    count: number
    // the table column 
    column: { value: string, type: { key: string, value: number | boolean } }[]
}>) => {
    const { ContainerStyle, data, name, count, column } = props
    var option: EChartsOption;

    option = {
        radar: {
            indicator: name?.map((val) => {
                return {
                    name: val || "",
                    max: 100
                }
            }) || [],
            axisName: {
                color: '#fff',
                backgroundColor: 'rgba(251,198,49,.6)',
                borderRadius: 3,
                padding: [3, 5],
            }
        },
        series: [
            {

                type: 'radar',
                data: [

                    {
                        value: data || []
                    }
                ],
                label: {
                    show: true,
                    formatter: function (params: any) {
                        return params.value as string;
                    }
                }
            }
        ],

    };
    useEffect(() => {
        var chartDom = document.getElementById('Graph')!;
        const myChart = echarts.init(chartDom)
        option && myChart.setOption(option);
    }, [])
    return <div style={ContainerStyle} className={`ablility-container`}>
        <div style={{
            textAlign: "center",
            fontSize: "18px",
            marginBottom: "20px",
        }}>综合能力 <span style={{
            color: "#fd7d24"
        }}>{count}</span></div>
        <div id="Graph" style={{
            width: "300px",
            height: "300px",
        }}>
        </div>
        <div className="ability-item-container">
            {column?.map(val => {
                return <AbilityItem value={val.value} type={val.type}></AbilityItem>
            })}
        </div>
    </div >
}
