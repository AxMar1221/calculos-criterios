
import { Route, Routes } from "react-router-dom"
import { Footer, NavBarApp } from "../Shared"
import { PagesRouter } from "../Pages/Router"


export const RouterApp = () => {
  return (
    <>
        <NavBarApp />
          <Routes>
            <Route path='/*' element={<PagesRouter />}/>
          </Routes>
        <Footer />
    </>
  )
}
