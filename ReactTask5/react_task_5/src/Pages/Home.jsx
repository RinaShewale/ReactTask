import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()

  return (
    <>
    <nav>
        <h1>Home</h1>
        <button onClick={()=>{
          navigate("/product")
        }}>Products</button>
    </nav>
    </>
  )
}

export default Home
