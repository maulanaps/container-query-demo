import NestedContainer from '../page/nested-container'
import Movies from '../page/movies'
import WritingMode from '../page/writing-mode';

const routes = [
    { path: '/movies', title: 'Demo Movies', component: Movies },
    { path: '/nested-container', title: 'Demo Nested Container', component: NestedContainer },
    { path: '/writing-mode', title: 'Demo Writing Mode', component: WritingMode },
]

export default routes;