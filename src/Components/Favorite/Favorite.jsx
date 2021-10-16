import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PersonList } from '../Person/PersonList/PersonList'
import bookmarkEmpty from './img/bookmarkEmpty.svg'
import style from './Favorite.module.scss'

export const Favorite = () => {
    const [person, setPerson] = useState([])

    const store = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(store)

        if(arr.length){
            const res = arr.map(item => {
                return{
                    id: item[0],
                    ...item[1]
                }
            })
            setPerson(res)
        }

    }, [])

    return (
        <>
        <h1 className={style.title}>Favorites</h1>
        <div className={style.container}>
            {person.length
            ? <PersonList people={person} />
            : <img src={bookmarkEmpty} alt="bookmark empty" className={style.bookmarkEmpty} />
            }
        </div>
        </>
    )
}
