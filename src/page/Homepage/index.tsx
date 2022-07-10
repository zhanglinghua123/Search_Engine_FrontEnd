import { QueryDiv } from "../../components/QueryDiv";
import "./style/index.less"
import logo from "../../static/logo_light.png"
export const FontPage = () => {
    const prefixCls = 'fontpage';
    return (

        <div className={`${prefixCls}-head`}>
            <img src={logo} style={{ width: '25vw', height: '20vh', margin: "0 auto", display: "block" }} alt="logo" />
            <QueryDiv ContainerStyle={{
                margin: "0 auto",
                marginTop: "10px",
                verticalAlign: "middle",
                width: "40vw",
            }} fontSize={60} RememberHistory></QueryDiv>
        </div>

    );
};
