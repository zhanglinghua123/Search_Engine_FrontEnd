import { ReactNode } from "react"
import { Spin } from "../Spin";
import "./index.less"
const LoadingPage = (props: Partial<{
    children: ReactNode,
    LoadingButton: React.ReactElement<HTMLElement>;
    Loading: boolean,
    tip: string,
    tipClassName: string
    FontColor: string,
}>) => {
    const { Loading = false, tip, LoadingButton, children, ...rest } = props
    return <div style={{
        height: "100vh"
    }}>
        {Loading ? <Spin tip={tip} spinning={Loading} fontBaseSize="16px" indicator={LoadingButton} {...rest}></Spin> : children}
    </div>
}
export default LoadingPage