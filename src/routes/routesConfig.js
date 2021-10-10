import { Home } from "@Components/Home/Home"
import Person from "@Components/Person/Person"
import { NotFoundPage } from "@Components/NotFoundPage/NotFoundPage"

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
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]