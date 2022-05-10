import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './style.module.css';

const Layout = () => {

    return (
        <>
            <div className={style.header}>
                <h1>
                    nigaForm for React
                </h1>
            </div>
            <div className={style.menu}>
                <div>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ""} to="/">Главная</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ""} to="/documentation">Документация</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ""} to="/download">Загрузка</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ""} to="/example">Пример</NavLink>
                </div>
            </div>
            <div className={style.content}>
                <Outlet/>
            </div>
        </>
        )
}
export default Layout;
