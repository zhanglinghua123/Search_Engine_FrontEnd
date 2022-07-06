import { Head } from "./Head"
import Home from "../../static/svg/home.svg"
import Search from "../../static/svg/search.svg"
import Github from "../../static/svg/github-fill.svg"
import Sports from "../../static/svg/sort_sports.svg"
import News from "../../static/svg/news.svg"
import Club from "../../static/svg/俱乐部.svg"
export const TypicalHead = () => {
    return <div>
        <Head HeadNameArray={[["Home", "/", <img src={Home}></img>],
        ["Search", '/result', <img src={Search} style={{
            width: "1.1em",
            height: "1.1em",
            verticalAlign: "-0.2em",
        }}></img>],
        ["Player", "/player", <img src={Sports} style={{
            width: "0.9em",
            height: "0.9em",
            verticalAlign: "-0.1em",
            marginRight: "4px"
        }}></img>],
        ["Club", "/club", <img src={Club} style={{
            width: "0.9em",
            height: "0.9em",
            verticalAlign: "-0.1em",
            marginRight: "4px"
        }}></img>],
        ["News", '/news', <img src={News} style={{
            width: "1em",
            height: "1em",
            verticalAlign: "-0.1em",
            marginRight: "4px"
        }}></img>],
        ['Github', "https://github.com/zhanglinghua123/MineReactComponentLibrary", <img src={Github} style={{
            width: "1.1em",
            height: "1.1em",
            verticalAlign: "-0.15em",
            marginRight: "4px"
        }}></img>],
        ]}></Head>
    </div>
}