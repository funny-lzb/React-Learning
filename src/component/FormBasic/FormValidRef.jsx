import { useRef, useState } from 'react'
import { checkEmail, checkPassword } from './validators'

/* TodoList:
  1.电子邮件：
        必填（不能为空）
        必须结束于@webdevsimplified.com

  2.第一次提交表单后，之后每次type都要更新错误数组
    => 错误数组一开始为空，第一次提交表单后，错误数组伴随着email/password的改变而改变

    ref的核心思路：通过监听onChange事件，让表单DOM值的改变控制着错误状态的改变
    (DOM -> state [by onChange])
  
*/

export default function FormValidRef() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [emailErrors, setEmailErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const [isFirstSubmit, setIsFirstSubmit] = useState(true)

  function checkErrors(e) {
    e.preventDefault()
    setIsFirstSubmit(false)

    const emailResults = checkEmail(emailRef.current.value)
    const passwordResults = checkPassword(passwordRef.current.value)

    setEmailErrors(emailResults)
    setPasswordErrors(passwordResults)

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert('Success')
    }
  }

  return (
    <form className='form' onSubmit={checkErrors}>
      <div className={`form-group ${emailErrors.length && 'error'}`}>
        <label className='label' htmlFor='email'>
          Email
        </label>
        <input
          className='input'
          type='email'
          id='email'
          ref={emailRef}
          onChange={
            isFirstSubmit
              ? undefined
              : e => setEmailErrors(checkEmail(e.target.value))
          }
        />
        {<div className='msg'>{emailErrors.join(',')}</div>}
      </div>
      <div className={`form-group ${passwordErrors.length && 'error'}`}>
        <label className='label' htmlFor='password'>
          Password
        </label>
        <input
          className='input'
          type='password'
          id='password'
          ref={passwordRef}
          onChange={
            isFirstSubmit
              ? undefined
              : e => setPasswordErrors(checkPassword(e.target.value))
          }
        />
        {<div className='msg'>{passwordErrors.join(',')}</div>}
      </div>
      <button className='btn' type='submit'>
        Submit
      </button>
    </form>
  )
}
