import React from 'react'
import { NavLink } from 'react-router-dom'
import PropsTypes from 'prop-types'
import style from './PersonNavigation.module.scss'

export const PersonNavigation = ({ next, prev, currentPage, getResource }) => {
  
  const handleChangePrev = () => getResource(prev)
  const handleChangeNext = () => getResource(next)

    return (
    <div className={style.personNav}>
      <NavLink to={`/people/?page=${currentPage-1}`}>
        <button onClick={handleChangePrev} disabled={!prev}>Предыдущая</button>
      </NavLink>
      <NavLink to={`/people/?page=${currentPage+1}`}>
        <button onClick={handleChangeNext} disabled={!next}>Следующая</button>
      </NavLink>
    </div>
  )
}

PersonNavigation.propTypes = {
  next: PropsTypes.string,
  prev: PropsTypes.string,
  currentPage: PropsTypes.number,
  getResource: PropsTypes.func
}
