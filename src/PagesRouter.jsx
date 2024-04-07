import { Route, Routes } from "react-router-dom"
import { CalCaliApp } from "./CalCaliApp"
import { CaliPooApp } from "./CaliPooApp"

export const PagesRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/info' element={<CalCaliApp />}/>
            <Route path='/poo' element={<CaliPooApp />}/>

            <Route path='/*' element={<CalCaliApp />}/>
        </Routes>
    </>
  )
}
