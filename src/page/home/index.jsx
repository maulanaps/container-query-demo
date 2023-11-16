import { Link } from "react-router-dom"
import routes from "../../config/routes"

const Homepage = () => {
  return (
    <div style={{ paddingLeft: '16px' }}>
      <h1>Pages</h1>
      {routes.map((route, index) => {
        return (
          <div
            style={{ fontSize: '28px', marginTop: '16px', color: 'green' }}
          >
            <Link
              key={index}
              to={route.path}
              style={{ textDecoration: 'none', color: 'green' }}
            >
              {index + 1}. {route.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Homepage