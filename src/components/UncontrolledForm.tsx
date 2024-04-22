import { FormEvent, useRef } from 'react'

const LoginForm = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const lastnameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleFormSubmit} className="col-4">
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          ref={nameRef}
          className="form-control"
          id="name"
          type="text"
          placeholder="Your name..."
          name="name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="lastname">
        Last name
        </label>
        <input
          ref={lastnameRef}
          className="form-control"
          id="lastname"
          type="text"
          placeholder=" Your last name..."
          name="lastname"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="email">
        Email
        </label>
        <input
          ref={emailRef}
          className="form-control"
          id="email"
          type="email"
          placeholder="example@domain.com"
          name="email"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          ref={passwordRef}
          className="form-control"
          id="password"
          type="password"
          placeholder="At least 6 characters"
          name="password"
        />
      </div>

      <div>
      <button type="submit" className="btn btn-outline-success">
        Submit
      </button>
      <button type="reset" className="btn btn-outline-secondary ms-3">
        Reset
      </button>
      </div>
    </form>
  )
}

export default LoginForm
