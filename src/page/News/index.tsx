import './style/index.less'
import { Button, Chip, Divider, Stack } from "@mui/material";
import Box from "@mui/material/Box";

export const News = () => {

    const item = {
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

    const tag = () => {
        return <Stack direction="row" spacing={1}>
            {
                item.tags.map((i) => {
                    return <Chip label={i} variant={'outlined'} />
                }
                )
            }
        </Stack>
    }
    const content = () => {
        return (
            item.content.map((i) => {
                return <div style={{ marginTop: 10 }}>
                    {i}
                </div>
            })
        )
    }

    return (
        <Box sx={{ width: '100%' }}>
            <div className={'news-cont'}>
                <div className={'news-title'}>
                    {item.title}
                </div>
                <div style={{ marginLeft: 20, fontSize: 15, color: '#888585', display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        {item.author}
                    </div>
                    <div style={{ flex: 6 }}>
                        {item.published_time}
                    </div>
                </div>
                <div style={{ marginLeft: 20, marginTop: 20 }}>
                    <div style={{ color: '#888585', fontSize: 15 }}>
                        {tag()}
                    </div>
                </div>
                <Divider sx={{ padding: '10px 20px' }} />
                <div className={'news-content'}>
                    {content()}
                    <img style={{ marginTop: 20 }} src={'https://xyimg1.qunliao.info/fastdfs6/M00/68/35/720x-/-/-/rBUCgGHKejaAIKWTAADcHA2h-Y0987.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMTY=/dissolve/100/dx/14/dy/10'} />
                </div>
            </div>

        </Box>
    )
}