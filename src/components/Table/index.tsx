import { CSSProperties, ReactNode } from "react"
import "./index.less"

export type TableProps = {
    // table tips array
    Column?: string[]
    //  table data
    TableData?: (string | ReactNode)[][]
    // table title
    Title?: string
    // the component near the table title 
    TitleExtra?: ReactNode
    // the Column Color
    ColumnColorArray?: string[]
    // Container Style
    ContainerStyle?: CSSProperties
    // Column Width Array
    ColumnWidthArray: (string | number)[]
    //  No data style
    ColumnNoDataStyle?: CSSProperties
}
export const Table = (props: TableProps) => {
    const { Column, TableData, Title, TitleExtra, ColumnColorArray = ["#fff", "#f7f7f7"], ContainerStyle, ColumnWidthArray, ColumnNoDataStyle } = props
    const prefixCls = "Table"
    // 获取Column宽度
    const getWidth = (width: string | number | undefined) => {
        return width ? typeof width === "number" ? `${width}px` : width : "100px"
    }
    return <div className={`${prefixCls}-container`} style={ContainerStyle}>
        {Title && <div className={`${prefixCls}-title`}>
            <span>{Title}</span>
            {TitleExtra}
        </div>}
        <div className={`${prefixCls}-column`}>
            {Column?.map((val, index) => {
                return <span style={{
                    width: getWidth(ColumnWidthArray[index])
                }}>{val}</span>
            })}
        </div>
        <div className={`${prefixCls}-content`}>
            {TableData?.[0].length !== 0 ? TableData?.map((val, index) => {
                return <div style={{
                    backgroundColor: ColumnColorArray[index % ColumnColorArray.length],
                }}>
                    {val.map((item, ind) => {
                        return <span style={{
                            width: getWidth(ColumnWidthArray[ind])
                        }}>{item}</span>
                    })}
                </div>
            }) : <div className="1212" style={ColumnNoDataStyle}>暂无数据</div>}
        </div>
    </div >
}