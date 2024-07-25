import React, { useEffect, useState } from 'react'
import logo_technopartner from '../assets/img/logo_technopartner.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { useLoginMutation } from '../store/api/auth-api'
import { useAuthAction, useAuthSelector } from '../store/slice/auth-slice'
import { useNavigate } from 'react-router-dom'

type LoginPageProps = Record<string, never>

// schema
const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  })
  .required()

const LoginPage: React.FC<LoginPageProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  })

  const [loginMutate, { isLoading }] = useLoginMutation()
  const { setCredential } = useAuthAction()
  const { token } = useAuthSelector()

  const navigate = useNavigate()

  // Check user if still loged in
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [navigate, token])

  const onSubmit = async (data: typeof loginSchema.__outputType) => {
    const formData = new FormData()
    formData.append('username', data.email)
    formData.append('password', data.password)
    formData.append('grant_type', import.meta.env.VITE_GRANT_TYPE)
    formData.append('client_secret', import.meta.env.VITE_CLIENT_SECRET)
    formData.append('client_id', import.meta.env.VITE_CLIENT_ID)

    try {
      const data = await loginMutate(formData).unwrap()
      setCredential(data)
    } catch (err) {
      console.log(err)
    }
  }

  const [togglePassword, setTogglePassword] = useState(true)

  // render
  return (
    <div className="flex h-screen flex-col items-center justify-evenly md:flex-row md:items-center">
      <img
        src={logo_technopartner}
        className="md:object-contain md:w-80 md:self-center lg:w-96 "
        alt="logo-technopartner"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full p-4 md:w-1/2 md:border-l md:border-black lg:max-w-xl lg:pl-20"
      >
        {/* Email */}
        <label className="form-control w-full max-w-xs mx-auto">
          <div className="label flex justify-center">
            <span className="text-center font-semibold text-slate-500/50">Email</span>
          </div>
          <input
            disabled={isLoading}
            type="email"
            className="input input-bordered w-full max-w-xs"
            {...register('email')}
          />
          <div className="label">
            {errors.email && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          </div>
        </label>

        {/* Password */}
        <label className="form-control w-full max-w-xs mx-auto">
          <div className="label flex justify-center">
            <span className="text-center font-semibold text-slate-500/50">Password</span>
          </div>
          <div className="relative select-none">
            <input
              disabled={isLoading}
              type={togglePassword ? 'password' : 'text'}
              className="input input-bordered w-full max-w-xs pr-8 select-none"
              {...register('password')}
            />
            <div
              className="absolute right-2 top-4 w-4 h-4 hover:cursor-pointer"
              onClick={() => setTogglePassword((prev) => !prev)}
            >
              {togglePassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="label">
            {errors.password && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
          </div>
        </label>

        {/* Submit Button */}
        <div className="my-4">
          <button className="btn w-32 block mx-auto" disabled={!isValid || isLoading}>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export { LoginPage }
