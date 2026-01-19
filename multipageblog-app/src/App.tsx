import { BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Home from './pages/home'
import About from './pages/about'
import Posts from './pages/posts'
import PostDetail from './pages/postDetail'

function App() {

  return (
    <BrowserRouter>
      <div className="w-full flex gap-4 p-4 justify-center border-b mb-8">
        <Button asChild variant="outline"> 
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline"> 
          <Link to="/about">About</Link>
        </Button>
        <Button asChild variant="outline"> 
          <Link to="/posts">Posts</Link>
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/" element={<Posts />} >
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
