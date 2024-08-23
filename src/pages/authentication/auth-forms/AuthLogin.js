import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
// import { baseURLProd } from 'api/api';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [forgetPassword, setForgetPassword] = useState(false)
  const toggleForm = () => {
    setForgetPassword(!forgetPassword);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (
    // values, setStatus, setSubmitting, setErrors
  ) => {
    // try {
    //   const response = await fetch(`${baseURLProd}Login`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       userName: values.email,
    //       password: values.password,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Login failed');
    //   }

    //   const data = await response.json();
    //   if(data.status == true){
    //     window.location.assign('/dashboard');
    //   }
    //   else{
    //     window.alert(data.message)
    //   }
    // } catch (error) {
    //   setStatus({ success: false });
    //   setErrors({ submit: error.message });
    //   setSubmitting(false);
    // }
    window.location.assign('financial_statement');

  };

  return (
    <>
      <Formik
        initialValues={{
          email: 'test@gmail.com',
          password: '123456',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          handleLogin(values, setStatus, setSubmitting, setErrors);
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3} className="formdiv">
              {!forgetPassword ? (
                <>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="email-login">User Name</InputLabel>
                      <OutlinedInput
                        id="email-login"
                        type="email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                        className="emailInput"
                      />
                      {touched.email && errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                          {errors.email}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="password-login">Password</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        id="password-login"
                        type={showPassword ? 'text' : 'password'}
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        className="emailInput"
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            >
                              {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </IconButton>
                          </InputAdornment>
                        }
                        placeholder="Enter password"
                      />
                      {touched.password && errors.password && (
                        <FormHelperText error id="standard-weight-helper-text-password-login">
                          {errors.password}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: -1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Typography component={Link} to="#" variant="body1" sx={{ textDecoration: 'none' }} color="primary" onClick={toggleForm}>
                        Forget Password?
                      </Typography>
                    </Stack>
                  </Grid>
                  {errors.submit && (
                    <Grid item xs={12}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary" className="loginBtn">
                      Login
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12}>
                    <Stack sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                      <Typography variant="h4">Forget Password</Typography>
                      <p className='mt-3'>Enter your registered email to receive the reset password link</p>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="email-login">Email</InputLabel>
                      <OutlinedInput
                        id="email-login"
                        type="email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                        className="emailInput"
                      />
                      {touched.email && errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                          {errors.email}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary" className="loginBtn2">
                      Send Reset Password Link
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
