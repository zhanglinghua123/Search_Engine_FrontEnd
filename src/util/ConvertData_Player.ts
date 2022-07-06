import { PlayerObject } from "../page/Player"

// 队友界面的 荣誉数据转换函数
export const ConvertDataFromPrice = (data:PlayerObject|undefined):string[][]=>{
    return [[]]
}
// 队友转会的数据转换函数
export const ConvertDataFromTransfer =  (data:PlayerObject|undefined):string[][]=>{
    let result = []
    for(let key in data?.transfer_data){
        result.push(data?.transfer_data[key] as string[])
    }
    return result.length> 0 ? result : [[]]
}
// 队友界面的 伤病转换函数
export const ConvertDataFromWound = ()=>{

}
export const ConvertDataFromIntro = (data:PlayerObject|undefined):string[][]=>{
    return data ? [["俱乐部",'club'],['位置','location'],["号码",'number'],['国籍','country'],['年龄','age'],['生日','birthday'],['身高','height'],['体重','weight'],['惯用脚','habitual_foot']].map((value)=>{
        return [value[0],data[value[1]] || "暂无"] as string[]
    }):[[]]
}