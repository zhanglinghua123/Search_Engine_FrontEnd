import {TabPanel} from "../TabPanel";
import {ClubItem} from "../../../Club";
import {NewsObject} from "../../../News";
import {useEffect, useState} from "react";
import {NewsItem} from "../../../../components/NewsItem";
import {Pagination, PaginationItem} from "_@mui_material@5.8.7@@mui/material";
import * as React from "react";
import {ClubInfo} from "../../../../components/ClubInfo";

interface ClubListProps {
    index: number;
    value: number;
    list: ClubItem[]
}

export function ClubList(props: ClubListProps){

    const {index, value, list, ...other} = props;

    const val: ClubItem[] = list;

    const [data, setData] = useState<ClubItem[] | undefined>(undefined)

    const refreshData = (index: number) => {
        if(val.length < 10){
            setData(val)
        }
        else{
            setData(val.slice((index - 1) * 10 + 1, index * 10))
        }
    }

    const listClubs = () => {
        return (
            <div>
                {
                    data?.map((i) => {
                        return <ClubInfo club_name={i.club_name as string} club_english_name={i.club_english_name as string}
                                         country={i.country as string} city={i.city as string} club_img_url={i.club_img_url as string}
                                         start_time={i.start_time as string} home_court={i.home_court as string}  club_id={i._id1 as string}/>
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
            {listClubs()}
            <Pagination
                count={val.length < 10 ? 1 : val.length / 10}
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