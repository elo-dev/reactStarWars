import React from 'react'
import loader from './img/loader.svg'
import style from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={style.container}>
            <img src={loader} alt="loader" className={style.loader} />
        </div>
    )
}