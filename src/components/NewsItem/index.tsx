import './index.less'
import * as React from "react";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {Link, Router} from "react-router-dom";

interface NewsItemProps {
    children?: React.ReactNode;
    title: string;
    time: string;
    word?: string;
    short: string;
    news_id: string;
}

export const NewsItem = (props: NewsItemProps) =>{
    const {children, title, time, word, short, news_id, ...other} = props
    return (
        <Card sx={{marginTop: '10px'}} onClick={() => {
            window.open(`news/${news_id}`)
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: '#1749a2'}}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"
                                sx={{fontSize: 13}}>
                        <span style={{color: '#888585'}}>{time}</span> {short}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}