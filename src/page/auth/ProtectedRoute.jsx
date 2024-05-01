import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({DashBoard}) {
  const navigate=useNavigate()

  useEffect(() => {
    let login=false
    if (!login) {
   
    navigate('/login')
    
  }
    
  }, [])


    
 
  return (
 <Layout>
 <DashBoard/>
 </Layout>
  )
}

export default ProtectedRoute