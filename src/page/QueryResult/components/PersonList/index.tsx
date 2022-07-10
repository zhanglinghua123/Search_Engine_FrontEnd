import {TabPanel} from "../TabPanel";
import {PlayerObject} from "../../../Player";
import {NewsObject} from "../../../News";
import {useEffect, useState} from "react";
import {NewsItem} from "../../../../components/NewsItem";
import {Pagination, PaginationItem} from "@mui/material";
import * as React from "react";
import {PersonInfo} from "../../../../components/PersonInfo";

interface PersonListProps {
    index: number;
    value: number;
    list: PlayerObject[]
}

export function PersonList(props: PersonListProps){
    const {index, value, list, ...other} = props;

    const val: PlayerObject[] = list;

    const [data, setData] = useState<PlayerObject[] | undefined>(undefined)

    const refreshData = (index: number) => {
        if(val.length < 10){
            setData(val)
        }
        else{
            setData(val.slice((index - 1) * 10 + 1, index * 10))
        }

    }

    const listPlayers = () => {
        return (
            <div>
                {
                    data?.map((i) => {
                        return <PersonInfo name={i.player_name as string} weight={i.weight as string} height={i.height as string}
                                           age={i.age as string} imgUrl={i.player_img_url as string} location={i.location as string}
                                           country={i.country as string} birthDate={i.birthday as string} nameEng={i.player_english_name as string}
                                           person_id={i._id1 as string}/>
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
            {listPlayers()}
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
