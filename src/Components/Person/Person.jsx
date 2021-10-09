import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData'
import style from './Person.module.scss'

export const Person = () => {
  const [people, setPeople] = useState(null)

  useEffect(() => {
    axios.get(API_PEOPLE).then(({ data }) => {
        const peopleList = data.results.map(({ url, name }) => {
            const id = getPeopleId(url)
            const img = getPeopleImg(id)

            return{
                id, img, name
            }
        })
      setPeople(peopleList)
    })
  }, [])

  return (
    <>
      {people && (
        <ul className={style.list__container}>
          {people.map(({ id, name, img }) => (
            <li key={id} className={style.list__item}>
              <a href="#">
                <img src={img} alt={name} className={style.person__photo} />
                <p>{name}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
