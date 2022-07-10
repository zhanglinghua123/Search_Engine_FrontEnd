import * as React from 'react'
import {Avatar, Box, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import './index.less'
import Cristiano from '../../static/Cristiano.jpg'
import m from '../../static/m.jpg'

interface PersonInfoProps {
    children?:React.ReactNode;
    person_id: string;
    imgUrl: string;
    name: String;
    nameEng: String;
    country: String;
    birthDate: String;
    location: String;
    age: String;
    height: String;
    weight: String;
}

export const PersonInfo = (props: PersonInfoProps) =>{
    const {person_id, children, imgUrl, name, nameEng, country, birthDate, location, age, weight, height, ...other} = props;
    return (
        <Card sx={{marginTop: '10px'}} onClick={() => {
            window.open(`player/${person_id}`)
        }}>
            <CardActionArea>
                <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={'person-avatar'}>
                        <Avatar sx={{width: 80, height: 80}} alt="1" src={imgUrl} />
                    </div>
                    <div className={'person-profile'}>
                        <Typography gutterBottom variant="h5" component="div" sx={{color: '#234a9b', display: 'flex', alignItems: 'center'}}>
                            {name}
                            <div style={{color: 'gray', fontSize: 16, marginLeft: '10px'}}>{nameEng}</div>
                        </Typography>
                        <div style={{display: 'flex'}}>
                            <Typography variant="body2" color="text.secondary"
                                        sx={{fontSize: 13, flex: 1}}>
                                <div className={'info'}>出生日期：{birthDate}</div>
                                <div className={'info'}>国家： {country}</div>
                                <div className={'info'}>位置： {location}</div>
                            </Typography>
                            <Typography variant="body2" color="text.secondary"
                                        sx={{fontSize: 13, flex: 1}}>
                                <div className={'info'}>年龄：{age}</div>
                                <div className={'info'}>身高： {height}</div>
                                <div className={'info'}>体重： {weight}</div>
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}