import PropsTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { API_PEOPLE } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { useLocation } from 'react-router'
import { PersonNavigation } from '../PersonNavigation/PersonNavigation'
import { getApiResource } from '../../network/api'
import { getPeopleId, getPeopleImg, getPeoplePageId } from '@services/getPeopleData'
import { PersonList } from './PersonList/PersonList'
import { Loader } from '../../assets/Loader/Loader'

const Person = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)
  const [next, setNext] = useState(null)
  const [previous, setPrevious] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const location = useLocation()
  const page = location.search.replace('?page=', '')

  const getResource = async (url) => {
    const res = getApiResource(url)

    res.then((response) => {
        const peopleList = response.results.map(({ name, url }) => {
          const id = getPeopleId(url)
          const img = getPeopleImg(id)

          return {
            id,
            img,
            name
          }
        })

        setPeople(peopleList)
        setPrevious(response.previous)
        setNext(response.next)
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
      {people 
        ? <PersonList people={people} />
        : <Loader />
      }
    </>
  )
}

Person.propTypes = {
  setErrorApi: PropsTypes.func
}

export default withErrorApi(Person)