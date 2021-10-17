import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon'
import style from './Navigation.module.scss'
import imgDroid from './img/droid.svg'
import imgLightsaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'
import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
} from '@context/ThemeProvider'

export const Navigation = () => {
  const [icon, setIcon] = useState(imgSpaceStation)

  const isTheme = useTheme()

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber)
        break
      case THEME_DARK:
        setIcon(imgSpaceStation)
        break
      case THEME_NEITRAL:
        setIcon(imgDroid)
        break
      default:
        setIcon(imgSpaceStation)
    }
  }, [isTheme])

  return (
    <div className={style.nav}>
      <ul className={style.nav__list}>
      <img src={icon} alt="Star Wars Theme" className={style.logo} />
        <li>
          <NavLink to="/" exact>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">Персонажи</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Избранные</NavLink>
        </li>
        <FavoriteIcon />
      </ul>
    </div>
  )
}
