import { useRef, useState } from 'react'
import { useHandleBlur } from '../../hooks/useHandleBlur'
import '../../css/formvalid.css'

/* TodoList:
    1.当鼠标离开Email时，如果表单为空/不以@webdevsimplified.com结尾
    => 则给这个表单添加error类 + 表单下面有提示
    2.密码不能为空，大于等于10字符，必须包含小写字母，必须包含大写字母，必须包括一个数字
    3.提交表单，如果emailIsValid和passwordIsValid都为true，则提示Success
*/

export default function FormValid() {
  const [emailValue, setEmailValue] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(true)

  const [passwordValue, setPasswordValue] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState(true)

  const emailRef = useRef()
  const passwordRef = useRef()

  function hanleSubmit(e) {
    e.preventDefault()

    if (emailIsValid && passwordIsValid) {
      window.alert('Success')
    }
  }

  return (
    <form className='form' onSubmit={hanleSubmit}>
      <div ref={emailRef} className='form-group'>
        <label className='label' htmlFor='email'>
          Email
        </label>
        <input
          className='input'
          type='email'
          id='email'
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          onBlur={() =>
            useHandleBlur(
              emailRef,
              setEmailIsValid,
              emailValue !== '' && emailValue.endsWith('@webdevsimplified.com')
            )
          }
        />
        <div
          className='msg'
          style={{
            visibility: emailIsValid ? 'hidden' : 'visible',
          }}
        >
          Must end in @webdevsimplified.com and can't be empty
        </div>
      </div>
      <div ref={passwordRef} className='form-group'>
        <label className='label' htmlFor='password'>
          Password
        </label>
        <input
          className='input'
          value={passwordValue}
          type='password'
          id='password'
          onChange={e => setPasswordValue(e.target.value)}
          onBlur={() =>
            useHandleBlur(
              passwordRef,
              setPasswordIsValid,
              passwordValue !== '' &&
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/.test(passwordValue)
            )
          }
        />
      </div>
      <button className='btn' type='submit'>
        Submit
      </button>
      {}
    </form>
  )
}
