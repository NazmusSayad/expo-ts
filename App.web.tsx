import App from './src/Main'
import { BrowserRouter } from 'react-router-dom'

export default function WebApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
