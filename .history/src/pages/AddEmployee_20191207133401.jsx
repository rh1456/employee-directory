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
  }
  return (
    <>
      <main>
        <h2> Add A New Oilers' Employee</h2>
        <form onSubmit={submitForm}>
          <section>
            <section className="employeeLabel">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={e => {
                  setFirstName(e.target.value)
                }}
                value={firstName}
                type="text"
              />
            </section>
            <section className="employeeLabel">
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={e => {
                  setLastName(e.target.value)
                }}
                value={lastName}
                type="text"
              />
            </section>
            <section className="employeeLabel">
              <label htmlFor="birthday">Date of Birth</label>
              <input
                className="dateData"
                onChange={e => {
                  setBirthday(e.target.value)
                }}
                type="date"
                value={birthday}
              />
            </section>
            <section className="employeeLabel">
              <label htmlFor="hireDate">Hire Date</label>
              <input
                className="dateData"
                onChange={e => {
                  setHireDate(e.target.value)
                }}
                type="date"
                value={hireDate}
              />
            </section>
            <section className="employeeLabel">
              <label htmlFor="fullTime">Full Time</label>
              <select
                onChange={e => {
                  setIsFullTime(e.target.value)
                }}
                type="text"
                value={isFullTime}
              >
                <option value="">--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </section>
            <section className="employeeLabel">
              <label htmlFor="profileImage">Profile Image</label>
              <input
                onChange={e => {
                  setProfileImage(e.target.value)
                }}
                type="url"
                value={profileImage}
              />
            </section>
          </section>
        </form>
      </main>
    </>
  )
}

export default AddEmployee
