import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bookmarks from './img/bookmarks.svg'
import style from './FavoriteIcon.module.scss'
import { useSelector } from 'react-redux'

export const FavoriteIcon = () => {

    const [count, setCount] = useState(0)

    const store = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(store).length
        
        setCount(length)
    }, [store])

    return (
        <div className={style.container}>
            <Link to='/favorites'>
                <span className={style.counter}>{count}</span>
                <img src={bookmarks} alt="bookmarks" className={style.icon} />
            </Link>
        </div>
    )
}
