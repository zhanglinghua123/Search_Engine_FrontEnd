import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import m from "../../static/m.jpg";
import * as React from "react";

interface ClubInfoProps {
    club_name: string;
    club_english_name: string;
    country: string;
    city: string;
    club_img_url: string;
    start_time: string;
    home_court: string;
}

export const ClubInfo = (props: ClubInfoProps) => {
    const {club_name, club_english_name, country, city, club_img_url, start_time, home_court, ...other} = props;

    return (
        <Card sx={{marginTop: '10px'}}>
            <CardActionArea>
                <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={'person-avatar'}>
                        <img src={club_img_url} style={{width: 80, height: 80}} alt={'image'}/>
                    </div>
                    <div className={'person-profile'}>
                        <Typography gutterBottom variant="h5" component="div" sx={{color: '#234a9b', display: 'flex', alignItems: 'center'}}>
                            {club_name}
                            <div style={{color: 'gray', fontSize: 16, marginLeft: '10px'}}>{club_english_name}</div>
                        </Typography>
                        <div style={{display: 'flex'}}>
                            <Typography variant="body2" color="text.secondary"
                                        sx={{fontSize: 13, flex: 1}}>
                                <div className={'info'}>地点：{country}-{city}</div>
                                <div className={'info'}>创建时间：{start_time}</div>
                                <div className={'info'}>主场：{home_court}</div>
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}