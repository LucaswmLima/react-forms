import { useForm } from 'react-hook-form'
import validator from 'validator';
import RenderCounter from '../utils/renderCounter';

const HookForm = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))

  };

  const watchPassword = watch('password')

  return (
    <div className="app-container">

      <h1 className="app-title">Hook Form</h1>
      <RenderCounter />
      <div className="form-group">
        <label>Name</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Your name"
          {...register('name', { required: true })}
        />
        {errors?.name?.type === 'required' && <p className="error-message">Name is required.</p>}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          className={errors?.email && "input-error"}
          type="email"
          placeholder="Your e-mail"
          {...register('email', {
            required: true, validate: (value) => validator.isEmail(value)
          })}

        />
        {errors?.email?.type === 'required' && <p className="error-message">E-mail is required.</p>}
        {errors?.email?.type === 'validate' && <p className="error-message">Please enter a invalid E-mail.</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          className={errors?.password && "input-error"}
          type="password"
          placeholder="Password"
          {...register('password', {
            minLength: 6,
            maxLength: 15,
            required: true,
            validate: (value) => validator.isStrongPassword(value, {
              minUppercase: 1,
              minSymbols: 1,
              minNumbers: 1,
            })
          })}


        />
        {errors?.password?.type === 'minLength' && <p className="error-message">The password must be at least 6 characters long.</p>}
        {errors?.password?.type === 'maxLength' && <p className="error-message">The password must be no more than 12 characters long.</p>}
        {errors?.password?.type === 'validate' && <p className="error-message">The password must contain at least one number, one uppercase letter and one special character.</p>}
        {errors?.password?.type === 'required' && <p className="error-message">Password is required.</p>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          className={errors?.passwordConfirmation && "input-error"}
          type="password"
          placeholder="Confirm password"
          {...register('passwordConfirmation', {
            required: true,
            validate: (value) => value === watchPassword
          })}


        />
        {errors?.passwordConfirmation?.type === 'required' && <p className="error-message">Password confirmation is required.</p>}
        {errors?.passwordConfirmation?.type === 'validate' && <p className="error-message">Passwords does not match.</p>}
      </div>

      <div className="form-group">
        <label>Profession</label>
        <select
          className={errors?.profession && "input-error"}
          {...register('profession', { validate: (value) => { return value != '0' } })}
        >
          <option value="0">Select your profession...</option>
          <option value="developer">Developer</option>
          <option value="other">Other</option>
        </select>

        {errors?.profession && (
          <p className="error-message">Please select a option.</p>
        )}
      </div>

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="privacy-policy"
            {...register('privacyTerms', { required: true })}

          />
          <label>I agree with the privacy terms.</label>
        </div>

        {errors?.privacyTerms?.type === 'required' && (
          <p className="error-message">You must agree with the privacy terms.</p>
        )}
      </div>

      <div className="form-group">
        <button onClick={() => handleSubmit(onSubmit)()}>Create account</button>
      </div>
    </div>
  );
};

export default HookForm;
