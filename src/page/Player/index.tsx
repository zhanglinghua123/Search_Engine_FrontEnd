import { Table } from "../../components/Table"
import { IntroData, raceColumn, raceData, raceWidth, transferData, transferWidth } from "./testdata"
import "./index.less"
import { Intro } from "./component/Intro"
import { Head } from "./component/Head/Head"
import { Ability } from "./component/Ablility"
import LoadingPage from "../../components/LoadingPage"
import { Diamond } from "../../components/Spin"
import Home from "../../static/svg/home.svg"
import Search from "../../static/svg/search.svg"
import Github from "../../static/svg/github-fill.svg"
import Sports from "../../static/svg/sort_sports.svg"
import News from "../../static/svg/news.svg"
import Club from "../../static/svg/俱乐部.svg"
export const Player = () => {
    const PrefixCls = "Player"
    return (
        <LoadingPage Loading={false} tip="少女祈祷中..." FontColor="#666" tipClassName="loadingpage-diamond-tip" LoadingButton={<Diamond Color="#73DDAB" size="large"></Diamond>}>
            <Head HeadNameArray={[["Home", "/", <img src={Home}></img>],
            ["Search", '/result', <img src={Search} style={{
                width: "1.1em",
                height: "1.1em",
                verticalAlign: "-0.2em",
            }}></img>],
            ["Player", "/player", <img src={Sports} style={{
                width: "0.9em",
                height: "0.9em",
                verticalAlign: "-0.1em",
                marginRight: "4px"
            }}></img>],
            ["Club", "/club", <img src={Club} style={{
                width: "0.9em",
                height: "0.9em",
                verticalAlign: "-0.1em",
                marginRight: "4px"
            }}></img>],
            ["News", '/news', <img src={News} style={{
                width: "1em",
                height: "1em",
                verticalAlign: "-0.1em",
                marginRight: "4px"
            }}></img>],
            ['Github', "https://github.com/zhanglinghua123/MineReactComponentLibrary", <img src={Github} style={{
                width: "1.1em",
                height: "1.1em",
                verticalAlign: "-0.15em",
                marginRight: "4px"
            }}></img>],
            ]}></Head>
            <div className={`${PrefixCls}-container`}>
                <div>
                    <Intro IntroArray={IntroData} En_Name="Zhang ling hua" Name="张凌华" ImgDirection="right"
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
                    }} ColumnWidthArray={transferWidth} Title="转会" TableData={transferData}></Table>
                </div>
                <Ability name={["射门", "盘带", "防守", "力量", "传球", "速度"]} data={[90, 100, 30, 30, 30, 30]} count={91}></Ability>
            </div>
        </LoadingPage>
    )
}