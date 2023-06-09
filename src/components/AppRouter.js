import {Navigate, Route, Routes} from 'react-router-dom';
import {publicRoutes} from "../rotes";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    )
};
export default AppRouter;