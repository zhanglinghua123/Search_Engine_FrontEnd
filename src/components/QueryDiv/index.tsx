import { ChangeEvent, CSSProperties, useEffect, useState } from "react";
import search from "../../static/svg/search.svg"
import anchor from "../../static/svg/anchor.svg"
import clock from "../../static/svg/clock.svg"
import "./index.less"
import classNames from "classnames";
import AxiosInstance from "../../util/axios";
export type QueryDivProps = Partial<{
    // 最外层的Div样式
    ContainerStyle: CSSProperties,
    // input 的预显示文本
    PlaceHolder: string,
    // 有球必答字体大小 单位为px 通过这个来调整整个组件的高度 
    fontSize: number,
    // 是否记录历史的查询
    RememberHistory: boolean
    // 当输入的时候的回调函数
    onChange: (e?: ChangeEvent) => void
    // 当点击叉号的回调函数
    onClick: (e?: React.MouseEvent<HTMLImageElement>) => void
    // 当Input点击Enter的回调函数 value 是当前的Input的值
    onEnter: (e?: React.KeyboardEvent<HTMLInputElement> & { value?: string }) => void
    // 当点击提示框的回调函数
    onClickNote: (e?: React.MouseEvent<HTMLLIElement>) => void
    // 最多显示几个历史数据
    MaxHistory: number
    // 最多几个补全数据
    MaxCompletion: number
}>
export const QueryDiv = (props: QueryDivProps) => {
    const { ContainerStyle, fontSize = 60, onChange, PlaceHolder, onClick, onClickNote, onEnter, RememberHistory, MaxHistory = 2, MaxCompletion = 6 } = props
    // 用来控制input值的hooks
    const [InputValue, SetInputValue] = useState<string>("")
    // 展示的补全数组
    const [CompleteContent, SetCompleteContent] = useState<{ type: string, value: string }[]>([])
    // 控制请求的频率
    const [Request, SetRequest] = useState<boolean>(true)
    // input值改变的时候的回调函数
    const onInputChange = (e: ChangeEvent) => {
        SetInputValue((e.target! as any).value)
        onChange?.(e)
    }
    // 当叉号点击的时候的回调函数
    const onAnchorClick = (e: React.MouseEvent<HTMLImageElement>) => {
        SetInputValue("")
        onClick?.(e)
    }
    // 当Input点击回车的回调函数 代表进行查询
    const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            onEnter?.({ ...e, value: InputValue })
            if (RememberHistory) {
                console.log("History", sessionStorage.getItem("history"))
                AddHistoryItem(InputValue)
            }

        }
    }
    // 增加历史记录
    const AddHistoryItem = (val: string) => {
        console.log("History", sessionStorage.getItem("history"))
        const history = sessionStorage.getItem('history')
        sessionStorage.setItem('history', history ? history + "*" + val : val)
    }
    // Format 历史记录
    const FormatHistory = () => {
        const history = sessionStorage.getItem("history")
        return (history?.split("*") || []).sort((a, b) => a.length - b.length)
    }
    // 当前与 InputValue 匹配的 字符串数组
    const PrefixInputValue = () => {
        const result = FormatHistory().filter(val =>
            val.startsWith(InputValue)).map(val => {
                return {
                    value: val,
                    type: "history"
                }
            })
        return result
    }
    // 当input值 发生变化的时候 更新Content 并且限制请求的频率
    useEffect(() => {
        if (Request) {
            AxiosInstance.request<[string, string][], [string, string][]>({
                url: "completion", params: {
                    completionString: InputValue
                }
            }).then(val => {
                const result = val.map(item => {
                    return {
                        name: item[0],
                        value: parseInt(item[1])
                    }
                }).sort((a, b) => { return a.value - b.value }).map(val => {
                    return { type: "completion", value: val.name }
                })
                SetCompleteContent(result || [])
            })
            console.log("reqeust -----", Request)
            SetRequest(false)
            setTimeout(() => { SetRequest(true) }, 3000)
        }
    }, [InputValue])
    const prefixCls = "component";
    return <div className={`${prefixCls}-icon`} style={{ fontSize: `${fontSize}px`, ...ContainerStyle }}>
        <div className={`${prefixCls}-query-content`} style={{}}>
            <div className={classNames(`${prefixCls}-queryDiv`, {
                [`${prefixCls}-queryDivNoBottom`]: (PrefixInputValue().length > 0 || CompleteContent.length > 0) && InputValue
            })}>
                <img src={search} alt="" className={`${prefixCls}-search`} ></img>
                <input style={{
                    marginLeft: `${fontSize * 0.2 - 2}px`,
                    height: `${fontSize * 0.5}px`,
                    paddingLeft: `2px`
                }} value={InputValue} onChange={onInputChange} placeholder={PlaceHolder} onKeyDown={onInputEnter} ></input>
                <img src={anchor} alt="" className={`${prefixCls}-anchor`} onClick={onAnchorClick}></img>
            </div>
            <ul className={`${prefixCls}-list`}>

                {InputValue && [...CompleteContent.slice(0, MaxCompletion), ...PrefixInputValue().slice(0, MaxHistory)].map(val => {
                    return <li onClick={(e?: React.MouseEvent<HTMLLIElement>) => {
                        SetInputValue(val.value)
                        onClickNote?.(e)
                        if (RememberHistory) {
                            AddHistoryItem(val.value)
                        }
                    }}>
                        <img src={val.type === "completion" ? search : clock} alt="" style={{
                            height: "0.3em",
                            filter: "invert(66%) sepia(10%) saturate(195%) hue-rotate(169deg) brightness(93%) contrast(94%)"
                            // verticalAlign: "0.125em"
                        }} ></img>
                        <span style={{
                            marginLeft: `${0.2 * fontSize}px`,
                            lineHeight: `${fontSize}px`
                        }}>{val.value}</span>
                    </li>
                })}
            </ul>
        </div>
    </div>
}
