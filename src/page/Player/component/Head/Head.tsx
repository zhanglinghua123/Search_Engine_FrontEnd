import './head.less';
import classNames from 'classnames';
import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import football from "../../../../static/svg/Football2.svg"
import Name from '../../../../static/picture/name5.png';
import { QueryDiv } from '../../../../components/QueryDiv';
type HeadProps = {
    HeadNameArray?: ([string, string] | ReactNode)[];
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
                            {value[1].length < 20 ? <Link to={value[1]}>{value[0]}</Link> : <a href={value[1]}>{value[0]}</a>}
                        </div>
                    );
                } else return value;
            }).reverse()}
            {/* <div
                style={{
                    paddingLeft: "30px",
                    flex: 1,
                    fontSize: "22px",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    alignItems: "center",
                }}
            >
                <img style={{
                    backgroundColor: "white",
                    width: "1em",
                    height: "1em",
                    verticalAlign: "-0.125em",
                    borderRadius: "100%",
                    marginRight: "4px",
                }} src={football} alt="球"></img>
                <span>球天下</span>
            </div> */}
            <QueryDiv ContainerStyle={{
                color: "black",
                position: "absolute",
                left: "calc(50vw - 600px)",
            }} fontSize={30}></QueryDiv>
        </div>
    );
};
