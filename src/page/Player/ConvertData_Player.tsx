import { ReactNode } from "react"
import { PlayerObject } from "."
// 队友界面的 荣誉数据转换函数
import RightArrow from "../../static/svg/right-arrow.svg"
export const ConvertDataFromGlory = (data: PlayerObject | undefined): string[][] => {
    if (data?.glory_data == {} || data?.glory_data?.[1] === null || data?.glory_data === undefined) return [[]]
    let result = []
    for (let item in data.glory_data) {
        if (item)
            result.push([item, ...data.glory_data[item]])
    }
    return result.length > 0 ? result : [[]]
}
// 队友转会的数据转换函数
export const ConvertDataFromTransfer = (data: PlayerObject | undefined): (ReactNode | string)[][] => {
    if (data?.transfer_data?.length === 0 || data?.transfer_data?.[1] === null || data?.transfer_data === undefined) return [[]]
    let result = []
    for (let item of data?.transfer_data) {
        if (item) {
            const mid = Object.values(item)
            mid.splice(2, 0, <img src={RightArrow} style={{
                color: "rgba(0,0,0,0.06)",
                width: "1em",
                verticalAlign: "-0.125em"

            }} alt=""></img>)
            result.push(mid)
        }

    }
    return result.length > 0 ? result : [[]]
}
// 队友界面的 比赛转换函数
export const ConvertDataFromGame = (data: PlayerObject | undefined) => {
    if (data?.game_data?.length === 0 || data?.game_data?.[1] === null || data?.game_data === undefined) return [[]]
    let result = []
    for (let item of data?.game_data) {
        if (item)
            result.push(Object.values(item))
    }
    return result.length > 0 ? result : [[]]
}
export const ConvertDataFromIntro = (data: PlayerObject | undefined): string[][] => {
    return data ? [["俱乐部", 'club'], ['位置', 'location'], ["号码", 'number'], ['国籍', 'country'], ['年龄', 'age'], ['生日', 'birthday'], ['身高', 'height'], ['体重', 'weight'], ['惯用脚', 'habitual_foot']].map((value) => {
        return [value[0], data[value[1]] || "暂无"] as string[]
    }) : [[]]
}
// 运动员界面的 转换能力数据函数
export const ConvertDataFromAbility = (data: PlayerObject | undefined): [string[], number[]] => {
    let result: [string[], number[]] = [[], []]
    if (!data) return result;
    ["扑救", "位置", "速度", "反应", "开球", "手型"].map((val: string) => {
        result[0].push(val)
        const t = data?.ability![val]
        result[1].push(parseInt(data?.ability![val]))
    })
    return result
}
export const ConvertDataFromAbilityColumn = (data: PlayerObject | undefined): { value: string, type: { key: string, value: number | boolean } }[] => {
    if (!data) return []
    else return [["逆足能力", "weak_foot", "star"], ["花式技巧", "fancy_technique", "star"], ["国际声望", "prestige", "star"], ["惯用脚", "habitual_foot", "foot"]].map(val => {
        return {
            value: val[0],
            type: {
                key: val[2],
                value: val[2] === "star" ? parseInt(data?.[val[1]] as string) : data?.[val[1]] === "左脚"
            }
        }
    })
}