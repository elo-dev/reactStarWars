import React from 'react'
import { useLocation } from 'react-router'
import img from './img/notFound.png'
import style from './NotFoundPage.module.scss'

export const NotFoundPage = () => {

    const location = useLocation()

    return (
        <div className={style.notFound}>
            <img src={img} alt="404" className={style.notFound__img} />
            <p className={style.notFound__message}>По адресу {location.pathname} ничего не найдено</p>
        </div>
    )
}
