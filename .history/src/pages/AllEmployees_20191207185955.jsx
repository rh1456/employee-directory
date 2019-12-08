import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { link } from 'react-router-dom'

const AllEmployees = () => {
  const employeeAPI =
    'https://sdg-staff-directory-app.herokuapp.com/api/oilers/employees'
  const [employeeData, setEmployeeData] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(employeeAPI)
    setEmployeeData(resp.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <main className="all-employees">
        {employeeData.map((info, i) => {
          return (
            <div className="employee-info">
              <div className="empolyee-sect" key={i}>
                <div className="employee-data">
                  <img className="employee-pic" src={info.profileImage} />
                  <h2 className="employee-full-name">
                    {info.firstName} {info.lastName}
                  </h2>
                  <h3 className="job">{info.jobTitle}</h3>
                  <h3 className="full-time">
                    Full Time: {info.isFullTime ? 'Yes' : 'No'}
                  </h3>
                </div>
              </div>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default AllEmployees
