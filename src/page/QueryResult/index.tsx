import './style/index.less'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
    AppBar,
    Avatar,
    FormControl,
    InputLabel,
    MenuItem,
    Pagination,
    PaginationItem,
    Select,
    SelectChangeEvent,
    Stack
} from "@mui/material";
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
import {NewsList} from "./components/NewsList";
import {ClubList} from "./components/ClubList";
import {PersonList} from "./components/PersonList";
import AxiosInstance from "../../util/axios";
import {PlayerObject} from "../Player";
import {ClubItem} from "../Club";
import {useLocation, useNavigate} from "react-router-dom";
import {AllItems} from "./components/AllItems";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export type PlayerResult = {player: PlayerObject[]}

export type ClubResult = {club: ClubItem[]}

export type NewsResult = {news: NewsObject[]}

export type Recommend = {recommended_players: string[][]}

export type Result = {
    news: NewsObject[],
    player: PlayerObject[],
    club: ClubItem[],
    recommend: string[][]
}

export const QueryResult = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


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

    const [sort, setSort] = useState('1')

    const [playerResult, setPlayerResult] = useState<PlayerObject[]>([])
    const [clubResult, setClubResult] = useState<ClubItem[]>([])
    const [newsResult, setNewsResult] = useState<NewsObject[]>([])
    const [recommendedResult, setRecommendedResult] = useState<string[][]>([[]])
    const [result, setResult] = useState<Result>({news: [], player: [], club: [], recommend: []})

    const sortChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };

    const search = window.location.search.split("=")[1];

    console.log(search)

    const navigate = useNavigate()

    const showRecommend = () => {
        return (
            <Stack direction={"row"} spacing={2} sx={{marginTop: 2}}>
                {
                    result.recommend.map(i => {
                        return <Avatar sx={{width: 50, height: 50}} src={i[3]} onClick={() => {
                            navigate(`/result?search=${i[1]}`)
                            window.location.reload()
                        }}/>
                    })
                }
            </Stack>
        )
    }

    const searchResult = async () => {
        const data = await AxiosInstance.request<Result, Result>({url: `/search?searchString=${search}`}).then( val => {
            if(val){
                setResult(val)
                console.log(val)
            }
            else{
                return Promise.reject()
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        searchResult()
    }, [search])


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
                    <Box sx={{display: 'flex'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                              sx={{height: '100%'}}>
                            <Tab label="综合" sx={{width: '5'}} {...a11yProps(0)} />
                            <Tab label="人物" {...a11yProps(1)} />
                            <Tab label="俱乐部" {...a11yProps(2)} />
                            <Tab label="新闻" {...a11yProps(3)} />
                        </Tabs>
                        <div style={{flex: 1}} />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 80}}>
                            <Select sx={{fontSize: '12px'}} value={sort} onChange={sortChange}>
                                <MenuItem value={1} sx={{fontSize: '12px'}}>相关度排序</MenuItem>
                                <MenuItem value={2} sx={{fontSize: '12px'}}>时间排序</MenuItem>
                                <MenuItem value={3} sx={{fontSize: '12px'}}>点击量排序</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <AllItems index={0} value={value} personList={result.player} clubList={result.club} newsList={result.news} />
                    <PersonList index={1} value={value} list={result.player} />
                    <ClubList index={2} value={value} list={result.club} />
                    <NewsList index={3} value={value} list={result.news}/>
                </div>
                <div className={'queryresult-related'}>
                    <div style={{marginTop: 80, marginLeft: 20}}>
                        <div style={{fontSize: 15}}>相关推荐</div>
                            {
                                showRecommend()
                            }
                            {/*<Avatar sx={{width: 50, height: 50}} src={Paulo}/>*/}
                            {/*<Avatar sx={{width: 50, height: 50}} src={Robert}/>*/}
                            {/*<Avatar sx={{width: 50, height: 50}}/>*/}
                            {/*<Avatar sx={{width: 50, height: 50}}/>*/}
                            {/*<Avatar sx={{width: 50, height: 50}}/>*/}
                    </div>
                </div>
            </div>

        </Box>
    );
}