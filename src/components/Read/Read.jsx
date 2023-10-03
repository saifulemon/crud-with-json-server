import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Read = () => {

  const {id} = useParams();
  const [Data, setdata] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:3001/contacts'+id)
    .then(res => setdata(res.data))
    .catch(err => console.log(err))
}, [])

  return (
    <div className='container'>
        
            <div className='container p-5'>
            <p>{Data.id}</p>
            <p>{Data.name}</p>
            <p>{Data.email}</p>
            <Link to="/">Back</Link>
            </div>
    </div>
  )
}

export default Read