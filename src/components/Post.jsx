import { useParams, Navigate ,useNavigate,Route,Routes} from "react-router-dom"
const Post = () => {
    const params = useParams()
    const status = 200
    const navigate = useNavigate()
    const onClick=()=>{
        console.log('hello')
        navigate('/about')
    }
    if(status===404){
        return<Navigate to='/pagenotfound'/>
    }
    return (
        <div>
            <p>Post component id: {params.id}</p> 
          <p>Post component name: {params.name}</p> 
          <button onClick={onClick}>Click about</button> 
          <Routes>
              <Route path='/show' element={<h2>show path /show here</h2>}/>
          </Routes>
        </div>
    )
}

export default Post
