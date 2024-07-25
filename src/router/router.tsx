import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { App } from '../App'
import { MainPage } from '../pages/MainPage'
import { LoginPage } from '../pages/LoginPage'
import { PrivateRoute } from '../components/PrivateRoute'
import { NotFoundPage } from '../pages/NotFoundPage'
import { MenuPage } from '../pages/MenuPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Private Route */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/" index element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />

      {/* Not Found Path */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

export { router }
