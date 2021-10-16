import React from 'react'
import { NavLink } from 'react-router-dom'
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon'
import style from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <div className={style.nav}>
            <ul className={style.nav__list}>
                <li><NavLink to='/' exact>Главная</NavLink></li>
                <li><NavLink to="/people/?page=1">Персонажи</NavLink></li>
                <li><NavLink to="/favorites">Избранные</NavLink></li>
                <FavoriteIcon />
            </ul>
        </div>
    )
}
