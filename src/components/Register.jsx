import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

export default function Register() {

  const { createUser } = useContext(AuthContext)

  const handleRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result=> {
      console.log(result.user);
    })
    .catch (error=> {
      console.log("ERROR", error.message);
    })

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Register now!</h1>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className='mb-4 mx-auto text-center'>Already have an account?<br /> Please <Link to="/login" className='text-blue-400'>login.</Link></p>
        </div>
      </div>
    </div>
  )
}
