import {TabPanel} from "../TabPanel";
import {NewsObject} from "../../../News";
import {NewsItem} from "../../../../components/NewsItem";
import {useEffect, useState} from "react";
import * as React from "react";
import {Pagination, PaginationItem} from "_@mui_material@5.8.7@@mui/material";
import '../index.less'

interface NewsListProps {
    index: number;
    value: number;
}

export function NewsList(props: NewsListProps) {

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
    };

    const val: NewsObject[] = new Array(20);

    const [data, setData] = useState<NewsObject[] | undefined>(undefined)

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
                        return <NewsItem title={i.title} time={i.published_time} short={i.content[0]} news_id={i._id}/>
                    })
                }
            </div>
        )
    }

    const handlePageChange = (page: number) => {
        refreshData(page)
    }

    let page = 1

    useEffect(() => {
        setData(val.slice((page - 1) * 10 + 1, page * 10))
    }, [page])

    const {index, value, ...other} = props;
    return (
        <TabPanel index={index} value={value}>
            {listNews()}
            <Pagination
                count={val.length / 10}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                    />
                )}
                sx={{width: '60%', margin: 'auto', marginTop: 10, justifyContent: 'center'}}
                onChange={(event, page) => {
                    handlePageChange(page)
                }}
            />
        </TabPanel>
    )
}