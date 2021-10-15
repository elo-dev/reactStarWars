import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './PersonFilms.module.scss'
import { changeHTTP, makeConcurrentRequest } from '../../../network/api'

const PersonFilms = ({ films }) => {

    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        (async () => {
            const filmsHTTPS = films.map(url => changeHTTP(url))
            const response = await makeConcurrentRequest(filmsHTTPS)
            setFilmsName(response)
        })()    
    }, [])

    return (
        <div className={style.container}>
            <ul className={style.list__wrapper}>
                {filmsName
                .sort((a,b) => a.episode_id - b.episode_id)
                .map(({ title, episode_id }) => (
                <li key={episode_id} className={style.list__item}>
                    <span className={style.item__episode}>Episode: {episode_id}</span>
                    <span className={style.item__col}>:</span>
                    <span className={style.item__title}>{title}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}

PersonFilms.propTypes = {
    films: PropTypes.array
}

export default PersonFilms