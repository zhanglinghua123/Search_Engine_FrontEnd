import AxiosInstance from "../../util/axios"

export const getClubItem = (name:string)=>{
    AxiosInstance("/club",{method:"get",params:{
        name:name
    }})
}