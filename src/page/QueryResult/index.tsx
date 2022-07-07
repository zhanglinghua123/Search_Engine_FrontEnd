import './style/index.less'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {AppBar, Avatar, Pagination, PaginationItem, Stack} from "@mui/material";
import Box from '@mui/material/Box';
import {QueryDiv} from "../../components/QueryDiv";
import {PersonInfo} from "../../components/PersonInfo";
import {NewsItem} from "../../components/NewsItem";
import Paulo from '../../static/Paulo.jpg'
import Robert from '../../static/Robert.jpg'
import logo from '../../static/logo.png'
import {ClubInfo} from "../../components/ClubInfo";
import {TabPanel} from "./components/TabPanel";
import {useEffect, useState} from "react";
import {NewsObject} from "../News";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const QueryResult = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const news = {
        "_id": "2500002",
        "title": "西媒：阿拉维斯准备在冬窗清洗马丁、西拉以及萨乌尔",
        "author": "三分损益法",
        "published_time": "2021-12-28 10:46",
        "content": [
            "根据西班牙媒体Grada 3的消息，阿拉维斯计划在今年冬窗清洗一部分球员，以此来引进更加强力的球员。",
            "据称，马丁、西拉和萨乌尔被列入了清洗名单。",
            "西拉本赛季截至目前各项赛事为阿拉维斯出场14次，打入2球。由于他是阿拉维斯今年夏天刚刚花费110万欧元购入的新援，因此阿拉维斯没有打算将他卖掉，而是计划让西拉去一支能踢主力的西乙球队找状态。",
            "萨乌尔本赛季截至目前各项赛事为阿拉维斯出场2次，几乎没有出场时间。他的合同在明年夏天就到期了，阿拉维斯希望能在今年冬窗提前将其清洗。",
            "马丁本赛季截至目前各项赛事为阿拉维斯出场7次，没有进球或助攻。他是阿拉维斯今年夏天从比利亚雷亚尔租来的球员，目前看来双方都有意愿提前结束这笔租约。"
        ],
        "image_url": [
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/35/720x-/-/-/rBUCgGHKejaAIKWTAADcHA2h-Y0987.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMTY=/dissolve/100/dx/14/dy/10"
        ],
        "video_url": [],
        "tags": [
            "阿拉维斯",
            "比利亚雷亚尔",
            "萨乌尔-加西亚",
            "西拉",
            "伊万-马丁"
        ]
    };

    const news2 = {
        "_id": "2500008",
        "title": "2016U23亚洲杯 93一代各队最佳射手盘点 ...",
        "author": " 懂球号作者: 波黑队长哲科",
        "published_time": "2021-12-28 10:49",
        "content": [
            "2016U23亚洲杯 93一代各队最佳射手盘点 A组篇\n\n卡塔尔最佳射手：7号 艾哈迈德·阿拉丁 6球 赛事金靴\n\n伊朗最佳射手：10号 莫塔哈里 2球\n\n叙利亚最佳射手：8号 奥马尔·赫里宾 3球\n\n中国最佳射手：10号 廖力生 3球"
        ],
        "image_url": [
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/33/720x-/-/-/rBUESWHKeF2AVi09AASy2x3tHgA35.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/14",
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/35/720x-/-/-/rBUCgGHKeJWAWkzWAAB58pDwFjE66.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy84MA==/dissolve/100/dx/10/dy/10",
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/33/720x-/-/-/rBUESWHKeKiAV_aGAARx0mAU-Mo14.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/14",
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/33/720x-/-/-/rBUESWHKeMOAb03pAAR2Pyqcfds56.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/10",
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/33/720x-/-/-/rBUESWHKeRSAdTDlAAUbNQUkD1k77.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/14",
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/35/720x-/-/-/rBUCgGHKeR-AO1nQAAB7zq1a4is66.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8zNQ==/dissolve/100/dx/10/dy/10",
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/34/720x-/-/-/rBUESWHKejaAUSixAARCayf2ovs90.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/13",
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/34/720x-/-/-/rBUESWHKexKAZAjUADIG_IJEhso31.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjA=/dissolve/100/dx/14/dy/10",
            "https://xyimg1.qunliao.info/fastdfs6/M00/68/36/720x-/-/-/rBUCgGHKe0SASkbaAAC5hVDo04E14.jpeg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy84NQ==/dissolve/100/dx/10/dy/10"
        ],
        "video_url": [],
        "tags": [
            "广州",
            "廖力生",
            "奥马尔-赫里宾",
            "艾哈迈德-阿拉丁",
            "莫塔哈里"
        ]
    }

    const club = {
        "_id": "50000537",
        "club_name": "西汉姆联",
        "club_english_name": "West Ham United",
        "club_img_url": "https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FqAJLyyAAAdB5ZXA9k126.png",
        "start_time": "1895",
        "country": "英格兰",
        "city": "伦敦",
        "home_court": "伦敦体育场",
        "capacity": "60000人",
        "telephone": "+44 (871) 2222",
        "email": "customerservices@westhamunited.co.uk",
        "address": "Green Street",
        "game_data": [
            {
                "time": "08-07 23:30",
                "game_kind": "英超 第1轮",
                "home_team": "西汉姆联",
                "visiting_team": "曼城"
            },
            {
                "time": "08-13 22:00",
                "game_kind": "英超 第2轮",
                "home_team": "诺丁汉森林",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "08-20 22:00",
                "game_kind": "英超 第3轮",
                "home_team": "西汉姆联",
                "visiting_team": "布莱顿"
            },
            {
                "time": "08-27 22:00",
                "game_kind": "英超 第4轮",
                "home_team": "阿斯顿维拉",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "08-30 22:00",
                "game_kind": "英超 第5轮",
                "home_team": "西汉姆联",
                "visiting_team": "托特纳姆热刺"
            },
            {
                "time": "09-03 22:00",
                "game_kind": "英超 第6轮",
                "home_team": "切尔西",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "09-10 22:00",
                "game_kind": "英超 第7轮",
                "home_team": "西汉姆联",
                "visiting_team": "纽卡斯尔联"
            },
            {
                "time": "09-17 22:00",
                "game_kind": "英超 第8轮",
                "home_team": "埃弗顿",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "10-01 22:00",
                "game_kind": "英超 第9轮",
                "home_team": "西汉姆联",
                "visiting_team": "狼队"
            },
            {
                "time": "10-08 22:00",
                "game_kind": "英超 第10轮",
                "home_team": "西汉姆联",
                "visiting_team": "富勒姆"
            },
            {
                "time": "10-15 22:00",
                "game_kind": "英超 第11轮",
                "home_team": "南安普顿",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "10-18 03:45",
                "game_kind": "英超 第12轮",
                "home_team": "利物浦",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "10-22 22:00",
                "game_kind": "英超 第13轮",
                "home_team": "西汉姆联",
                "visiting_team": "伯恩茅斯"
            },
            {
                "time": "10-29 22:00",
                "game_kind": "英超 第14轮",
                "home_team": "曼联",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "11-05 22:00",
                "game_kind": "英超 第15轮",
                "home_team": "西汉姆联",
                "visiting_team": "水晶宫"
            },
            {
                "time": "11-12 22:00",
                "game_kind": "英超 第16轮",
                "home_team": "西汉姆联",
                "visiting_team": "莱斯特城"
            },
            {
                "time": "12-26 22:00",
                "game_kind": "英超 第17轮",
                "home_team": "阿森纳",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "12-31 22:00",
                "game_kind": "英超 第18轮",
                "home_team": "西汉姆联",
                "visiting_team": "布伦特福德"
            },
            {
                "time": "01-02 22:00",
                "game_kind": "英超 第19轮",
                "home_team": "利兹联",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "01-14 22:00",
                "game_kind": "英超 第20轮",
                "home_team": "狼队",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "01-21 22:00",
                "game_kind": "英超 第21轮",
                "home_team": "西汉姆联",
                "visiting_team": "埃弗顿"
            },
            {
                "time": "02-04 22:00",
                "game_kind": "英超 第22轮",
                "home_team": "纽卡斯尔联",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "02-11 22:00",
                "game_kind": "英超 第23轮",
                "home_team": "西汉姆联",
                "visiting_team": "切尔西"
            },
            {
                "time": "02-18 23:00",
                "game_kind": "英超 第24轮",
                "home_team": "托特纳姆热刺",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "02-25 23:00",
                "game_kind": "英超 第25轮",
                "home_team": "西汉姆联",
                "visiting_team": "诺丁汉森林"
            },
            {
                "time": "03-04 23:00",
                "game_kind": "英超 第26轮",
                "home_team": "布莱顿",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "03-11 23:00",
                "game_kind": "英超 第27轮",
                "home_team": "西汉姆联",
                "visiting_team": "阿斯顿维拉"
            },
            {
                "time": "03-18 23:00",
                "game_kind": "英超 第28轮",
                "home_team": "曼城",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "04-01 22:00",
                "game_kind": "英超 第29轮",
                "home_team": "西汉姆联",
                "visiting_team": "南安普顿"
            },
            {
                "time": "04-08 22:00",
                "game_kind": "英超 第30轮",
                "home_team": "富勒姆",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "04-15 22:00",
                "game_kind": "英超 第31轮",
                "home_team": "西汉姆联",
                "visiting_team": "阿森纳"
            },
            {
                "time": "04-22 22:00",
                "game_kind": "英超 第32轮",
                "home_team": "伯恩茅斯",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "04-26 02:45",
                "game_kind": "英超 第33轮",
                "home_team": "西汉姆联",
                "visiting_team": "利物浦"
            },
            {
                "time": "04-29 22:00",
                "game_kind": "英超 第34轮",
                "home_team": "水晶宫",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "05-06 22:00",
                "game_kind": "英超 第35轮",
                "home_team": "西汉姆联",
                "visiting_team": "曼联"
            },
            {
                "time": "05-13 22:00",
                "game_kind": "英超 第36轮",
                "home_team": "布伦特福德",
                "visiting_team": "西汉姆联"
            },
            {
                "time": "05-20 22:00",
                "game_kind": "英超 第37轮",
                "home_team": "西汉姆联",
                "visiting_team": "利兹联"
            },
            {
                "time": "05-28 23:00",
                "game_kind": "英超 第38轮",
                "home_team": "莱斯特城",
                "visiting_team": "西汉姆联"
            }
        ],
        "glory_data": {
            "英格兰足总杯 X 3": [
                "1979/1980",
                "1974/1975",
                "1963/1964"
            ],
            "英格兰社区盾 X 1": [
                "1964/1965"
            ],
            "英格兰足球冠军联赛 X 2": [
                "1980/1981",
                "1957/1958"
            ],
            "欧洲优胜者杯 X 1": [
                "1964/1965"
            ]
        }
    };

    const player = {"ability":{},"age":"39岁","birthday":"1982-08-08","country":"塔吉克斯坦","fancy_technique":0,"game_data":[],"glory_data":[null],"height":"178CM","id":"50000002","location":"球员","number":"号","player_english_name":"K. Makhmudov","player_img_url":"https://sd.qunliao.info/fastdfs5/M00/71/65/rB8CCmA_M4uAduEyAAAXFHgaTMk967.jpg","player_name":"马哈茂多夫","prestige":0,"transfer_data":[{"season":"2014-01-01","from_team":"雷加塔达兹","to_team":"杜尚别独立","status":"转会 "}],"weak_foot":0,"weight":"73KG"};

    const [data, setData] = useState<NewsObject[] | undefined>(undefined)
    const val: NewsObject[] = new Array(20);
    for(let i = 0; i < 10; i ++){
        val[i] = news;
        val[i + 10] = news2;
    }


    const refreshData = (index: number) => {
        setData(val.slice((index - 1) * 10 + 1, index * 10))
    }

    const listNews = () => {
        return (
            <div>
                {
                    data?.map((i) => {
                        return <NewsItem title={i.title}
                                         time={i.published_time}
                                         short={i.content[0]}
                                         news_id={i._id}/>
                    })
                }
            </div>
        )
    }

    const handlePageChange = (page: number) => {
        refreshData(page)
    }
    let index = 1

    useEffect(() => {
        setData(val.slice((index - 1) * 10 + 1, index * 10))
    }, [index])

    return (
        <Box sx={{width: '100%'}}>
            <AppBar position={'static'} color={'inherit'} sx={{boxShadow: '0px 2px 2px -1px rgba(0,0,0,0.2)'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={logo} style={{width: '12%', height: '12%'}}/>
                    <QueryDiv ContainerStyle={{width: '45vw'}} fontSize={35}/>
                </div>
            </AppBar>

            <div className={'queryresult-cont'}>
                <div className={'queryresult-result'}>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                              sx={{height: '100%'}}>
                            <Tab label="综合" sx={{width: '5'}} {...a11yProps(0)} />
                            <Tab label="人物" {...a11yProps(1)} />
                            <Tab label="俱乐部" {...a11yProps(2)} />
                            <Tab label="新闻" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>

                        <PersonInfo name={player.player_name} nameEng={player.player_english_name}
                                    birthDate={player.birthday} country={player.country}
                                    location={player.location} imgUrl={player.player_img_url} age={player.age}
                                    height={player.height} weight={player.weight}/>
                        <ClubInfo club_name={club.club_name} club_english_name={club.club_english_name} country={club.country} city={club.city} club_img_url={club.club_img_url} start_time={club.start_time} home_court={club.home_court} />
                        <NewsItem title={news.title}
                                  time={news.published_time}
                                  short={news.content[0]}
                        news_id={news._id}/>
                        {listNews()}
                        <Pagination
                            count={10}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                />
                            )}
                            sx={{width: '60%', margin: 'auto', marginTop: 10}}
                            onChange={(event, page) => {
                                handlePageChange(page)
                            }}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>

                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Three
                    </TabPanel>
                </div>
                <div className={'queryresult-related'}>
                    <div style={{marginTop: 80, marginLeft: 20}}>
                        <div style={{fontSize: 15}}>相关推荐</div>
                        <Stack direction={"row"} spacing={2} sx={{marginTop: 2}}>
                            <Avatar sx={{width: 50, height: 50}} src={Paulo}/>
                            <Avatar sx={{width: 50, height: 50}} src={Robert}/>
                            <Avatar sx={{width: 50, height: 50}}/>
                            <Avatar sx={{width: 50, height: 50}}/>
                            <Avatar sx={{width: 50, height: 50}}/>
                        </Stack>
                    </div>
                </div>
            </div>

        </Box>
    );
}