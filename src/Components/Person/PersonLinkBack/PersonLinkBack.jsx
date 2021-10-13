import React from 'react'
import { useHistory } from 'react-router'
import iconBack from './img/goBack.svg'
import style from './PersonLinkBack.module.scss'

export const PersonLinkBack = () => {

    const history = useHistory()

    const handleGoBack = e => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <a href="#" onClick={handleGoBack} className={style.link}>
            <img src={iconBack} alt="Go back" className={style.link__icon} />
            <span>К списку героев</span> 
        </a>
    )
}
