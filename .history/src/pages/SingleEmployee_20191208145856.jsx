import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const SingleEmployee = props => {
  const [employeeData, setEmployeeData] = useState([])

  const fetchData = async () => {
    const resp = await Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/oilers/Employees/${props.employeeId}`
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
              src={employeeData.profileImage}
              alt=""
              className="employee-photo"
            />
            <h3 className="job-title">{employeeData.jobTitle}</h3>

            <div className="single-employee-info">
              <strong>Hire Date: </strong>
              {employeeData.hiredDate}
            </div>
            <div className="single-employee-info">
              <strong>Email Address: </strong>
              {employeeData.email}
            </div>
            <div className="single-employee-info">
              <strong>Full Time :</strong>
              {employeeData.isFullTime ? 'Yes' : 'No'}
            </div>
            <div className="single-employee-info">
              <strong>PTO:</strong> {employeeData.ptoHours} hours
            </div>

            <div className="employee-profile">
              <h2>In Case of Emergency</h2>
              <div className="single-employee-info">
                <strong>Emergency Contact:</strong>
                {employeeData.emergencyContactPhone}
              </div>
              <div className="single-employee-info">
                <strong>Emergency Contact Address: </strong>
                {employeeData.emergencyContactAddress}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SingleEmployee
