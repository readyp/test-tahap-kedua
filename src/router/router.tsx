import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { App } from '../App'
import { MainPage } from '../pages/MainPage'
import { LoginPage } from '../pages/LoginPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Route>
  )
)

export { router }
