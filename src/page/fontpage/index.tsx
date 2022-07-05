import LoadingPage from "../../components/LoadingPage";
import { QueryDiv } from "../../components/QueryDiv";
import { FourSphereRotate } from "../../components/Spin";
import "./style/index.less"

export const FontPage = () => {
    const prefixCls = 'fontpage';
    return (

        <div className={`${prefixCls}-head`}>
            <QueryDiv ContainerStyle={{
                position: "fixed",
                top: "10vh",
                left: "6vw",
                width: "45vw",
            }} fontSize={40}></QueryDiv>
        </div>

    );
};
