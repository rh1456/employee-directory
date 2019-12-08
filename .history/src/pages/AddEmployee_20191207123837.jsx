import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const AddEmployee = () => {
  const [resetForm, setResetForm] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hireDate, setHireDate] = useState('')
  const [isFullTime, setIsFullTime] = useState('')
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

  const submitForm = async event => {
    event.preventDefault()
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/oilers/Employees',

      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        hireDate: hireDate,
        isFullTime: isFullTime,
        profileImage: profileImage,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        state: state,
        zip: zip,
        email: email,
        emergencyContactPerson: emergencyContactPerson,
        emergencyContactPhone: emergencyContactPhone,
        emergencyContactAddress: setEmergencyContactAddress,
        ptoHours,
        ptoHours,
      }
    )
    setResetForm(true)
  }
  return (
    <>
      <main>
        <h2> Add A New Oilers' Employee</h2>
      </main>
    </>
  )
}

export default AddEmployee
