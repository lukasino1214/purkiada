import React from 'react'

const adminpage = () => {
  const logoff = () => {
    window.history.replaceState(null, '', '/AQh5b20Wha1LDM7')
  }
  return (
      <div>
          <h1>Upravit</h1>
          <form>
              <button></button>
              <button></button>
              <button onClick={logoff}>Odhlásit se</button>
          </form>
      </div>
  )
}

export default adminpage