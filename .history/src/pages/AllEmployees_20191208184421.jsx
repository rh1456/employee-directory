import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      <main className="all-employees-main">
        {employeeData.map((employee, i) => {
          return (
            <>
              <section className="allEmployees">
                <section className="employee" key={i}>
                  <p>
                    Full-Time: {employee.isFullTime.toString() ? 'Yes' : 'No'}
                  </p>
                  <p>
                    <Link
                      className="employee-boder"
                      to={'/employee/' + employee.id}
                    >
                      {employee.lastName}, {employee.firstName} :{' '}
                    </Link>
                    <span>{employee.jobTitle}</span>
                  </p>
                  <section className="employeeimage">
                    <img
                      className="employee-profile-image"
                      src={employee.profileImage}
                      alt=""
                    />
                  </section>
                </section>
              </section>
            </>
          )
        })}
      </main>
    </>
  )
}

export default AllEmployees
