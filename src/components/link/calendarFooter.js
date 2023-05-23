import React from 'react';
import classes from "../../css/index.module.scss";
import {TodayDate} from "../../hooks/todayDate";
import styled from "styled-components";

const CalendarFooterStyle = styled.footer`
      margin: 0 auto;
      padding: 20px 40px;
      box-shadow: #f1f1f1 1px 1px 1px 1px;
      background: #f5f5f5;
      display: flex;
      justify-content: space-between;
      align-items: center;
`;
const CalendarP = styled.footer`
      color: crimson;
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;
      transition: .2s;
      @media only screen and (max-width: 740px) {
        font-size: 18px;
      }
`;

const CalendarFooter = ({setCountMonth, setDateDay, deletionAllowed, DeleteIsData}) => {
    return (
        <CalendarFooterStyle>
            <CalendarP onClick={() => TodayDate(setCountMonth, setDateDay)}>
                Today
            </CalendarP>
            {deletionAllowed ?
                <CalendarP onClick={() => DeleteIsData()}>
                    Delete
                </CalendarP>
                :
                ''
            }
        </CalendarFooterStyle>
    );
};

export default CalendarFooter;