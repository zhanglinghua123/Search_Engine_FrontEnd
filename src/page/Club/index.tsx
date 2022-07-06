import { Table } from "../../components/Table"
import { IntroData, raceColumn, raceData, raceWidth, transferData, transferWidth } from "../Player/testdata"
import "./index.less"
import { Intro } from "../Player/component/Intro"
import { Head } from "../../components/Head/Head"
import { Ability } from "../Player/component/Ablility"
import { TypicalHead } from "../../components/Head/typical"
import LoadingPage from "../../components/LoadingPage"
import { Diamond } from "../../components/Spin"
import { useState } from "react"
export type ClubItem = {
    id: string                          //俱乐部ID
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
    glory_data: string                   //荣誉信息
}
export const Club = () => {
    const PrefixCls = "Club"
    // 是否显示差错提示框
    const [error, Seterror] = useState<boolean>(false);
    // 是否显示Loading状态
    const [Loading, SetLoading] = useState<boolean>(false);
    return (
        <LoadingPage showErrorMessage={error} Loading={Loading} tip="少女祈祷中..." FontColor="#666" tipClassName="loadingpage-diamond-tip" LoadingButton={<Diamond Color="#73DDAB" size="large"></Diamond>}>
            <TypicalHead></TypicalHead>
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
        </LoadingPage >
    )
}