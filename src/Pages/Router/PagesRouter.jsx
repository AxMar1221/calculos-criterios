import { Route, Routes } from "react-router-dom"
import { CalCaliApp, CaliPooApp, HomePage } from "../Components"

export const PagesRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/links' element={<CalCaliApp />}/>
            {/* <Route path='/info' element={<CalCaliApp />}/> */}
            {/* <Route path='/poo' element={<CaliPooApp />}/> */}

            <Route path='/*' element={<HomePage />}/>
        </Routes>
    </>
  )
}
