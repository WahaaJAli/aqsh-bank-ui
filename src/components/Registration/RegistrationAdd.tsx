import { FieldValues, useForm } from 'react-hook-form'
import { IUser } from '../../services/RegistrationService'
import { Link, LinkIcon } from '../Link/Link'
import { emailSchema, passwordSchema } from '../../schemas/CommonZodSchema'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '../Button/Button'
import ButtonIcon from '../Button/ButtonIcon'
import Error from '../Error/Error'

const schema = z.object({
  firstName: z.string().min(2).max(40).trim(),
  lastName: z.string().min(2).max(40).trim(),
  email: emailSchema,
  password: passwordSchema,
  agreement: z.boolean().refine(v => v == true, { message: 'Please read and mark terms and conditions before proceeding' })
})

interface RegistrationProps {
  addError?: string
  onAddItem: ({}: IUser) => void
}

const RegistrationAdd = ({ addError, onAddItem }: RegistrationProps): JSX.Element => {
  useEffect(() => setFocus('firstName'), [])
  type FormData = z.infer<typeof schema>

  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false)
  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible)
  const handlePasswordType = () => isPasswordVisible ? "text" : "password"
  
  const { handleSubmit, register, reset, setFocus, setValue, watch, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })
  const uId = (): string => crypto.randomUUID().replace('-', '').substring(0, 5)
  
  const clearInput = (name: keyof FormData) => setValue(name, '')
  const onHandleSubmit = ({ firstName, lastName, email, password }: FieldValues) => {
    const registration: IUser = { _id: uId(), username: `${firstName} ${lastName}`, email, password }
    onAddItem(registration)
    reset()
  }

  return (
    <>
      <div className="blank">
        <div className="registration">
          
          <div className="registration__banner">
            <div className="banner__header">
              <LinkIcon href="/" icon="bank" />
              <div className="badge badge--tertiary">Back to Bank</div>
            </div>
            
            <div className="banner__footer">
              <span className="footer__tagline">Empowering Your Future <br/> with Ethical Excellence.</span>
              <div className="footer__carosel__container">
                <div className="carosel carosel--non-active"></div>
                <div className="carosel carosel--non-active"></div>
                <div className="carosel carosel--active"></div>
              </div>
            </div>
          </div>

          <div className="registration__form">
            <form onSubmit={handleSubmit(onHandleSubmit)} className='form'>
              
              <div className='form__header'>
                <h2>Create an Account</h2>
                
                <div className='header__sub-heading'>
                  <h6>Already have an Account?</h6>
                  <Link className="sub-heading__link" href='/'>Log in</Link>
                </div>
              </div>

              <div className="flex-row">
                <div className="input__container width-half">
                  <input {...register('firstName')} id='firstName' type="text" placeholder='First name' />
                  {watch('firstName') && (
                    <ButtonIcon className='clear-input' onClick={() => clearInput('firstName')}></ButtonIcon>
                  )}
                  {errors.firstName && <Error>{errors.firstName.message}</Error>}
                </div>

                <div className="input__container width-half">
                  <input {...register('lastName')} id='lastName' type="text" placeholder='Last name' />
                  {watch('lastName') && (
                    <ButtonIcon className='clear-input' onClick={() => clearInput('lastName')}></ButtonIcon>
                  )}
                  {errors.lastName && <Error>{errors.lastName.message}</Error>}
                </div>
              </div>

              <div className="input__container">
                <input {...register('email')} id='email' type="text" placeholder='Email' />
                {watch('email') && (
                    <ButtonIcon className='clear-input' onClick={() => clearInput('email')}></ButtonIcon>
                  )}
                {errors.email && <Error>{errors.email.message}</Error>}
              </div>
              
              <div className="input__container">
                <input {...register('password')} id='password' type={handlePasswordType()} placeholder='Enter your password' />
                {watch('password') && (
                  <>
                    <ButtonIcon className='clear-input' onClick={() => clearInput('password')}></ButtonIcon>
                    <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? '🙈' : '👁️'}
                    </button>
                  </>
                )}
                {errors.password && <Error>{errors.password.message}</Error>}  
              </div>

              <div className="agreement__container">
                <label className="custom-checkbox">
                  <input {...register('agreement', {required: true})} type="checkbox" />
                  <span></span>
                </label>
                <span className='agreement__text'>I agree to the </span>
                <Link href='/' className='agreement__link'>Terms & Conditions</Link>
              </div>
              {errors.agreement && <Error>{errors.agreement.message}</Error>}
              
              <div className="button__container">
                {addError && <Error>{addError}</Error>}
                <Button color='primary' size='lg' type='submit' onClick={() => {}} >Create Account</Button>
              </div>

              <div className="separator__container">
                <span className="separator__text">Or Register with</span>
              </div>
              
              <div className="button--set">
                <Button color='tertiary' size='md' onClick={() => console.log('Google!')} >Google</Button>
                <Button color='tertiary' size='md' onClick={() => console.log('Apple!')} >Apple</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistrationAdd