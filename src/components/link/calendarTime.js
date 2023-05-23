import React from 'react';
import classes from "../../css/index.module.scss";
import {workingHours} from "../../utils/consts";
import {ChangeTheMonth} from "../../hooks/changeTheMonth";
import {CheckRecord} from "../../hooks/checkRecord";
import styled from "styled-components";

const TimeStyle = styled.div`
      position: relative;
      display: flex;
      justify-content: flex-end;
      overflow-y: auto;
      background: #FFF;
      @media only screen and (max-width: 740px) {
        height: auto;
      }
      &::-webkit-scrollbar {
        width: 0; height: 0;
      }
      &::-webkit-scrollbar-track {
        background: none;
      }
      &::-webkit-scrollbar-thumb {
        background: none;
      }
`;
const TimeBox = styled.div`
      width: 90%;
`;
const TimeAbsolute = styled.div`
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 70px;
      text-align: center;
      pointer-events: none;
      -webkit-user-select: none;
      user-select: none;
      @media only screen and (max-width: 740px) {
        width: auto;
      }
`;
const TimeDiv = styled.div`
      font-size: 14px;
      padding: 21px 0;
      color: #999999;
      @media only screen and (max-width: 740px) {
        padding: 11px 0;
        font-size: 12px;
        margin-left: 5px;
      }
`;

const TimeGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-auto-rows: minmax(40px, auto);
`;
const TimeCell = styled.div`
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      cursor: default;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: auto;
      border: solid 2px #f1f1f1;
      border-left: none;
      border-top: none;
      @media only screen and (max-width: 740px) {
        height: 40px;
      }
`;
const TimeCellP = styled.p`
      width: 93%;
      height: 93%;
`;

const CalendarTime = ({dateDay, ThereIsData, recordData}) => {
    return (
        <TimeStyle style={{height: `${window.innerHeight - 266}px`}}>
            <TimeBox>

                <TimeAbsolute>
                    {workingHours.map((m, index) =>
                        <TimeDiv key={index}>
                            {`${m}:00`}
                        </TimeDiv>
                    )}
                </TimeAbsolute>

                <TimeGrid>
                    {ChangeTheMonth(dateDay).map((m, index) =>
                        <TimeCell
                            key={index}
                            className={classes.cell}
                        >
                            <TimeCellP
                                onClick={(e) => ThereIsData(CheckRecord(recordData, m.date), m.date, e)}
                                style={CheckRecord(recordData, m.date) ? {background: '#cee0fe'} : {}}
                            >
                            </TimeCellP>
                        </TimeCell>
                    )}
                </TimeGrid>

            </TimeBox>
        </TimeStyle>
    );
};

export default CalendarTime;