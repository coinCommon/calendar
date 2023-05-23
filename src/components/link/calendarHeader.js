import React from 'react';
import classes from "../../css/index.module.scss";
import {weekday} from "../../utils/consts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import dateFormat from "dateformat";
import styled from "styled-components";

const CalendarHeaderStyle = styled.section`
      margin: 0 auto;
      width: 100%;
      box-shadow: #f1f1f1 1px 1px 1px 1px;
      background: #f5f5f5;
      display: flex;
      justify-content: flex-end;
      z-index: 999;
`;
const CalendarBox = styled.div`
      width: 90%;
      @media only screen and (max-width: 740px) {
        width: 95%;
      }
`;
const CalendarDaysGrid = styled.div`
      padding-top: 10px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
`;
const CalendarDaysGridP = styled.p`
      text-align: center;
      font-size: 8px;
      font-weight: 700;
      -webkit-user-select: none;
      user-select: none;
`;
const DaysNumGrid = styled.div`
      padding: 10px 0;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
`;
const SelectedDay = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
`;
const SelectedDayBack = styled.div`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #444;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: .2s;
      @media only screen and (max-width: 740px) {
        width: 30px;
        height: 30px;
      }
`;
const SelectedDayP = styled.p`
      text-align: center;
      font-size: 18px;
      font-weight: 300;
      -webkit-user-select: none;
      user-select: none;
      @media only screen and (max-width: 740px) {
        font-size: 14px;
      }
`;
const Month = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      -webkit-user-select: none;
      user-select: none;
`;
const MonthPrev = styled.div`
      font-size: 24px;
      color: crimson;
      margin-left: 45px;
      cursor: pointer;
      transition: .2s;
      text-align: center;
      @media only screen and (max-width: 740px) {
        font-size: 18px;
        margin-left: 30px;
      }
`;
const MonthH3 = styled.h3`
      font-size: 18px;
      font-weight: 500;
      @media only screen and (max-width: 740px) {
        font-size: 14px;
      }
`;
const MonthNext = styled.div`
      font-size: 24px;
      color: crimson;
      margin-right: 45px;
      cursor: pointer;
      transition: .2s;
      text-align: center;
      @media only screen and (max-width: 740px) {
        font-size: 18px;
        margin-right: 30px;
      }
`;


const CalendarHeader = ({dateDay, TodayDateGo}) => {
    return (
        <CalendarHeaderStyle>
            <CalendarBox>

                <CalendarDaysGrid>
                    <CalendarDaysGridP>ПН</CalendarDaysGridP>
                    <CalendarDaysGridP>ВТ</CalendarDaysGridP>
                    <CalendarDaysGridP>СР</CalendarDaysGridP>
                    <CalendarDaysGridP>ЧТ</CalendarDaysGridP>
                    <CalendarDaysGridP>ПТ</CalendarDaysGridP>
                    <CalendarDaysGridP>СБ</CalendarDaysGridP>
                    <CalendarDaysGridP>ВС</CalendarDaysGridP>
                </CalendarDaysGrid>

                <DaysNumGrid>
                    {weekday.map((d, index )=>
                        <SelectedDay
                            key={d}
                        >
                            <SelectedDayBack
                                style={dateDay.getDate() - 3 + index === new Date().getDate() && dateDay.getMonth() === new Date().getMonth() && dateDay.getFullYear() === new Date().getFullYear() ? {background: 'crimson', color: '#FFF'} : {}}
                            >
                                <SelectedDayP>{new Date(dateDay.getFullYear(), dateDay.getMonth(), dateDay.getDate() - 3 + index).getDate()}</SelectedDayP>
                            </SelectedDayBack>
                        </SelectedDay>
                    )}
                </DaysNumGrid>

                <Month>
                    <MonthPrev
                         onClick={() => TodayDateGo('-')}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </MonthPrev>

                    <MonthH3>{dateFormat(dateDay, "mmmm yyyy")}</MonthH3>

                    <MonthNext
                         onClick={() => TodayDateGo('+')}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </MonthNext>
                </Month>

            </CalendarBox>
        </CalendarHeaderStyle>
    );
};

export default CalendarHeader;