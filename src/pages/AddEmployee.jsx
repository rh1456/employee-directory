import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const AddEmployee = () => {
  const [resetForm, setForm] = useState(False)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hireDate, setHireDate] = useState('')
  const [isFullTime, setIsFullTime] = useState(True)
  const [profileImage, setProfileImage] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [email, setEmail] = useState('')
  const [emergencyContactPerson, setEmergencyContactPerson] = useState('')
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('')
  const [emergencyContactAddress, setEmergencyContactAddress] = useState('')
  const [ptoHours, setPtoHours] = useState('')

  constSubmitForm = async event => {
    event.preventDefault()
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/oilers/Employees',

      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        hireDate: hireDate,
        isFullTime: isFullTime,
      }
    )
  }
  return <div></div>
}

export default AddEmployee
