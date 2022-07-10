import { Table } from "../../components/Table"
import { IntroData, priceWidth, raceColumn, raceData, raceWidth, transferColumn, transferData, transferWidth } from "./constant"
import "./index.less"
import { Intro } from "./component/Intro"
import { Head } from "../../components/Head/Head"
import { Ability } from "./component/Ablility"
import LoadingPage from "../../components/LoadingPage"
import { Diamond } from "../../components/Spin"
import price from "../../static/svg/price.svg"
import { TypicalHead } from "../../components/Head/typical"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AxiosInstance from "../../util/axios"
import { ConvertDataFromAbility, ConvertDataFromAbilityColumn, ConvertDataFromGame, ConvertDataFromGlory, ConvertDataFromIntro, ConvertDataFromTransfer } from "./ConvertData_Player"
import { TimeoutRetry } from "../../util/TimeOutRetry"
// 页面的数据类型
export type PlayerObject = Partial<{
    ability: {
        "综合能力": string,
        "扑救": string,
        "位置": string,
        "速度": string,
        "开球": string,
        "手型": string,
        [key: string]: string
    }
    prestige: number,
    weak_foot: number,
    fancy_technique: number,
    glory_data: Record<string, string[]>
    transfer_data: Object[]
    game_data: Object[]
    id: string                      //球员id
    player_name: string             //球员姓名
    player_english_name: string     //球员英文名
    player_img_url: string          //球员图片url
    club: string                    //球员俱乐部
    country: string                 //球员国籍
    height: string                  //球员身高 
    location: string                //球员位置
    age: string                     //球员年龄
    weight: string                  //球员体重
    number: string                  //球衣号码
    birthday: string                //生日
    habitual_foot: string           //惯用脚
    clickcnt: string //点击量计数
    [keys: string]: string | number | Object[] | Object | Record<string, string[]>
}>
export const Player = () => {
    const [Loading, SetLoading] = useState<boolean>(true);
    // 运动员数据
    const [data, setData] = useState<PlayerObject | undefined>(undefined);
    // 是否显示差错提示框
    const [error, Seterror] = useState<boolean>(false);
    const url = useParams()
    // 获取对应的运动员数据
    const GetPlayerObject = () =>
        AxiosInstance.request<PlayerObject, PlayerObject>({ url: `/player/${url.id}` }).then((val) => {
            if (val) {
                // 设置延时 让loading界面加载
                setTimeout(() => SetLoading(false), 1000)
                setData(val)
            } else {
                // 数据没有的时候 报错
                return Promise.reject()
            }
        })

    // 进行网络请求
    useEffect(() => {
        TimeoutRetry(() => GetPlayerObject(), 5).catch((err) => {
            Seterror(true)
        });
    }, [])
    const PrefixCls = "Player"
    return (
        <LoadingPage showErrorMessage={error} Loading={Loading} tip="少女祈祷中..." FontColor="#666" tipClassName="loadingpage-diamond-tip" LoadingButton={<Diamond Color="#73DDAB" size="large"></Diamond>}>
            <TypicalHead></TypicalHead>
            <div className={`${PrefixCls}-container`}>
                <div>
                    <Intro IntroArray={ConvertDataFromIntro(data)} En_Name={data?.player_english_name || "暂无"} Name={data?.player_name || "暂无"} ImgDirection="right"
                        IntroImgUrl={data?.player_img_url || ""}
                    ></Intro>
                    <Table ContainerStyle={{
                        marginTop: "30px",
                        width: "750px"
                    }} ColumnWidthArray={raceWidth} Title="比赛数据" Column={raceColumn} TableData={ConvertDataFromGame(data)} ColumnNoDataStyle={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "#f7f7f7",
                        color: "#888",
                        textAlign: "center",
                        lineHeight: "60px"
                    }}></Table>
                    <Table ContainerStyle={{
                        marginTop: "30px",
                        width: "750px"
                    }} ColumnWidthArray={priceWidth} Title="荣誉记录" TableData={ConvertDataFromGlory(data)} ColumnNoDataStyle={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "#f7f7f7",
                        color: "#888",
                        textAlign: "center",
                        lineHeight: "60px"
                    }} FirstColumnKey
                        FirstColumnIcon={<img src={price} style={{ width: "1.25em", verticalAlign: "-0.25em", filter: "invert(82%) sepia(93%) saturate(1018%) hue-rotate(321deg) brightness(93%) contrast(113%)" }}></img>}></Table>
                    <Table ContainerStyle={{
                        marginTop: "30px",
                        width: "750px"
                    }} ColumnWidthArray={transferWidth} Column={transferColumn} Title="转会" TableData={ConvertDataFromTransfer(data)} ColumnNoDataStyle={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "#f7f7f7",
                        color: "#888",
                        textAlign: "center",
                        lineHeight: "60px"
                    }}></Table>
                </div>
                <Ability name={ConvertDataFromAbility(data)[0]} data={ConvertDataFromAbility(data)[1]} count={parseInt(data?.ability?.["综合能力"] || "0")} column={ConvertDataFromAbilityColumn(data)}></Ability>
            </div>
        </LoadingPage>
    )
}