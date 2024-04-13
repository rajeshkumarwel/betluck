import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-removebg-preview.png"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "./../login/loginPage.css";
import { loginPlayerVerification } from './../../store/loginPlayerVerification/actions';
import { useNavigate } from 'react-router-dom';
import { loginPlayer } from "../../store/loginPlayer/actions";

const VerificationPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [status, setStatus] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const loginPlayerRes = useSelector((state) => state.loginPlayer.loginPlayerResponse)
	const loginPlayerotpLoader = useSelector((state) => state.loginPlayerVerification.loginPlayerOTPLoader)

	const initialValues = {
		otp: ""
	}
	const digitsOnly = (value) => /^\d+$/.test(value)
	const validationSchema = Yup.object({
		otp: Yup.string().length(7, 'Must be a valid OTP').required('OTP is required').test('Digits only', digitsOnly)
	})

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async values => {
			await new Promise(resolve => setTimeout(resolve, 500));
			const payload = {
				OTP: values.otp,
			}
			const data = {
				otpData: payload
			}
			dispatch(
				loginPlayerVerification(data, (res) =>  { 
					if(res?.statusCode === 200) {
						localStorage.setItem('AccountId', res.player.playerId)
						localStorage.setItem('PlayerEmail', res.player.email)
						navigate('/home')
					} else {
						if(res.response.data.statusCode === 401) {
							// toaster(
							// 	'Not found',
							// 	res.response.data.message,
							// 	errorNotification
							// )
							setStatus(true);
							setStatusMessage(res.response.data.message)
							
						}
					}
				})
			)
		}
	})

	const handleResendOTP = () => {
		const payload = {
			email: localStorage.getItem('Playeremail'),
		}
		const data = {
			loginPlayerData: payload
		}
		dispatch(
			loginPlayer(data, (res) =>  {
				if(res?.statusCode === 200) {
					navigate('/verification')
				} else {
					if(res.response.data.statusCode === 404) {
						// toaster(
						// 	'Not found',
						// 	res.response.data.message,
						// 	errorNotification
						// )
						setStatus(true);
						setStatusMessage(res.response.data.message)
					}
					
				}
			})
		)
	}

    return(
        <div className="row mt-5">
				<div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">
						<div className="text-center">  
							<div><img src={Logo} alt="logo"  width={"200"}/> </div>
							<h1><strong>BETLUCK</strong></h1>
						</div>
						<div className="text-center mt-4">
							<h1 className="h2">Enter your verification code</h1>
							<p className="lead">
								Sign in to your account to continue
							</p>
						</div>
						{loginPlayerRes?.message && !status &&
						<div className="row">
							<div className="col-xl-6 col-xxl-5 d-flex">
								<div className="w-100">
									<div className="row">
										<div className="col-sm-12">
											<div className="card players-success mt-3">
												<div className="card-body text-center">
													<h4 className="mt-1"><strong>{'Your OTP will expire in 5 minutes'}</strong></h4>
													<h5 className="mt-1 text-white"><strong>{'Please enter the OTP sent to your registered Email ID'}</strong></h5>
												</div>
											</div>
										</div>									
									</div>
								</div>
							</div>
						</div>	
						}

						{status &&
						<div className="row">
							<div className="col-xl-6 col-xxl-5 d-flex">
								<div className="w-100">
									<div className="row">
										<div className="col-sm-12">
											<div className="card players-danger mt-3">
												<div className="card-body text-center">
													<h4 className="mt-1"><strong>{statusMessage}</strong></h4>
												</div>
											</div>
										</div>									
									</div>
								</div>
							</div>
						</div>	
						}
						<div className="card">
							<div className="card-body">
								<div className="m-sm-3">
									<form onSubmit={formik.handleSubmit}>
										<div className="mb-3">
											<label className="form-label">Enter four digit verification code sent to your email address</label>
											<input
											type="text"
											name="otp"
											placeholder="Enter your OTP"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className={
												formik.errors.otp && formik.touched.otp
												? "form-control form-control-lg error errorfocus"
												: "form-control form-control-lg"
											}
											value={formik.values.otp}
											length={7}
											 />
											 {formik.touched.otp && formik.errors.otp && (
												<div className="input-feedback">{formik.errors.otp}</div>
											)}
										</div>										
										<div>
											<div className="form-check align-items-center">
												<input id="customControlInline" type="checkbox" className="form-check-input" value="remember-me" name="remember-me"  />
												<label className="form-check-label text-small" htmlFor="customControlInline">Remember me</label>
											</div>
										</div>
										<div className="d-grid gap-2 mt-3">
											<button 
											type="submit"
											 className="btn btn-lg btn-danger"
											 disabled={!loginPlayerotpLoader ? false:true}
											 >
												{!loginPlayerotpLoader ? ('Login'):('Loading...')}
												</button>
										</div>
                                        <div className="d-grid gap-2 mt-3">
											<Link to={"#"} onClick={()=> handleResendOTP()} className="btn btn-lg btn-primary">Resend OTP</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="text-center mb-3">
							Don't have an account? <Link to={'/'} className="text-danger">Register</Link>
						</div>
					</div>
				</div>
			</div>
    )

}

export default VerificationPage;