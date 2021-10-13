import { Home } from "@Components/Home/Home"
import Person from "@Components/Person/Person"
import { NotFoundPage } from "@Components/NotFoundPage/NotFoundPage"
import PersonInfo from "@Components/Person/PersonInfo/PersonInfo"

export const routesConfig = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/people',
        exact: true,
        component: Person
    },
    {
        path: '/people/:id',
        exact: true,
        component: PersonInfo
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]