import React from 'react'
import style from './ErrorMessage.module.scss'

export const ErrorMessage = () => {
    return (
        <div className={style.errorMessage__text}>
            <p>Ошибка запроса. Вы перешли на сторону зла.</p>
            <p>Повторите запрос корректно</p>
        </div>
    )
}
