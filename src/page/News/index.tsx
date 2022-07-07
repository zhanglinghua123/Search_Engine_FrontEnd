import './style/index.less'
import { Button, Chip, Divider, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PlayerObject} from "../Player";
import AxiosInstance from "../../util/axios";
import {TypicalHead} from "../../components/Head/typical";
import {Diamond} from "../../components/Spin";
import LoadingPage from "../../components/LoadingPage"

export type NewsObject = {
    author: string,
    content: string[],
    id: string,
    image_url: string[],
    published_time: string,
    tags: string[],
    title: string,
    video_url: string[]
}

export const News = () => {

    const [Loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<NewsObject | undefined>(undefined);
    const [error, setError] = useState<boolean>(false);
    const url = useParams()

    const GetNewsObject = async () => {
        const data = await AxiosInstance.request<NewsObject, NewsObject>({url: `/article/${url.id}`}).then(val => {
            if(val){
                setTimeout(() => setLoading(false), 1000);
                setData(val);
            }
            else{
                return Promise.reject();
            }
        }).catch(err => {
            setError(true);
        })
    }

    useEffect(() => {
        GetNewsObject();
    })

    const tag = () => {
        return <Stack direction="row" spacing={1}>
            {
                data?.tags.map((i) => {
                    return <Chip label={i} variant={'outlined'} />
                })
            }
        </Stack>
    }
    const content = () => {
        return (
            data?.content.map((i) => {
                return <div style={{ marginTop: 10 }}>
                    {i}
                </div>
            })
        )
    }

    const image = () => {
        return (
            data?.image_url.map((i) => {
                return <img style={{ marginTop: 20 }} src={i} />
            })
        )
    }

    return (
        <LoadingPage showErrorMessage={error} Loading={Loading} tip="少女祈祷中..." FontColor="#666" tipClassName="loadingpage-diamond-tip" LoadingButton={<Diamond Color="#73DDAB" size="large"></Diamond>}>
            <TypicalHead></TypicalHead>
            <Box sx={{ width: '100%', marginTop: '60px' }}>
                <div className={'news-cont'}>
                    <div className={'news-title'}>
                        {data?.title}
                    </div>
                    <div style={{ marginLeft: 20, fontSize: 15, color: '#888585', display: 'flex' }}>
                        <div>
                            {data?.author}
                        </div>
                        <div style={{marginLeft: '20px' }}>
                            {data?.published_time}
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
                        {image()}
                    </div>
                </div>

            </Box>
        </LoadingPage>
    )
}