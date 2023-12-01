import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './states/store.ts'

import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// change promise to async await
// add test


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
