import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <div className={style.nav}>
            <ul className={style.nav__list}>
                <li><NavLink to='/' exact>Главная</NavLink></li>
                <li><NavLink to='/people' exact>Персонажи</NavLink></li>
            </ul>
        </div>
    )
}
