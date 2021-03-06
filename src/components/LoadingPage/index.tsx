import { ReactNode } from "react"
import { Spin } from "../Spin";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import "./index.less"
import { useNavigate } from "react-router-dom";
const LoadingPage = (props: Partial<{
    children: ReactNode,
    // 加载界面的LoadingButton
    LoadingButton: React.ReactElement<HTMLElement>;
    // 是否显示Loading
    Loading: boolean,
    // 提示文字
    tip: string,
    // 提示框的类
    tipClassName: string
    // 字体颜色
    FontColor: string,
    // 是否显示差错提示框
    showErrorMessage: boolean
}>) => {
    const { Loading = false, tip, LoadingButton, children, showErrorMessage = false, ...rest } = props
    const navigate = useNavigate()
    return <div style={{
        height: "100vh"
    }}>
        {Loading ? <Spin tip={tip} spinning={Loading} fontBaseSize="16px" indicator={LoadingButton} {...rest}></Spin> : children}
        <Dialog
            open={showErrorMessage}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"警告"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    当前球员界面未获取到对应的数据,请联系管理员进行处理,或者返回首页继续操作
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { navigate("/") }}>首页</Button>
                <Button onClick={() => { navigate("/result") }}>搜索</Button>
            </DialogActions>
        </Dialog>
    </div>
}
export default LoadingPage