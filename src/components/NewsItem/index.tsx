import './index.less'
import * as React from "react";

interface NewsItemProps {
    children?: React.ReactNode;
    title: string;
    time: string;
    word?: string;
    short: string;
}

export const NewsItem = (props: NewsItemProps) =>{
    const {children, title, time, word, short, ...other} = props
    return (
        <div className={'news-item-cont'}>
            <div className={'news-item-title'}>
                {title}
            </div>
            <div className={'news-item-short'}>
                <span style={{color: '#888585'}}>{time}</span>{short}
            </div>
            {/*<div className={'news-title'}>*/}
            {/*    基恩:17岁的<span style={{color: 'cornflowerblue'}}>C罗</span>加盟曼联很勇敢,他是一个招人喜欢的球员*/}
            {/*</div>*/}
            {/*<div className={'news-short'}>*/}
            {/*    <span style={{color: '#888585'}}>4小时前 </span>近日，曼联传奇队长罗伊-基恩在自己的自传中回忆了当年他与C罗共事的经历，也谈到了当年他对C罗的看法。*/}
            {/*    基恩表示：“C罗一来曼联我就喜欢上了这个小伙子，他很有风度，态度也很端正。让我...*/}
            {/*</div>*/}
        </div>
    )
}