import React from 'react'
import { ChooseTheme } from './ChooseTheme/ChooseTheme'
import style from './Home.module.scss'

export const Home = () => {
    return (
        <div>
            <h1 className={style.title}>Главная</h1>
            <ChooseTheme />
        </div>
    )
}
