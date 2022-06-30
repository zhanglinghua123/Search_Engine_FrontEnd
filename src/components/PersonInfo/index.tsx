import * as React from 'react'
import {Avatar, Box} from "@mui/material";
import './index.less'
import Cristiano from '../../static/Cristiano.jpg'
import m from '../../static/m.jpg'

export const PersonInfo = () =>{
    return (
        <div>
            <Box sx={{ width: '100%', borderRadius: 3, boxShadow: '#20202020 2px 2px 10px 1px', marginTop: 1 }}>
                <div className={'person-cont'}>
                    <div className={'person-avatar'}>
                        <Avatar sx={{width: 80, height: 80}} alt="1" src={Cristiano} />
                    </div>
                    <div className={'person-profile'}>
                        <div className={'name'}>C罗</div>
                        <div className={'info'}>出生日期：1985-02-05</div>
                        <div className={'info'}>俱乐部：曼彻斯特联足球俱乐部</div>
                        <div className={'info'}>专业特点：技术出众，速度惊人</div>
                    </div>
                </div>
            </Box>
            <Box sx={{ width: '100%', borderRadius: 3, boxShadow: '#20202020 2px 2px 10px 1px', marginTop: 2 }}>
                <div className={'person-cont'}>
                    <div className={'person-avatar'}>
                        <img src={m} style={{width: 80, height: 80}}/>
                    </div>
                    <div className={'person-profile'}>
                        <div className={'name'}>曼彻斯特联足球俱乐部</div>
                        <div className={'info'}>赛事：英格兰足球超级联赛</div>
                        <div className={'info'}>知名人物：弗格森、巴斯比、查尔顿</div>
                        <div className={'info'}>主要荣誉：英格兰顶级联赛冠军20次，英格兰足总杯冠军12次</div>
                    </div>
                </div>
            </Box>
        </div>
    )
}