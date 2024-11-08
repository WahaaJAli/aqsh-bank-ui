import { useState } from 'react'
import RegistrationService, { IUser } from '../../services/RegistrationService'
import RegistrationAdd from './RegistrationAdd'

const Registration = () => {
	const [ addError, setAddError ] = useState<string>()

  const createUser = ({username, email, password}: IUser): void => {
    const user: Omit<IUser, '_id'> = {username, email, password}

    RegistrationService.create<Omit<IUser, '_id'>>(user)
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