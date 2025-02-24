import { Route, Routes } from "react-router-dom"
import { HomePage, RandomLink,} from "../Components"

export const PagesRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/link' element={<RandomLink />}/>
            {/* <Route path='/info' element={<CalCaliApp />}/> */}
            {/* <Route path='/poo' element={<CaliPooApp />}/> */}

            <Route path='/*' element={<HomePage />}/>
        </Routes>
    </>
  )
}
