import React, { useEffect,useState } from 'react'
import back_arrow_icon from '/src/assets/assets/back_arrow_icon.png'
import {useParams,useNavigate} from 'react-router-dom'

function Player() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name:'',
        key:'',
        published_at:'',
        type:''
    })

    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjI0YWJkY2ZlYmZjZDRlNThmNGE2MDA1ZWJkNGQyZSIsIm5iZiI6MTc1MzM3NzYwOC4zNDA5OTk4LCJzdWIiOiI2ODgyNmI0ODY5MmI5NzU3NmUzOGVkNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cXaOiGMJW7qQ7USMJ3J7fr6feTa-sB5P0aLMaSd7wSw'
  }
};

useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

},[])


  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center '>
        <img src={back_arrow_icon} alt="" className='hover:cursor-pointer absolute top-5 left-4 width-[20px] h-10' onClick={()=>{navigate(-2)}}/>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen width='90%' height='90%' className='rounded-md min-h-screen'></iframe>
    </div>
    <div className='flex flex-row items-center justify-around  '>
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
    </div>
    </>
  )
}

export default Player