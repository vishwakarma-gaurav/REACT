import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=> {
        fetch('https://api.github.com/users/vishwakarma-gaurav').then((res)=> res.json()).then((data)=>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-200 text-black p-4 text-3xl '>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default Github
