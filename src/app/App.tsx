import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';


export const App = () => {
    const { theme } = useTheme();

    return (
        <section className={classNames('app', {}, [theme])}>
            <NavBar/>

            <section className="content-page">
                <SideBar/>
                <AppRouter/>
            </section>
        </section>
    );
};
