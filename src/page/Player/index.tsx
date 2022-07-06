import { Table } from "../../components/Table"
import { IntroData, raceColumn, raceData, raceWidth, transferData, transferWidth } from "./testdata"
import "./index.less"
import { Intro } from "./component/Intro"
import { Head } from "../../components/Head/Head"
import { Ability } from "./component/Ablility"
import LoadingPage from "../../components/LoadingPage"
import { Diamond } from "../../components/Spin"

import { TypicalHead } from "../../components/Head/typical"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AxiosInstance from "../../util/axios"
import { ConvertDataFromIntro, ConvertDataFromTransfer } from "../../util/ConvertData_Player"
// 页面的数据类型
export type PlayerObject = Partial<{
    ability: {
        "综合能力": string,
        "扑救": string,
        "位置": string,
        "速度": string,
        "开球": string,
        "手型": string,
    }
    prestige: number,
    weak_foot: number,
    fancy_technique: number,
    glory_data: Record<string, string[]>
    transfer_data: Record<string, string[]>
    game_data: Record<string, string[]>
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
    [key: string]: string | number | Record<string, string[]> | Object
}>
export const Player = () => {
    const [Loading, SetLoading] = useState<boolean>(true);
    // 运动员数据
    const [data, setData] = useState<PlayerObject | undefined>(undefined);
    // 是否显示差错提示框
    const [error, Seterror] = useState<boolean>(false);
    const url = useParams()

    // 获取对应的运动员数据
    const GetPlayerObject = async () => {
        const data = await AxiosInstance.request<PlayerObject, PlayerObject>({ url: `/player/${url.id}` }).then((val) => {
            if (val) {
                // 设置延时 让loading界面加载
                setTimeout(() => SetLoading(false), 1000)
                setData(val)
                console.log(val, "val----")
            } else {
                // 数据没有的时候 报错
                return Promise.reject()
            }
        }).catch((err) => {
            Seterror(true)
        });
    }
    // 进行网络请求
    useEffect(() => {
        GetPlayerObject()
    }, [])
    const PrefixCls = "Player"
    return (
        <LoadingPage showErrorMessage={error} Loading={Loading} tip="少女祈祷中..." FontColor="#666" tipClassName="loadingpage-diamond-tip" LoadingButton={<Diamond Color="#73DDAB" size="large"></Diamond>}>
            <TypicalHead></TypicalHead>
            <div className={`${PrefixCls}-container`}>
                <div>
                    <Intro IntroArray={ConvertDataFromIntro(data)} En_Name="Zhang ling hua" Name="张凌华" ImgDirection="right"
                        IntroImgUrl="https://sd.qunliao.info/fastdfs5/M00/04/C9/rB8CCl5q_1GAZ-bCAABnrTdScCA444.png"
                        TeamIcon="https://sd.qunliao.info/fastdfs3/M00/B5/6B/ChOxM1xC0BOAQINeAAALbRfJlAY231.png"
                        CountryIcon="https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FiABKB2AADAlIaOOOU133.png"></Intro>
                    <Table ContainerStyle={{
                        marginTop: "30px",
                        width: "750px"
                    }} ColumnWidthArray={raceWidth} Title="比赛数据" Column={raceColumn} TableData={raceData}></Table>
                    <Table ContainerStyle={{
                        marginTop: "30px",
                        width: "750px"
                    }} ColumnWidthArray={raceWidth} Title="荣誉记录" TableData={raceData}></Table>
                    <Table ContainerStyle={{
                        marginTop: "30px",
                        width: "750px"
                    }} ColumnWidthArray={transferWidth} Title="转会" TableData={ConvertDataFromTransfer(data)} ColumnNoDataStyle={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "#f7f7f7",
                        color: "#888",
                        textAlign: "center",
                        lineHeight: "60px"
                    }}></Table>
                </div>
                <Ability name={["射门", "盘带", "防守", "力量", "传球", "速度"]} data={[90, 100, 30, 30, 30, 30]} count={91}></Ability>
            </div>
        </LoadingPage>
    )
}