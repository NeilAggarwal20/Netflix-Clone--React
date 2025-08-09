import React, { useState } from 'react'
import logo from '/src/assets/assets/logo.png'
import { login, signOut, signUp } from '../../firebase'
import netflix_spinner from '/src/assets/assets/netflix_spinner.gif'

function Login() {
  const [isSignUp, setIsSignUp] = useState(true)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async () => {
    setLoading(true)
    if (isSignUp) {
      await signUp(name, email, password);
    } else {
      await login(email, password);
    }
    setName("");
    setEmail("");
    setPassword("");
    setLoading(false)
  };

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    loading ? (
      <div className='min-h-screen w-full flex justify-center items-center bg-black bg-opacity-80'>
        <img src={netflix_spinner} alt="" className='w-14' />
      </div>
    ) : (
      <div
        className="min-h-screen flex flex-col items-center space-y-2"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,8,0.5), rgba(0,0,26,0.5)), url('/src/assets/assets/background_banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src={logo} alt="Logo" className='h-12 mt-8' />

        <div className='flex flex-col justify-center items-center bg-[rgba(0,0,0,0.75)] w-[90vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-lg px-6 py-8 rounded-lg my-8'>
          {isSignUp ? (
            <>
              <h1 className='mb-8 font-medium text-2xl sm:text-3xl'>Sign Up</h1>
              <form
                className='flex flex-col space-y-4 w-full'
                onSubmit={async e => { e.preventDefault(); await user_auth(); }}
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  placeholder='Your name'
                  required
                  className='p-3 sm:p-4 rounded border-none bg-[#333] text-white'
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  placeholder='Email'
                  required
                  className='p-3 sm:p-4 rounded border-none bg-[#333] text-white'
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  placeholder='Password'
                  required
                  className='p-3 sm:p-4 rounded border-none bg-[#333] text-white'
                />
                <button type='submit' className='bg-red-600 p-3 sm:p-4 rounded cursor-pointer hover:bg-red-700 active:bg-red-800 text-white'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
              </form>
              <div className='flex flex-row justify-between w-full mb-6 mt-4 text-sm'>
                <label className='flex items-center space-x-2'>
                  <input type="checkbox" className='mr-1' />
                  <span>Remember Me</span>
                </label>
                <div className='text-gray-400 cursor-pointer'>Need Help?</div>
              </div>
              <div className='flex flex-col sm:flex-row justify-around items-center w-full gap-2 text-sm'>
                <div className='text-gray-400'>Already have an account?</div>
                <div className='font-medium cursor-pointer hover:underline text-white' onClick={toggleForm}>
                  Sign In Now
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className='mb-8 font-medium text-2xl sm:text-3xl'>Sign In</h1>
              <form
                className='flex flex-col space-y-4 w-full'
                onSubmit={async e => { e.preventDefault(); await user_auth(); }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Email'
                  className='p-3 sm:p-4 rounded border-none bg-[#333] text-white'
                />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Password'
                  className='p-3 sm:p-4 rounded border-none bg-[#333] text-white'
                />
                <button type='submit' className='bg-red-600 p-3 sm:p-4 rounded cursor-pointer hover:bg-red-700 active:bg-red-800 text-white'>Sign In</button>
              </form>
              <div className='flex flex-row justify-between w-full mb-6 mt-4 text-sm'>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="mr-1" />
                  <span>Remember Me</span>
                </label>
                <div className='text-gray-400 cursor-pointer'>Need Help?</div>
              </div>
              <div className='flex flex-col sm:flex-row justify-around items-center w-full gap-2 text-sm'>
                <div className='text-gray-400 cursor-pointer'>New to Netflix?</div>
                <div className='font-medium cursor-pointer hover:underline text-white' onClick={toggleForm}>
                  Sign Up Now
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  )
}

export default Login
