import React from 'react'
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
      <h1 className="employee-info">Oilers' Employee Information</h1>
      <main className="employee-section">
        <div className="employee-details">
          <div className="empoloyee-detail-info">
            <img
              src={SingleEmployee.profileImage}
              alt=""
              className="employee-pic"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default SingleEmployee
