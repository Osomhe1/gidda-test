import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Animation from './utilities/Animation'
import RootLayout from './layouts/RootLayout'
import Transactions from './pages/transaction/Transactions'
import PageNotFound from './pages/PageNotFound'
import ProtectedRoute from './pages/ProtectedRoute'
import ToastProvider from './providers/ToastProvider'
import FloatingChip from './pages/Float'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <>
      <Animation>
        <ToastProvider />
        <FloatingChip />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='' element={<Navigate to='/dashboard' />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <RootLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path=''
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />

            <Route
              path='transactions'
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />

            <Route
              path='*'
              element={<div className='min-h-screen'>Page Coming Soon</div>}
            />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* <Login /> */}
      </Animation>
    </>
  )
}

export default App
