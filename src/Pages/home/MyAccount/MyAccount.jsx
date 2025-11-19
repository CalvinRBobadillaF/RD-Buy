import { useContext } from "react"
import { WaggonContext } from "../../../Context/Context"

function MyAccount() {
  const storedUser = localStorage.getItem('userData')
  const parsedUser = JSON.parse(storedUser)
  const { theme, toggleTheme } = useContext(WaggonContext)
  console.log(theme)

  return (
    <div
      className={`
        flex items-center justify-center min-h-screen
        transition-colors duration-700 ease-in-out
        
      `}
    >
      <div
        className={`
          w-full max-w-md p-8 m-10 rounded-2xl border
          transition-colors duration-700 ease-in-out shadow-xl 
          ${theme === 'Dark'
            ? 'bg-gray-800 border-gray-700 text-gray-100'
            : 'bg-white border-gray-200 text-gray-800 '
          }
        `}
      >
        {/* Imagen o icono de perfil */}
        <div className="flex flex-col items-center mb-6">
          <div
            className={`
              w-24 h-24 rounded-full flex items-center justify-center shadow-inner mb-4
              transition-colors duration-700 ease-in-out
              ${theme === 'Dark' ? 'bg-gray-600' : 'bg-amber-100'}
            `}
          >
            {/* Aquí luego puedes poner la imagen del usuario */}
          </div>
          <h1
            className={`
              text-2xl font-semibold mb-1
              transition-colors duration-700 ease-in-out
              ${theme === 'Dark' ? 'text-gray-50' : 'text-gray-800'}
            `}
          >
            My Account
          </h1>
          <p
            className={`
              text-sm transition-colors duration-700 ease-in-out
              ${theme === 'Dark' ? 'text-gray-400' : 'text-gray-500'}
            `}
          >
            Manage your profile information
          </p>
        </div>

        {/* Datos del usuario */}
        <div className="space-y-4">
          {[
            { label: "Full Name", value: parsedUser.name || '--' },
            { label: "Date of Birth", value: parsedUser.birth || '--'},
            { label: "Country", value: parsedUser.country || '---'},
          ].map((item, index) => (
            <div
              key={index}
              className={`
                border rounded-xl p-4 hover:shadow-md
                transition-all duration-500 ease-in-out
                ${theme === 'Dark'
                  ? 'border-gray-700 bg-gray-700/50 hover:bg-gray-600/70'
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }
              `}
            >
              <p
                className={`
                  text-sm transition-colors duration-700 ease-in-out
                  ${theme === 'Dark' ? 'text-gray-400' : 'text-gray-500'}
                `}
              >
                {item.label}
              </p>
              <p
                className={`
                  text-lg font-medium transition-colors duration-700 ease-in-out
                  ${theme === 'Dark' ? 'text-gray-100' : 'text-gray-800'}
                `}
              >
                {item.value || "—"}
              </p>
            </div>
          ))}
        </div>

        {/* Botón de editar o toggle */}
        <div className="mt-8 text-center">
          <button
            className={`
              font-medium py-4 px-12 rounded-xl shadow-lg
              transition-all duration-500 ease-in-out
              ${theme === 'Dark'
                ? 'bg-amber-500 hover:bg-amber-400 text-gray-900'
                : 'bg-amber-500 hover:bg-amber-600 text-white'
              }
            `}
            onClick={toggleTheme}
          >
            {`${theme} mode`}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
