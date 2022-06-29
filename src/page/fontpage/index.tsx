import "./style/index.less"
import football from  "../../svg/Football2.svg"
export const FontPage = () => {
    const prefixCls = 'fontpage';
    return (
        <div className={`${prefixCls}-head`}>
            <div className={`${prefixCls}-query`}>有<img style={{
                backgroundColor:"white",
                borderRadius:"100%",
            }} src={football}></img>必答</div>
        </div>
    );
};
