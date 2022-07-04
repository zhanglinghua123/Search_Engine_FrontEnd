import { Table } from "../../components/Table"
import { IntroData, raceColumn, raceData, raceWidth, transferData, transferWidth } from "../Player/testdata"
import "./index.less"
import { Intro } from "../Player/component/Intro"
import { Head } from "../Player/component/Head/Head"
import { Ability } from "../Player/component/Ablility"
export const Club = () => {
    const PrefixCls = "Club"

    return (
        <div>
            <Head HeadNameArray={[["首页", "/"], ["搜索", '/result'], ['Github', "https://github.com/zhanglinghua123/MineReactComponentLibrary"]]} ></Head>
            <div className={`${PrefixCls}-container`}>
                <div>
                    <Intro IntroArray={IntroData} En_Name="Zhang ling hua" Name="张凌华" ImgDirection="left"></Intro>
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
        </div>
    )
}