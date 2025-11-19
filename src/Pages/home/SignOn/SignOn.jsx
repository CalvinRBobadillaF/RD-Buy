import React, { useContext, useEffect, useState } from 'react'
import { WaggonContext } from '../../../Context/Context'

function SignOn() {
  const context = useContext(WaggonContext)
  const { theme } = useContext(WaggonContext)

  const [userName, setUserName] = useState('')
  const [userBirth, setUserBirth] = useState('')
  const [userCountry, setUserCountry] = useState('')
  const [userPassword, setUserPassword] = useState('')
  console.log(context.userData)
  
  useEffect(() => {
    const storedUser = localStorage.getItem('userData')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      context.setUserData(parsedUser)
      
    }
  }, [])

 
  const handleLogin = (e) => {
    e.preventDefault()
    const newUser = {
      name: userName,
      birth: userBirth,
      country: userCountry,
      password: userPassword,
    }

    // Guardamos en contexto y localStorage
    context.setUserData(newUser)
    context.logUser()
    localStorage.setItem('userData', JSON.stringify(newUser))
  }

  return (
    <div className={`${theme === 'Dark' ? 'flex items-center justify-center mt-[0vh] bg-neutral-700 text-white h-[100vh] mt-20' : 'flex items-center justify-center mt-20 text-black'}`}>
      <div className="w-full max-w-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          {localStorage.getItem('userData') ? 'Welcome Back' : 'log in'}
        </h1>

        <form className="space-y-6">
          {/* Campos */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email or user:</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="tu@email.com"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your password:</label>
            <input
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              placeholder="Tu contraseña"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your date of birth:</label>
            <input
              onChange={(e) => setUserBirth(e.target.value)}
              type="date"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your country:</label>
            <input
              onChange={(e) => setUserCountry(e.target.value)}
              type="text"
              placeholder="Country"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botones */}
          <div className="space-y-4">
            <button
              onClick={handleLogin}
              type="button"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
            >
              Register
            </button>

            
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignOn


