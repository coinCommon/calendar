import {CALENDAR_ROUTE, MAIN_ROUTE} from "./utils/consts";
import Main from "./pages/Main";
import Calendar from "./pages/Calendar";

export const publicRoutes =
    [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CALENDAR_ROUTE,
        Component: Calendar
    }
    ]