import {PlayerObject} from "../../../Player";
import {ClubItem} from "../../../Club";
import {NewsObject} from "../../../News";
import {useEffect, useState} from "react";
import {PersonInfo} from "../../../../components/PersonInfo";
import * as React from "react";
import {ClubInfo} from "../../../../components/ClubInfo";
import {TabPanel} from "../TabPanel";
import {Pagination, PaginationItem} from "@mui/material";
import {NewsItem} from "../../../../components/NewsItem";

interface AllItemsProps {
    index: number;
    value: number;
    personList: PlayerObject[]
    clubList: ClubItem[]
    newsList: NewsObject[]
}

export function AllItems(props: AllItemsProps) {
    const {index, value, personList, newsList, clubList, ...other} = props;

    const [data, setData] = useState<NewsObject[] | undefined>(undefined)

    const val: NewsObject[] = newsList

    const [page, setPage] = useState(1)

    const refreshData = (index: number) => {
        setPage(index)
        setData(val.slice((index - 1) * 10, index * 10))
    }

    const listPlayers = () => {
        return (
            <div>
                {
                    personList.slice(0, 4).map((i) => {
                        return <PersonInfo name={i.player_name as string} weight={i.weight as string} height={i.height as string}
                                           age={i.age as string} imgUrl={i.player_img_url as string} location={i.location as string}
                                           country={i.country as string} birthDate={i.birthday as string} nameEng={i.player_english_name as string}
                                           person_id={i._id1 as string}/>
                    })
                }
            </div>
        )
    }

    const listClubs = () => {
        return(
            <div>
                {
                    clubList.slice(0, 4).map((i) => {
                        return <ClubInfo club_name={i.club_name as string} club_english_name={i.club_english_name as string}
                                         country={i.country as string} city={i.city as string} club_img_url={i.club_img_url as string}
                                         start_time={i.start_time as string} home_court={i.home_court as string}  club_id={i._id1 as string}/>
                    })
                }
            </div>
        )
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

    const listItems = () => {
        if(page == 1){
            return (
                <div>
                    {listPlayers()}
                    {listClubs()}
                    {listNews()}
                </div>
            )
        }
        else{
            return (
                <div>
                    {listNews()}
                </div>
            )
        }
    }

    const handlePageChange = (page: number) => {
        refreshData(page)
    }

    useEffect(() => {
        setData(val.slice((page - 1) * 10, page * 10))
    }, [page, val])

    return (
        <TabPanel index={index} value={value}>
            {listItems()}
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