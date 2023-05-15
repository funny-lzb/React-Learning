export function useHandleBlur(formRef, setFormIsValid, condition) {
  const validCondition = condition

  if (validCondition) {
    formRef.current.classList.remove('error')
    setFormIsValid(true)
  } else {
    formRef.current.classList.add('error')
    setFormIsValid(false)
  }
}
