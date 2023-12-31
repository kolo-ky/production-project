import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/route/routeConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route key={path} path={path} element={element}/>
                    ))}
                </Routes>
            </section>
        </Suspense>
    );
};
