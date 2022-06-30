import './index.less'

export const NewsItem = () =>{
    return (
        <div className={'news-cont'}>
            <div className={'news-title'}>
                一波三折!曝<span style={{color: 'cornflowerblue'}}>C罗</span>正式加盟罗马,双方已经达成协议,7月7日官宣
            </div>
            <div className={'news-short'}>
                <span style={{color: '#888585'}}>12小时前 </span>而在众多传言中，关于C罗即将加盟罗马的消息，引发球迷广泛讨论。根据最新爆料，按照罗马名宿迪利维奥的说法，
                C罗已经和罗马达成协议，预计双方会在7月7日正式对外官宣。不过，迪利维奥并...
            </div>
            <div className={'news-title'}>
                基恩:17岁的<span style={{color: 'cornflowerblue'}}>C罗</span>加盟曼联很勇敢,他是一个招人喜欢的球员
            </div>
            <div className={'news-short'}>
                <span style={{color: '#888585'}}>4小时前 </span>近日，曼联传奇队长罗伊-基恩在自己的自传中回忆了当年他与C罗共事的经历，也谈到了当年他对C罗的看法。
                基恩表示：“C罗一来曼联我就喜欢上了这个小伙子，他很有风度，态度也很端正。让我...
            </div>
        </div>
    )
}