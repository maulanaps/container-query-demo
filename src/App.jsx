import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './config/routes';
import Homepage from './page/home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        {routes.map((route, index) => {
          const Component = route.component;
          return <Route key={index} path={route.path} element={<Component title={route.title} />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
