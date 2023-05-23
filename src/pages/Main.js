import React, {useMemo, useState} from 'react';
import classes from '../css/index.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import {CheckRecord} from "../hooks/checkRecord";
import CalendarHeader from "../components/link/calendarHeader";
import CalendarTime from "../components/link/calendarTime";
import CalendarFooter from "../components/link/calendarFooter";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import {CALENDAR_ROUTE} from "../utils/consts";

const Welcome = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
`;
const WelcomeDiv = styled.section`
    display: block;
    padding: 0 10%;
    overflow: hidden;
    height: 500px;
`;
const H2 = styled.h2`
      font-weight: 600;
      font-size: 22px;
      text-transform: uppercase;
      line-height: 1.2em;
      @media only screen and (max-width: 740px) {
        font-size: 14px;
      }
`;
const H4 = styled.h4`
      font-weight: 400;
      font-size: 20px;
      margin-top: 10px;
      @media only screen and (max-width: 740px) {
        font-size: 12px;
      }
`;
const H5 = styled.h5`
      font-weight: 400;
      font-size: 14px;
      margin-top: 20px;
      @media only screen and (max-width: 740px) {
        font-size: 12px;
      }
`;
const WelcomeContainerButton = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
`;
const WelcomeButton = styled.button`
      width: 300px;
      font-weight: 400;
      font-size: 20px;
      margin-top: 30px;
      @media only screen and (max-width: 740px) {
        width: 100%;
      }
`;

const Main = () => {
    const navigate = useNavigate()
    return (
        <Welcome>
            <WelcomeDiv>
                <H2>
                    In this calendar, you can add and delete data about the scheduled interview! You can do this by clicking on the + in the upper right corner or by clicking on the desired cell, while you do not need to manually enter data! Try it
                </H2>
                <H4>
                    You can do this by clicking on the + in the upper right corner or by clicking on the desired cell, while you do not need to manually enter data! Try it
                </H4>
                <H5>
                    В данном календаре вы можете добавлять и удалять данные о назначенном собеседовании! Вы можете сделать это нажав на + в верхнем правом углу или кликнув на нужную ячейку, при этом вам не нужно вручную вводить данные! Поробуйте
                </H5>
                <WelcomeContainerButton>
                    <WelcomeButton onClick={() => navigate(CALENDAR_ROUTE)}>
                        Go Over
                    </WelcomeButton>
                </WelcomeContainerButton>
            </WelcomeDiv>
        </Welcome>
    );
};

export default Main;