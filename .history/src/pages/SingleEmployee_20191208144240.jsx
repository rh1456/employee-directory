import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const SingleEmployee = props => {
  const [employeeData, setEmployeeData] = useState([])

  const fetchData = async () => {
    const resp = await Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/oilers/Employees/${props.match.params.id}`
    )
    setEmployeeData(resp.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1 className="employee-directory">Employee Data</h1>
      <main className="employee-section">
        <div className="employee-details">
          <div className="employee-info">
            <img
              src={SingleEmployee.profileImage}
              alt=""
              className="employee-photo"
            />
            <h3 className="job-title">{SingleEmployee.jobTitle}</h3>

            <div className="single-employee-info">
              <strong>Hire Date: </strong>
              {SingleEmployee.hiredDate}
            </div>
            <div className="single-employee-info">
              <strong>Email Address: </strong>
              {SingleEmployee.email}
            </div>
            <div className="single-employee-info">
              <strong>Full Time :</srtrong>
              {SingleEmployee.isFullTime ? 'Yes' : 'No'}
            </div>
            <div className="single-employee-info">
              <strong>PTO:</strong> {SingleEmployee.ptoHours} hours
            </div>

            <div className="employee-profile">
              <h2>In Case of Emergency</h2>
              <div className="single-employee-info">
                <strong>Emergency Contact:</strong>
                {SingleEmployee.emergencyContactPhone}
              </div>
              <div className="single-employee-info">
                <strong>Emergency Contact Address: </strong>
                {SingleEmployee.emergencyContactAddress}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SingleEmployee
