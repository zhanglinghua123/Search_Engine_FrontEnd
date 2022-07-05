import './style/index.less'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Pagination, PaginationItem} from "@mui/material";
import Box from '@mui/material/Box';
import { QueryDiv } from "../../components/QueryDiv";
import { PersonInfo } from "../../components/PersonInfo";
import { Avatar, Stack } from "@mui/material";
import { NewsItem } from "../../components/NewsItem";
import Paulo from '../../static/Paulo.jpg'
import Robert from '../../static/Robert.jpg'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

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

    return (
        <Box sx={{ width: '100%' }}>
            {/*<div style={{width: '50%'}}>*/}
            {/*    <QueryDiv />*/}
            {/*</div>*/}

            <div className={'queryresult-cont'}>
                <div className={'queryresult-result'}>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ height: '100%' }}>
                            <Tab label="综合" sx={{ width: '5' }} {...a11yProps(0)} />
                            <Tab label="人物" {...a11yProps(1)} />
                            <Tab label="俱乐部" {...a11yProps(2)} />
                            <Tab label="新闻" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>

                        <PersonInfo></PersonInfo>
                        <NewsItem title={'一波三折!曝C罗正式加盟罗马,双方已经达成协议,7月7日官宣'}
                        time={'12小时前 '} short={'而在众多传言中，关于C罗即将加盟罗马的消息，引发球迷广泛讨论。根据最新爆料，按照罗马名宿迪利维奥的说法，C罗已经和罗马达成协议，预计双方会在7月7日正式对外官宣。不过，迪利维奥并...'}></NewsItem>
                        <Pagination
                            count={10}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                />
                            )}
                            sx={{width: '60%', margin: 'auto', marginTop: 10}}
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
                    <div style={{ marginTop: 80, marginLeft: 20 }}>
                        <div style={{ fontSize: 15 }}>相关推荐</div>
                        <Stack direction={"row"} spacing={2} sx={{ marginTop: 2 }}>
                            <Avatar sx={{ width: 50, height: 50 }} src={Paulo} />
                            <Avatar sx={{ width: 50, height: 50 }} src={Robert} />
                            <Avatar sx={{ width: 50, height: 50 }} />
                            <Avatar sx={{ width: 50, height: 50 }} />
                            <Avatar sx={{ width: 50, height: 50 }} />
                        </Stack>
                    </div>
                </div>
            </div>

        </Box>
    );
}


// export const QueryResult = () => {
//     return <div className={'queryresult-cont'}>
//         <div className={`queryresult-result`}>
//             <Tabs>
//                 <Tab label={"综合"}></Tab>
//             </Tabs>
//         </div>
//     </div>
// }