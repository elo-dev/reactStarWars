import React from 'react'
import style from './AboutPerson.module.scss'

export const AboutPerson = ({ personInfo }) => {
  return (
    <div className={style.listContainer}>
      {personInfo && (
        <ul className={style.listWrapper}>
          {personInfo.map(
            ({ title, data }) =>
              data && (
                <li key={title} className={style.item}>
                  <span className={style.title}>
                    {title}: {data}
                  </span>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  )
}
