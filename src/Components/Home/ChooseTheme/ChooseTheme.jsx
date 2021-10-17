import React from 'react'
import PropTypes from 'prop-types'
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from '@context/ThemeProvider'
import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgFalcon from './img/falcon.jpg'
import style from './ChooseTheme.module.scss'
import cn from 'classnames'

const ChooseItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme()

  return (
    <div className={cn(style.item, classes)} onClick={() => isTheme.change(theme)}>
      <div className={style.item__header}>{text}</div>
      <img src={img} alt={text} className={style.item__img} />
    </div>
  )
}

ChooseItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
}

export const ChooseTheme = () => {
  const chooseItemProperty = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgLightSide,
      classes: style.item__light
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDarkSide,
      classes: style.item__dark
    },
    {
      theme: THEME_NEITRAL,
      text: 'Falcon',
      img: imgFalcon,
      classes: style.item__neitral
    },
  ]
  return (
    <div className={style.container}>
      {chooseItemProperty.map((element, index) => (
        <ChooseItem
          key={index}
          theme={element.theme}
          text={element.text}
          img={element.img}
          classes={element.classes}
        />
      ))}
    </div>
  )
}
