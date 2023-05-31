import { useState } from 'react'
import '../../css/formvalid.css'
import { checkEmail, checkPassword } from './validators'

/* Advanced Code:
  1.错误存在，则渲染错误提示；否则，不渲染( && )
  
  核心思想：在提交表单时，把你的错误放到一个空数组里，最后验证时把它们用，拼在一起

  2.第一次提交表单后，之后每次type都要更新错误数组
    =>错误数组一开始为空，第一次提交表单后，错误数组伴随着email/password的改变而改变

    核心：落脚在错误信息这个状态上，所有的一切都由这个控制
*/

export default function FormValid() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const [emailErrors, setEmailErrors] = useState([])
  // const [passwordErrors, setPasswordErrors] = useState([])

  const [isFirstSubmit, setIsFirstSubmit] = useState(true)
  const emailErrors = isFirstSubmit ? [] : checkEmail(email)
  const passwordErrors = isFirstSubmit ? [] : checkPassword(password)

  function checkErrors(e) {
    e.preventDefault()
    setIsFirstSubmit(false)

    const emailResults = checkEmail(email)
    const passwordResults = checkPassword(password) //检查

    // setEmailErrors(emailResults)
    // setPasswordErrors(passwordResults) //更新错误
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
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {<div className='msg'>{passwordErrors.join(',')}</div>}
      </div>
      <button className='btn' type='submit'>
        Submit
      </button>
    </form>
  )
}
