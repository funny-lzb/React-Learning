import React from 'react'

export default function User({ name, phone, email, username }) {
  return (
    <li>
      {name}
      {phone}
      {email}
      {username}
    </li>
  )
}
