import { useState } from 'react'
import RegistrationService, { IUser } from '../../services/RegistrationService'
import RegistrationAdd from './RegistrationAdd'

const Registration = () => {
	const [ addError, setAddError ] = useState<string>()

  const createUser = ({username, email, password}: IUser): void => {
    type UserPayload = Omit<IUser, '_id'>
    const user: UserPayload = {username, email, password}

    RegistrationService.create<UserPayload>(user)
      .then(({data: newUser}) => setAddError(''))
      .catch(error => setAddError(error.response.data.message || error.message))
  }

  return (
    <>
      <RegistrationAdd onAddItem={createUser} addError={addError} ></RegistrationAdd>
    </>
  )
}

export default Registration