import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { link } from 'react-router-dom'

const AllEmployees = () => {
  const [employeeData, setEmployeeData] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/ilive/employees'
    )
    setEmployeeData(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div></div>
}

export default AllEmployees
