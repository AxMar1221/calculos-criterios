
import { Route, Routes } from "react-router-dom"
import { Footer } from "./FooterApp"
import { NavBarApp } from "./NavBarApp"
import { PagesRouter } from "./PagesRouter"


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
