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
      <h1 className="employee-directory">Employee Data</h1>
    </>
  )
}

export default SingleEmployee
