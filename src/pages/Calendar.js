import React, {useMemo, useState} from 'react';
import classes from '../css/index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import moment from "moment/moment";
import {CheckRecord} from "../hooks/checkRecord";
import CalendarHeader from "../components/link/calendarHeader";
import CalendarTime from "../components/link/calendarTime";
import CalendarFooter from "../components/link/calendarFooter";
import styled from "styled-components";

const CalendarInterview = styled.section`
      position: relative;
      margin: 0 auto;
      width: 740px;
      @media only screen and (max-width: 740px) {
        width: 100%;
      }
`;
const Container = styled.div`
      box-sizing: border-box;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
`;
const Interview = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 15px;
      background: #FFF;
`;
const InterviewH2 = styled.h2`
      font-weight: 400;
      font-size: 20px;
      @media only screen and (max-width: 740px) {
        font-size: 16px;
      }
`;
const InterviewButton = styled.button`
      background: none;
      border: none;
      color: crimson;
      font-size: 28px;
      cursor: pointer;
      transition: .2s;
      @media only screen and (max-width: 740px) {
        font-size: 20px;
      }
`;

const Calendar = () => {
    const [allowRendering, setAllowRendering] = useState(true) //
    const [recordData, setRecordData] = useState([]) // Массив с объектами
    const [dateDay, setDateDay] = useState(new Date()) // Дата
    const [countMonth, setCountMonth] = useState(new Date().getMonth()) // Месяц

    const [deletionAllowed, setDeletionAllowed] = useState(false) // Кнопка удаления
    const [ceilColor, setCeilColor] = useState(null) // event для выбора ячейки (стили)


    // Перейти вперед/назад
    const TodayDateGo = (where) => {
        if (ceilColor) {
            ceilColor.target.style = 'background: #cee0fe'
        }
        setDeletionAllowed(false)
        setCeilColor(null)
        if (where === '+') {
            setDateDay(new Date(dateDay.getFullYear(), dateDay.getMonth(), dateDay.getDate() + 7))
        } else {
            setDateDay(new Date(dateDay.getFullYear(), dateDay.getMonth(), dateDay.getDate() - 7))
        }
    }



    useMemo(() => {
        setDateDay(new Date(new Date().getFullYear(), countMonth, countMonth === new Date().getMonth() ? new Date().getDate() : 1))
    }, [countMonth])

    // Добавление даты
    const AddData = (key) => {
        let years = prompt('Введите дату YYYY-MM-DD HH:mm:ss', key ? key : '');
        if (!moment(years, "YYYY-MM-DD HH:mm:ss", true).isValid() || CheckRecord(recordData, years)) {
            alert('The record is already available');
            return false
        }
        setRecordData([...recordData, {date: years, number: new Date().getTime()}])
    }
    // Проверка даты
    const ThereIsData = (bool, key, e) => {
        if (!bool) {
            setDeletionAllowed(false)
            if (ceilColor) {
                ceilColor.target.style = 'background: #cee0fe'
            }
            AddData(key)
            return false
        }
        if (ceilColor) {
            ceilColor.target.style = 'background: #cee0fe'
        }
        setCeilColor(e)
        e.target.style = 'background: #9cbffe'
        setDeletionAllowed(key)
    }
    // Удаление даты
    const DeleteIsData = () => {
        if (!deletionAllowed) {
            alert('Error!')
            return false
        }
        setRecordData(recordData.filter(m => m.date !== deletionAllowed))
        setDeletionAllowed(false)
        setCeilColor(null)
    }

    if (!allowRendering) return <div>Loading...</div>

    return (
        <CalendarInterview>
            <Container>

                <Interview>
                    <InterviewH2>
                        Interview Calendar
                    </InterviewH2>
                    <InterviewButton onClick={() => AddData()}>
                        <FontAwesomeIcon icon={faPlus} />
                    </InterviewButton>
                </Interview>

                <CalendarHeader dateDay={dateDay} TodayDateGo={TodayDateGo} />
                <CalendarTime dateDay={dateDay} ThereIsData={ThereIsData} recordData={recordData} />
                <CalendarFooter setCountMonth={setCountMonth} setDateDay={setDateDay} deletionAllowed={deletionAllowed} DeleteIsData={DeleteIsData} />

            </Container>
        </CalendarInterview>
    );
};

export default Calendar;