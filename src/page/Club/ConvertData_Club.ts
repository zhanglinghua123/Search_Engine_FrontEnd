import { ClubItem } from ".";

export function ConvertDataFromClubIntro(data:ClubItem):string[][]{
    return data?[["成立",'start_time'],["国家",'country'],['城市','city'],["主场",'home_count'],['容纳','capacity'],['邮箱','email'],['地址','address'],['电话','telephone'],].map(val=>{
        return [val[0],(data[val[1]] as string) || "暂无"]
    }):[[]]
}
// 队友界面的 比赛转换函数
export const ConvertClubDataFromGame = (data: ClubItem | undefined) => {
    if (data?.game_data?.length === 0 || data?.game_data?.[1] === null || data?.game_data === undefined) return [[]]
    let result = []
    for (let item of data?.game_data) {
        if (item)
        {
            const mid = Object.values(item)
            mid.splice(3,0,"VS")
            result.push(mid)
        }
    }
    return result.length > 0 ? result : [[]]
}
// 队友界面的 荣誉转换函数
export const ConvertClubDataFromGlory = (data: ClubItem | undefined) => {
    if (data?.glory_data === {}  || data?.glory_data === undefined) return [[]]
    let result = []
    for (let item in data?.glory_data) {
        if (item)
            result.push([item,...data?.glory_data?.[item]])
    }
    return result.length > 0 ? result : [[]]
}
// 队友界面的 荣誉转换函数
export const ConvertClubDataFromAbility = (url:number):[number[],string[],number] => {
    const mid :[number[],string[]]=[ [url%45+55,url%40+60,url%50+50,url%35+65,url%25+60+url%15,url%45+40+url%15],["地区","综合","进攻","防守","声望","控球"]]
    return [...mid,Math.floor( mid[0].reduce((acc, val) => acc + val, 0) / mid[0].length)]
}