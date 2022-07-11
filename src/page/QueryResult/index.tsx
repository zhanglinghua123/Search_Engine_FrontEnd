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

    const [sort, setSort] = useState('1')

    const [result, setResult] = useState<Result>({news: [], player: [], club: [], recommend: []})

    const [newsItems, setNewsItems] = useState<NewsObject[]>([])

    const [playerItems, setPlayerItems] = useState<PlayerObject[]>([])

    const [clubItems, setClubItems] = useState<ClubItem[]>([])


    const sortChange = (event: SelectChangeEvent) => {
        console.log(event.target.value)
        setSort(event.target.value);
        if(event.target.value == '1'){
            setNewsItems(result.news)
            setPlayerItems(filterPlayer(result.player))
            setClubItems(filterClub(result.club))
        }
        else{
            newsItems.sort((a, b) => {
                switch (event.target.value) {
                    case '2':
                        return b.published_time.localeCompare(a.published_time);
                    case '3':
                        return a.click_cnt - b.click_cnt
                    default:
                        return 0;
                }
            })
            console.log(newsItems)
            playerItems.sort((a, b) => {
                switch (event.target.value) {
                    case '3':
                        return a.click_cnt && b.click_cnt ? a.click_cnt - b.click_cnt : 0
                    default:
                        return 0;
                }
            })
            clubItems.sort((a, b) => {
                switch (event.target.value) {
                    case '3':
                        return a.click_cnt - b.click_cnt
                    default:
                        return 0;
                }
            })
        }

    };

    const search = window.location.search.split("=")[1];

    console.log(search)

    const navigate = useNavigate()

    const showRecommend = () => {
        return (
            <div>
                <Stack direction={"row"} spacing={3} sx={{marginTop: 2, maxWidth: '60px'}}>
                    {
                        result.recommend.slice(0,5).map(i => {
                            return(
                                <Stack direction={'column'} spacing={1}>
                                    <Avatar sx={{width: 50, height: 50}} src={i[3]} onClick={() => {
                                        navigate(`/result?search=${i[1]}`)
                                        window.location.reload()
                                    }}/>
                                    <span style={{color: 'gray', textAlign: 'center'}}>{i[1]}</span>
                                </Stack>
                            )
                        })
                    }
                </Stack>
                <Stack direction={"row"} spacing={3} sx={{marginTop: 2, maxWidth: '60px'}}>
                    {
                        result.recommend.slice(5,result.recommend.length).map(i => {
                            return(
                                <Stack direction={'column'} spacing={1}>
                                    <Avatar sx={{width: 50, height: 50}} src={i[3]} onClick={() => {
                                        navigate(`/result?search=${i[1]}`)
                                        window.location.reload()
                                    }}/>
                                    <span style={{color: 'gray', textAlign: 'center'}}>{i[1]}</span>
                                </Stack>
                            )
                        })
                    }
                </Stack>
            </div>

        )
    }

    const filterPlayer = (data: PlayerObject[]) => {
        const obj: {[key: string]: boolean;} = {};
        data = data.reduce<PlayerObject[]>((item, next) => {
            if (!obj[next.player_img_url as string]) {
                item.push(next);
                obj[next.player_img_url as string] = true;
            }
            return item;
        },[]);
        return data;
    }

    const filterClub = (data: ClubItem[]) => {
        const obj: {[key: string]: boolean;} = {};
        data = data.reduce<ClubItem[]>((item, next) => {
            if (!obj[next.club_img_url as string]) {
                item.push(next);
                obj[next.club_img_url as string] = true;
            }
            return item;
        },[]);
        return data;
    }

    const searchResult = async () => {
        const data = await AxiosInstance.request<Result, Result>({url: `/search?searchString=${search}`}).then( val => {
            if(val){
                setResult(val)
                setNewsItems(val.news)
                setPlayerItems(filterPlayer(val.player))
                setClubItems(filterClub(val.club))
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
                                <MenuItem value={"1"} sx={{fontSize: '12px'}}>相关度排序</MenuItem>
                                <MenuItem value={"2"} sx={{fontSize: '12px'}}>时间排序</MenuItem>
                                <MenuItem value={"3"} sx={{fontSize: '12px'}}>点击量排序</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <AllItems index={0} value={value} personList={playerItems} clubList={clubItems} newsList={newsItems.slice(0, newsItems.length)} />
                    <PersonList index={1} value={value} list={playerItems.slice(0, playerItems.length)} />
                    <ClubList index={2} value={value} list={clubItems.slice(0, clubItems.length)} />
                    <NewsList index={3} value={value} list={newsItems.slice(0, newsItems.length)}/>
                </div>
                <div className={'queryresult-related'}>
                    <div style={{marginTop: 80, marginLeft: 20}}>
                        <div style={{fontSize: 15}}>相关推荐</div>
                            {
                                showRecommend()
                            }
                    </div>
                </div>
            </div>

        </Box>
    );
}