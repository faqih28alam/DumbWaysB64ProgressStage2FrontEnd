// App.tsx
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/Products'
import { AuthProvider } from './context/AuthProvider'
import Login from './pages/login'
import { useAuth } from './hooks/useAuth'
import PrivateRoute from './lib/PrivateRoute'
import ThemeToggle from './components/ThemeToggle'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

//function to separate components & router
function Header() {
  const { token, logout } = useAuth();

  return(
      <div className="w-full flex gap-4 p-4 justify-center border-b mb-8">
        <Button asChild variant="outline"> 
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline"> 
          <Link to="/about">About</Link>
        </Button>

        {token && (
          <Button asChild variant="outline"> 
            <Link to="/products">Products</Link>
          </Button>
        )}

        {token && (
          <Button asChild variant="outline"> 
            <Link to="/cart">My Cart</Link>
          </Button>
        )}
        
        {token ? 
        (<Button onClick={logout} variant="destructive">Logout</Button>) : 
        (<Button asChild variant="outline">
          <Link to="/login">Login</Link>
        </Button>)
        }

        <ThemeToggle/>

      </div>
  )
}


function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={
              <PrivateRoute>
                <Products/>
              </PrivateRoute>
            }></Route>
            <Route path="/cart" element={
              <PrivateRoute>
                <Cart/>
              </PrivateRoute>
            }></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App