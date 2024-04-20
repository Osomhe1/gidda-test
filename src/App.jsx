import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Animation from './utilities/Animation'
import ConfirmOtp from './components/auth/ConfirmOtp'
import Signup from './components/auth/Signup'
import OnBoard from './components/auth/OnBoard'
import RootLayout from './layouts/RootLayout'
import Transactions from './pages/transaction/Transactions'
import PageNotFound from './pages/PageNotFound'
// import Settings from './pages/setting/Settings'
// import { useEffect } from 'react'
// import { useDarkMode } from 'usehooks-ts'
import ForgetPassword from './components/auth/ForgetPassword'
import ProtectedRoute from './pages/ProtectedRoute'

import ResetPassword from './components/auth/ResetPassword'
import Payment from './pages/payment/Payment'
import ToastProvider from './providers/ToastProvider'
import FundWallet from './pages/home/FundWallet'
import FloatingChip from './pages/Float'

function App() {
  return (
    <>
      <Animation>
        <ToastProvider />
        <FloatingChip />
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/' element={<VerifyEmail />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/confirm-otp' element={<ConfirmOtp />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/onboard' element={<OnBoard />} />
          <Route path='/forgot_password' element={<ForgetPassword />} />
          <Route path='/reset_password' element={<ResetPassword />} />
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
                  {/* <Welcome /> */}
                  <Transactions />
                </ProtectedRoute>
              }
            />

            <Route
              path='fund'
              element={
                <ProtectedRoute>
                  <FundWallet />
                </ProtectedRoute>
              }
            />

            <Route
              path='payment'
              element={
                <ProtectedRoute>
                  <Payment />
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

            {/* <Route
              path='settings'
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            /> */}
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
