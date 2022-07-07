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
    // Special Table : First Column as each row's key
    FirstColumnKey?: boolean
    // First Column Icon
    FirstColumnIcon?: ReactNode
}
export const Table = (props: TableProps) => {
    const { Column, TableData, Title, TitleExtra, ColumnColorArray = ["#fff", "#f7f7f7"], ContainerStyle, ColumnWidthArray, ColumnNoDataStyle, FirstColumnKey = false, FirstColumnIcon } = props
    const prefixCls = "Table"
    // 获取Column宽度
    const getWidth = (width: string | number | undefined) => {
        return width ? typeof width === "number" ? `${width}px` : width : "100px"
    }
    // 渲染Content内容的函数
    const renderContent = () => {
        if (TableData?.[0].length === 0) return <div style={ColumnNoDataStyle}>暂无数据</div>
        if (!FirstColumnKey) {
            return TableData?.map((val, index) => {
                return <div style={{
                    backgroundColor: ColumnColorArray[index % ColumnColorArray.length],
                }}>
                    {val.map((item, ind) => {
                        return <span style={{
                            width: getWidth(ColumnWidthArray[ind])
                        }}>{item}</span>
                    })}
                </div>
            })
        } else {
            return TableData?.map((val, index) => {
                return <div style={{
                    backgroundColor: ColumnColorArray[index % ColumnColorArray.length],
                    display: 'flex',
                    alignItems: "center",
                }}>
                    <div style={{
                        flexBasis: getWidth(ColumnWidthArray[0]),
                        flexShrink: 0,
                        textAlign: "center",
                        color: "#888",
                    }} >{FirstColumnIcon}{val[0]}</div>
                    <div>
                        {val.map((item, ind) => {
                            if (ind === 0) return undefined
                            return <span style={{
                                width: getWidth(ColumnWidthArray[ind])
                            }}>{item}</span>
                        })}
                    </div>
                </div>
            })
        }
    }
    return <div className={`${prefixCls}-container`} style={ContainerStyle}>
        {Title && <div className={`${prefixCls}-title`}>
            <span>{Title}</span>
            {TitleExtra}
        </div>}
        <div className={`${prefixCls}-column`}>
            {TableData?.[0]?.length !== 0 && Column?.map((val, index) => {
                return <span style={{
                    width: getWidth(ColumnWidthArray[index])
                }}>{val}</span>
            })}
        </div>
        <div className={`${prefixCls}-content`}>
            {renderContent()}
        </div>
    </div >
}