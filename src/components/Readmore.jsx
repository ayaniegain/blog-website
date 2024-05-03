import React from 'react'

function Readmore({count,setCount}) {


    const handleReadMore=()=>{
        
        setCount(count + 1);
       
        console.log("hi",count);
    }
    

  return (
    <button onClick={handleReadMore} className="bg-blue-500 text-white px-4 py-2 rounded">
    Read more
  </button>
  )
}

export default Readmore