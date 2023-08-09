import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

enum ButtonType {
    DEFAULT = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    btnType?: ButtonType;
}

export const Button: FC<IButtonProps> = (props) => {
    const { className, btnType = ButtonType.DEFAULT, children, ...otherProps } = props;

    return (
        <button className={classNames(cls.Button, {}, [cls[btnType], className])} {...otherProps}>
            {children}
        </button>
    );
};