import React, { useEffect, useState, Suspense } from 'react'
import PropsTypes from 'prop-types'
import { API_PERSON_INFO } from '@constants/api'
import { getApiResource } from '../../../network/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleImg } from '@services/getPeopleData'
import style from './PersonInfo.module.scss'
import { PersonLinkBack } from '../PersonLinkBack/PersonLinkBack'
import { Loader } from '../../../assets/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import {
  removePersonFromFavorite,
  setPersonToFavorite,
} from '../../../store/actions'
import favorite from './img/favorite.svg'
import favoriteFill from './img/favoriteFill.svg'
import { AboutPerson } from '../AboutPerson/AboutPerson'

const PersonFilms = React.lazy(() => import('../PersonFilms/PersonFilms'))

const PersonInfo = ({ match, setErrorApi }) => {
  const [personId, setPersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const dispatch = useDispatch()

  const store = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    (async () => {
      const id = match.params.id

      setPersonId(id)

      store[id] ? setPersonFavorite(true) : setPersonFavorite(false)

      const res = await getApiResource(`${API_PERSON_INFO}/${id}/`)

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ])

        setPersonPhoto(getPeopleImg(id))
        setPersonName(res.name)

        res.films.length && setPersonFilms(res.films)

        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [])

  const dispatchFavoritePerson = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      )
      setPersonFavorite(true)
    }
  }

  return (
    <>
      <PersonLinkBack />
      <div className={style.person}>
        <span className={style.person__name}>{personName}</span>
        <div className={style.person__container}>
          <div className={style.person__photoWrapper}>
            <img
              src={personPhoto}
              alt={personName}
              className={style.person__photo}
            />
            <img
              src={personFavorite ? favorite : favoriteFill}
              alt="favorite"
              onClick={dispatchFavoritePerson}
              className={style.person__favorite}
            />
          </div>
          <AboutPerson personInfo={personInfo} />
          {personFilms && (
            <Suspense fallback={<Loader />}>
              <PersonFilms films={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  )
}

PersonInfo.propType = {
  match: PropsTypes.object,
  setErrorApi: PropsTypes.func,
}

export default withErrorApi(PersonInfo)
