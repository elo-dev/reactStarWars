import {
  GUIDE_IMG_EXTENSION,
  HTTP,
  HTTPS,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  SWAPI_PARAMS_PAGE,
  URL_IMG_PERSON
} from '@constants/api'

const checkProtocol = (url) => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS
  }

  return HTTP
}

export const getPeoplePageId = url => {
  const pos = url.lastIndexOf(SWAPI_PARAMS_PAGE)
  const id = url.slice(pos+SWAPI_PARAMS_PAGE.length)
  return Number(id)
}

const getId = (url, category) => {
  const protocol = checkProtocol(url)

  const id = url
    .replace(protocol + SWAPI_ROOT + category, '')
    .replace(/\//g, '')
  return id
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImg = (id) =>
  `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`
