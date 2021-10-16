import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './PersonList.module.scss'

export const PersonList = ({ people }) => {
  return (
    <ul className={style.list__container}>
      {people.map(({ id, name, img }) => (
        <li key={id} className={style.list__item}>
          <NavLink to={`/people/${id}`}>
            <img src={img} alt={name} className={style.person__photo} />
            <p>{name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
