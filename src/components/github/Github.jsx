import React, { useState } from 'react'

function Github() {
    const [data,setdata] =useState([])
    fetch('https://api.github.com/users/Pritam-mb')
    .then(res => res.json())
    .then(data => setdata(data))
  return (
    
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    
    </div>
  )
}

export default Github
