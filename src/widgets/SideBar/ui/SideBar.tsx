import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';


interface ISideBarProps {
    className?: string
}

export const SideBar: FC<ISideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const clickHandler = () => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <section className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <div>
                <button onClick={clickHandler}>toggle</button>
            </div>


            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </section>
    );
};