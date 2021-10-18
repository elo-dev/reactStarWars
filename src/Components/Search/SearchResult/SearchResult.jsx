import React from 'react'
import PropTypes from 'prop-types'
import style from './SearchResult.module.scss'
import { Link } from 'react-router-dom'

export const SearchResult = ({ people }) => (
  <>
    {people.length ? (
      <ul className={style.list__container}>
        {people.map(({ id, name, img }) => (
          <li key={id} className={style.list__item}>
            <Link to={`/people/${id}`}>
              <img src={img} alt={name} className={style.person__photo} />
              <p className={style.person__name}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <h2 className={style.person__noResult}>Нет результатов</h2>
    )}
  </>
)

SearchResult.propTypes = {
  people: PropTypes.array,
}
