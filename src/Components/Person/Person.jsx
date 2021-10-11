import PropsTypes from 'prop-types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PEOPLE } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleId, getPeopleImg, getPeoplePageId } from '@services/getPeopleData'
import style from './Person.module.scss'
import { useLocation } from 'react-router'
import { PersonNavigation } from '../PersonNavigation/PersonNavigation'

const Person = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)
  const [next, setNext] = useState(null)
  const [previous, setPrevious] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const location = useLocation()
  const page = location.search.replace('?page=', '')

  const getResource = async (url) => {
    await axios.get(url).then(({ data }) => {
        const peopleList = data.results.map(({ url, name }) => {
          const id = getPeopleId(url)
          const img = getPeopleImg(id)

          return{
              id, img, name
          }
        })

      setPeople(peopleList)
      setPrevious(data.previous)
      setNext(data.next)
      setCurrentPage(getPeoplePageId(url))
      setErrorApi(false)
    }).catch((error) => {
      setErrorApi(true)
    })
  }

  useEffect(() => {
    getResource(API_PEOPLE+page)
  }, [])

  return (
    <>
      <PersonNavigation next={next} prev={previous} currentPage={currentPage} getResource={getResource} />
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