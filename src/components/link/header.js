import React from 'react';
import classes from '../../css/index.module.scss';
import {useNavigate} from "react-router-dom";
import {CALENDAR_ROUTE, MAIN_ROUTE} from "../../utils/consts";
import styled from "styled-components";

const HeaderStyle = styled.header`
      position: fixed;
      top: 0;
      display: block;
      width: auto;
      color: #333;
      padding: 10px 0;
      z-index: 888;
      @media only screen and (max-width: 740px) {
        display: none;
      }
`;
const HeaderStyleUl = styled.ul`
      display: flex;
      justify-content: flex-start;
      align-items: center;
`;
const HeaderStyleLi = styled.li`
      padding: 0 15px;
      list-style: none;
      cursor: pointer;
      transition: .2s;
`;

const Header = () => {


    const navigate = useNavigate()

    return (
        <HeaderStyle>
            <nav>
                <HeaderStyleUl>
                    <HeaderStyleLi
                        style={window.location.pathname === MAIN_ROUTE ? {fontWeight: '700'} : {}}
                        onClick={() => navigate(MAIN_ROUTE)}
                    >
                        Main
                    </HeaderStyleLi>
                    <li
                        style={window.location.pathname === CALENDAR_ROUTE ? {fontWeight: '700'} : {}}
                        onClick={() => navigate(CALENDAR_ROUTE)}
                    >
                        Calendar
                    </li>
                </HeaderStyleUl>
            </nav>
        </HeaderStyle>
    );
};

export default Header;