import { Table } from "../../components/Table"
import { raceWidth, transferWidth, raceColumn } from "../Club/constant"
import "./index.less"
import { Intro } from "../Player/component/Intro"
import { Ability } from "../Player/component/Ablility"
import { TypicalHead } from "../../components/Head/typical"
import LoadingPage from "../../components/LoadingPage"
import { Diamond } from "../../components/Spin"
import { useEffect, useState } from "react"
import { ConvertClubDataFromAbility, ConvertClubDataFromGame, ConvertClubDataFromGlory, ConvertDataFromClubIntro } from "./ConvertData_Club"
import AxiosInstance from "../../util/axios"
import { useParams } from "react-router-dom"
import price from "../../static/svg/price.svg"
import { SpecialSpanStylesClubIntro } from "./constant"
import { TimeoutRetry } from "../../util/TimeOutRetry"
export type ClubItem = {
    _id1: string                          //俱乐部ID
    club_name: string                   //俱乐部名字
    club_english_name: string           //俱乐部英文名
    club_img_url: string                //俱乐部图片url
    start_time: string                  //俱乐部成立时间
    country: string                     //俱乐部所属国家
    city: string                        //俱乐部城市
    home_court: string                  //俱乐部主场
    capacity: string                    //俱乐部主场容量
    telephone: string                   //俱乐部电话
    email: string                       //邮箱
    address: string                     //地点
    game_data: Object[]                 //游戏数据
    click_cnt: number
    glory_data: Record<string, string[]>                   //荣誉信息
    [key: string]: string | Object[] | Record<string, string[]> | number
}
export const Club = () => {
    const PrefixCls = "Club"
    // 是否显示差错提示框
    const [error, Seterror] = useState<boolean>(false);
    // 是否显示Loading状态
    const [Loading, SetLoading] = useState<boolean>(true);
    // 数据源
    const [data, setData] = useState<ClubItem | undefined>(undefined)
    const url = useParams()

    // 获取对应的运动员数据
    const GetClubItem = () =>
        AxiosInstance.request<ClubItem, ClubItem>({ url: `/club/${url.id}` }).then((val) => {
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
        TimeoutRetry(() => GetClubItem(), 5).catch((err) => {
            Seterror(true)
        });
    }, [])
    return (
        <LoadingPage showErrorMessage={error} Loading={Loading} tip="少女祈祷中..." FontColor="#666" tipClassName="loadingpage-diamond-tip" LoadingButton={<Diamond Color="#73DDAB" size="large"></Diamond>}>
            <TypicalHead></TypicalHead>
            <div className={`${PrefixCls}-container`}>
                <div>
                    <Intro SpecialSpanStyles={SpecialSpanStylesClubIntro} IntroArray={ConvertDataFromClubIntro(data!)} En_Name={data?.club_english_name} Name={data?.club_name} ImgDirection="left" IntroImgUrl={data?.club_img_url}></Intro>
                    <Table ContainerStyle={{
                        marginTop: "30px",
                        width: "750px"
                    }} ColumnWidthArray={raceWidth} Column={raceColumn} Title="比赛数据" TableData={ConvertClubDataFromGame(data)} ColumnNoDataStyle={{
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
                    }} ColumnWidthArray={transferWidth} Title="荣誉记录" FirstColumnKey FirstColumnIcon={<img src={price} style={{ width: "1.25em", verticalAlign: "-0.25em", filter: "invert(82%) sepia(93%) saturate(1018%) hue-rotate(321deg) brightness(93%) contrast(113%)" }}></img>} ColumnNoDataStyle={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "#f7f7f7",
                        color: "#888",
                        textAlign: "center",
                        lineHeight: "60px"
                    }} TableData={ConvertClubDataFromGlory(data)}></Table>
                </div>
                <Ability name={ConvertClubDataFromAbility(url?.id ? parseInt(url.id) : 50000)[1]} data={ConvertClubDataFromAbility(url?.id ? parseInt(url.id) : 50000)[0]} count={ConvertClubDataFromAbility(url?.id ? parseInt(url.id) : 50000)[2]}></Ability>
            </div>
        </LoadingPage >
    )
}