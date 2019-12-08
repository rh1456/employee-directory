import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { link } from 'react-router-dom'

const AllEmployees = () => {
  const employeeAPI =
    'https://sdg-staff-directory-app.herokuapp.com/api/oilers/employees'
  const [employee, setEmployee] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(employeeAPI)
    setEmployee(resp.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <main>
        {employee.map((employee, i) => {
          return (
            <>
              <section className="allEmployees">
                <section className="employee" key={i}>
                  <p>
                    Full-Time: {employee.isFullTime.toString() ? 'Yes' : 'No'}
                  </p>
                  <p>
                    <Link to={'/employee/' + employee.id}>
                      {employee.firstName} {employee.lastName}{' '}
                    </Link>
                    <span>{employee.jobTitle}</span>
                  </p>
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
