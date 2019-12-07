import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const AddEmployee = () => {
  const [resetForm, setForm] = useState(False)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hireDate, setHireDate] = useState('')
  const [fullTime, setFullTime] = useState(True)
  const [profileImage, setProfileImage] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescript, setJobDescript] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [email, setEmail] = useState('')
  const [emergencyPerson, setEmergencyPerson] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')
  const [emergencyAddress, setEmergencyAdress] = useState('')
  const [partTime, setPartTime] = useState('')

  constSubmitForm = async event => {
    event.preventDefault()
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/oilers/Employees'
    )
  }
  return <div></div>
}

export default AddEmployee
