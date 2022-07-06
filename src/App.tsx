import React from 'react';
import './App.css';
import { FontPage } from './page/Fontpage/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryResult } from './page/QueryResult';
import { Player } from './page/Player';
import { News } from './page/News';
import { Club } from './page/Club';

function App() {
    React.useEffect(() => {
        // setTimeout(() => {
        //定时器,created执行一秒后触发
        let modelname = 'tororo';
        if ((window as any).L2Dwidget)
            (window as any).L2Dwidget.init({
                pluginRootPath: 'live2dw/', //指向你的目录
                pluginJsPath: 'lib/', //指向你的目录
                // pluginModelPath: 'live2d-widget-model-nico/assets/',                                   //中间这个koharu就是你的老婆,想换个老婆,换这个就可以了
                tagMode: false,
                debug: false,
                // hibiki 是jk hijiki 是黑猫猫
                // izumi 中年妇女 kahuru Q版女孩子
                // wanko 是笨狗
                // tororo 白猫
                model: {
                    jsonPath: `/live2dw/live2d-widget-model-${modelname}/assets/${modelname}.model.json`,
                }, //中间这个koharu就是你的老婆,想换个老婆,换这个就可以了
                display: {
                    position: 'right',
                    width: 130,
                    height: 130,
                    hOffset: 80, // canvas水平偏移
                    vOffset: 80, // canvas垂直偏移
                    zindex: 1000,
                }, //调整大小,和位置
                mobile: { show: true }, //要不要盯着你的鼠标看
                log: false,
            });
        // }, 300);
    }, []);
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<FontPage></FontPage>}></Route>'
                    <Route path="/result" element={<QueryResult></QueryResult>}></Route>
                    <Route path="/player/:id" element={<Player></Player>}></Route>
                    <Route path="/news" element={<News></News>}></Route>
                    <Route path="/club/:id" element={<Club></Club>}></Route>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
