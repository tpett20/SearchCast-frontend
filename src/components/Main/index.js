import { Routes, Route } from "react-router"
import SearchesIndex from "../../pages/Searches/Index"
import SearchesShow from "../../pages/Searches/Show"

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<SearchesIndex/>} />
                <Route path='/searches/:id' element={<SearchesShow/>} />
            </Routes>
        </main>
    )
}