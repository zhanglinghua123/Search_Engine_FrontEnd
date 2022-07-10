import {TabPanel} from "../TabPanel";
import {NewsObject} from "../../../News";
import {NewsItem} from "../../../../components/NewsItem";
import {useEffect, useState} from "react";
import * as React from "react";
import {Pagination, PaginationItem} from "@mui/material";
import '../index.less'

interface NewsListProps {
    index: number;
    value: number;
    list: NewsObject[]
}

export function NewsList(props: NewsListProps) {
    const {index, value, list, ...other} = props;

    const val: NewsObject[] = list;

    const [data, setData] = useState<NewsObject[] | undefined>(undefined)

    const refreshData = (index: number) => {
        if(val.length < 10){
            setData(val)
        }
        else{
            setData(val.slice((index - 1) * 10, index * 10))
        }

    }

    const listNews = () => {
        return (
            <div>
                {
                    data?.map((i) => {
                        return <NewsItem title={i.title} time={i.published_time} short={i.content[0]} news_id={i._id1}/>
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
        refreshData(page)
    }, [page, val])

    return (
        <TabPanel index={index} value={value}>
            {listNews()}
            <Pagination
                count={val.length < 10 ? 1 : Math.ceil(val.length / 10)}
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