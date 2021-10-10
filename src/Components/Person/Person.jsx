import PropsTypes from 'prop-types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PEOPLE } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleId, getPeopleImg } from '@services/getPeopleData'
import style from './Person.module.scss'

const Person = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)

  useEffect(() => {
    const res = axios.get(API_PEOPLE)

    res.then(({ data }) => {
        const peopleList = data.results.map(({ url, name }) => {
            const id = getPeopleId(url)
            const img = getPeopleImg(id)

            return{
                id, img, name
            }
        })
      setPeople(peopleList)
      setErrorApi(false)

    }).catch((error) => {
      setErrorApi(true)
    })

  }, [setErrorApi])

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

Person.propTypes = {
  setErrorApi: PropsTypes.func
}

export default withErrorApi(Person)