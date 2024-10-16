import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/login/loginPage"
export default function App() {
  return (
    <main className="flex justify-center items-center font-poppins bg-light dark:bg-dark transition-colors duration-150 bg-main">
      <section className="max-w-md flex flex-col min-h-screen">
        <div className="w-full">
          <Routes>
            <Route
              path="/"
              element={<LoginPage />}
            />
            <Route
              path="/*"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />
          </Routes>
        </div>
      </section>
    </main>
  )
}
