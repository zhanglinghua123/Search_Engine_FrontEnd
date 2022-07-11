import './head.less';
import classNames from 'classnames';
import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../static/logo.png"
import { QueryDiv } from '../QueryDiv';
type HeadProps = {
    HeadNameArray?: ([string, string, undefined | ReactNode] | ReactNode)[];
    ImgDirection?: "left" | "right";
};
export const Head = (props: HeadProps) => {
    const { HeadNameArray, ImgDirection } = props;
    const prefixCls = 'fontpage';
    return (
        <div
            className={classNames(`${prefixCls}-headcolumn`)}
        >
            {HeadNameArray?.map((value, index) => {
                if (value && Array.isArray(value)) {
                    return (
                        <div
                            key={index}
                            className={`${prefixCls}-headcolumn-item`}
                        >
                            {value[1].length < 20 ? <Link to={value[1]}>{value[2]}{value[0]}</Link> : <a href={value[1]}>{value[2]}{value[0]}</a>}
                        </div>
                    );
                } else return value;
            }).reverse()}
            <QueryDiv ContainerStyle={{
                color: "white",
            }} fontSize={30} RememberHistory></QueryDiv>
            <img src={logo} style={{ width: "120px", height: "45px" }} alt="logo" />
        </div>
    );
};
