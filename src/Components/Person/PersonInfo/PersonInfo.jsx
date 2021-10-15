import React, { useEffect, useState, Suspense } from 'react'
import PropsTypes from 'prop-types'
import { API_PERSON_INFO } from '@constants/api'
import { getApiResource } from '../../../network/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleImg } from '@services/getPeopleData'
import style from './PersonInfo.module.scss'
import { PersonLinkBack } from '../PersonLinkBack/PersonLinkBack'
import { Loader } from '../../../assets/Loader/Loader'

const PersonFilms = React.lazy(() => import('../PersonFilms/PersonFilms'))

const PersonInfo = ({ match, setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)

  useEffect(() => {
    (async () => {
      const id = match.params.id

      const res = await getApiResource(`${API_PERSON_INFO}/${id}/`)

        if(res){
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
        }else{
            setErrorApi(true)
        }
    })()
  }, [])

  return (
    <>
        <PersonLinkBack />
        <div className={style.person}>
            <span className={style.person__name}>{personName}</span>
            <div className={style.person__container}>
                <div className={style.person__photoWrapper}>
                    <img src={personPhoto} alt={personName} className={style.person__photo} />
                </div>
                <div className={style.person__listContainer}>
                    {personInfo && 
                    <ul className={style.person__listWrapper}>
                        {personInfo.map(({ title, data }) => (
                            data && 
                            <li key={title} className={style.item}>
                                <span className={style.title}>{title}: {data}</span>
                            </li>
                        ))}
                    </ul>
                    }
                </div>
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
    setErrorApi: PropsTypes.func
}

export default withErrorApi(PersonInfo)