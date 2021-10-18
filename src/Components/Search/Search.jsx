import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getApiResource } from '../../network/api'
import { API_SEARCH } from '../../constants/api'
import { withErrorApi } from '../../hoc-helpers/withErrorApi'
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData'
import style from './Search.module.scss'
import { SearchResult } from './SearchResult/SearchResult'
import debounce from 'lodash.debounce'
import clearIcon from './img/deleteValue.svg'
import cn from 'classnames'

const Search = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [people, setPeople] = useState([])

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImg(id)
        return {
          id,
          name,
          img,
        }
      })
      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResponse('')
  }, [])

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  )

  const handleInputChange = (value) => {
    setInputSearchValue(value)
    debouncedGetResponse(value)
  }

  return (
    <div className={style.search__container}>
      <h1 className={style.title}>Search</h1>
      <div className={style.search}>
        <input
          className={style.search__input}
          type="text"
          value={inputSearchValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Введите имя персонажа"
        />
        <img
          onClick={() => inputSearchValue && handleInputChange('')}
          src={clearIcon}
          alt="delete value"
          className={cn(
            style.search__clear,
            !inputSearchValue && style.search__clearDisabled
          )}
        />
      </div>
      <SearchResult people={people} />
    </div>
  )
}

Search.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(Search)
