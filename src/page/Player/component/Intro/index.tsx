import { ReactNode, CSSProperties } from "react"
import "./index.less"
type IntroProps = Partial<{
    IntroArray: string[][]
    Name: string,
    En_Name: string,
    ImgDirection: "left" | "right",
    IntroImgUrl: string,
    SpecialSpanStyles: Record<number, { SpanOne?: CSSProperties, SpanTwo?: CSSProperties, SpanContainer: CSSProperties }>
}>
export const Intro = (props: IntroProps) => {
    const { IntroArray, Name, En_Name, ImgDirection = "right", IntroImgUrl, SpecialSpanStyles } = props
    const Prefix = "Intro"
    return <div className={`${Prefix}-container`}>
        <div style={{
            flexDirection: ImgDirection === "right" ? "row-reverse" : "row",
            display: "flex",
            alignItems: "center"
        }}>

            <div style={{
                // float: ImgDirection || "right",

                flexBasis: "150px",
                flexShrink: 0,
                height: "150px",
                background: "white"
            }}>{IntroImgUrl && <img src={IntroImgUrl} width="150px" height="150px"></img>}</div>
            <div style={{
                marginLeft: ImgDirection === "left" ? "20px" : "0px",
                marginRight: ImgDirection === "right" ? "20px" : "0px",
            }}>
                <div className={`${Prefix}-info`}>
                    <div>
                        <span className={`${Prefix}-Name`}>{Name}</span>
                    </div>
                    <div>
                        <span className={`${Prefix}-En-Name`}>{En_Name}</span>
                    </div>
                </div>
                <div className={`${Prefix}-span-container`}>
                    {
                        IntroArray?.map((val, index) => {
                            return <span style={SpecialSpanStyles?.[index]?.["SpanContainer"]} className={`${Prefix}-span`}>
                                <span style={SpecialSpanStyles?.[index]?.["SpanOne"]}>{val[0] + ":"}</span>
                                <span style={SpecialSpanStyles?.[index]?.["SpanTwo"]}>{val[1]}</span>
                            </span>
                        })
                    }
                </div>
            </div>
        </div>

    </div>
}