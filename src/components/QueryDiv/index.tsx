import { ChangeEvent, CSSProperties, useEffect, useState } from "react";
import football from "../../static/logo_light.png"
import search from "../../static/svg/search.svg"
import anchor from "../../static/svg/anchor.svg"
import "./index.less"
import classNames from "classnames";
export type QueryDivProps = Partial<{
    // 最外层的Div样式
    ContainerStyle: CSSProperties,
    // input 的预显示文本
    PlaceHolder: string,
    // 有球必答字体大小 单位为px 通过这个来调整整个组件的高度 
    fontSize: number,
    // 当输入的时候的回调函数
    onChange: (e?: ChangeEvent) => void
    // 当点击叉号的回调函数
    onClick: (e?: React.MouseEvent<HTMLImageElement>) => void
    // 当Input点击Enter的回调函数
    onEnter: (e?: React.MouseEvent<HTMLImageElement>) => void
    // 当点击提示框的回调函数
    onClickNote: (e?: React.MouseEvent<HTMLLIElement>) => void
}>
export const QueryDiv = (props: QueryDivProps) => {
    const { ContainerStyle, fontSize = 60, onChange, PlaceHolder, onClick, onClickNote } = props
    // 用来控制input值的hooks
    const [InputValue, SetInputValue] = useState<string>("")
    // 展示的补全数组
    const [CompleteContent, SetCompleteContent] = useState<string[]>([])
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
    // 当Input点击回车的回调函数
    const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            onInputEnter?.(e)
        }
    }

    // 当input值 发生变化的时候 更新Content
    useEffect(() => {
        SetCompleteContent(["121212", '1212121', "12121212", "1212121"])
    }, [InputValue])
    const prefixCls = "component";
    return <div className={`${prefixCls}-icon`} style={{ fontSize: `${fontSize}px`, ...ContainerStyle }}>
        {/*<img className={`${prefixCls}-ball`} style={{*/}
        {/*    backgroundColor: "white",*/}
        {/*    borderRadius: "100%",*/}
        {/*}} src={football} alt="球"></img>*/}
        {/*<span>球天下</span>*/}
        {/*<img src={football} style={{color: "white", width: '40%'}}/>*/}
        <div className={`${prefixCls}-query-content`} style={{}}>
            <div className={classNames(`${prefixCls}-queryDiv`, {
                [`${prefixCls}-queryDivNoBottom`]: CompleteContent.length > 0 && InputValue
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
                {InputValue && CompleteContent.map(val => {
                    return <li onClick={(e?: React.MouseEvent<HTMLLIElement>) => {
                        SetInputValue(val)
                        onClickNote?.(e)
                    }}>
                        <img src={search} alt="" style={{
                            height: "0.5em",
                            filter: "invert(66%) sepia(10%) saturate(195%) hue-rotate(169deg) brightness(93%) contrast(94%)"
                            // verticalAlign: "0.125em"
                        }} ></img>
                        <span style={{
                            marginLeft: `${0.2 * fontSize}px`,
                            lineHeight: `${fontSize}px`
                        }}>{val}</span>
                    </li>
                })}
            </ul>
        </div>
    </div>
}
