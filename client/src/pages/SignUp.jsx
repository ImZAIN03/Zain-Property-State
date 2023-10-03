import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-slate-900 text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border-[3px] p-3 rounded-lg' id='username'/>
        <input type='email' placeholder='email' className='border-[3px] p-3 rounded-lg' id='email'/>
        <input type='password' placeholder='password' className='border-[3px] p-3 rounded-lg' id='password'/>
        <button className='bg-gray-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='font-semibold'>Have An Account?</p>
        <Link to="/sign-in">
          <span className='text-blue-700 font-semibold'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
