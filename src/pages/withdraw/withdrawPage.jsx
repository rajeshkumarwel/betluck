import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector} from 'react-redux';
import { playerInformation } from "../../store/playerInformation/actions";
import { withdrawPlayerInformation } from "../../store/withdrawPlayer/actions";

const WithdrawPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [statusMessage, setStatusMessage] = useState("");

	useEffect(()=>{
		const playerinfo = {
			playerId: localStorage.getItem('AccountId')
		}
		dispatch(playerInformation(playerinfo))
	},[])

	const playerInfomation = useSelector((state) => state.playerInformationList.playerInformation)

	const initialValues = {
		withdrawAmount: "",
		upi: playerInfomation?.player?.upi ? playerInfomation?.player?.upi : ""
	}

	const validationSchema = Yup.object({
		withdrawAmount: Yup.string().required('Withdraw amount is required'),
		upi: Yup.string().required('UPI ID is required'),
	})

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values, { resetForm }) => {
			await new Promise(resolve => setTimeout(resolve, 500));
			const payload = {
				playerId: playerInfomation?.player?.playerId,
				pendingWithdrawAmount: values.withdrawAmount,
				createdDate: new Date().toLocaleString()
			}
			const data = {
				playerData: payload
			}
			dispatch(
				withdrawPlayerInformation(data, (res) =>  {
					if(res.statusCode === 200) {
						navigate('/profile')
					} else {
						setStatusMessage(res.message)
					}
				})
			)
			//resetForm();
		}
	})

	// useEffect(()=>{
	// 	if(!playerInfomation?.player?.balance) {
	// 		navigate('/profile')
	// 	}
	// },[])

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

				<h1 className="h3"><strong>Withdraw</strong></h1>
					<Link to={`/personalinfo/2`}> <h5 className="card-title mb-3">Account ID: {'100026'} <span className="pi pi-copy"></span></h5> </Link>
                    {statusMessage && 
						<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card players-danger mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>{'Invalid withdrawal amount or insufficient balance'}</strong></h4>
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>	
					}
					
                    <div className="row mb-3">
						<div className="col-12 col-lg-8 col-xxl-9 d-flex">
							<div className="flex-fill mt-3">
							<form onSubmit={formik.handleSubmit}>
								<div className="mb-3">
									<label className="form-label">Enter withdraw amount</label>
									<input 
									id="withdrawAmount"
									type="text"
									name="withdrawAmount"
									placeholder="Enter player withdraw amount"
									value={formik.values.withdrawAmount}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className={
										formik.errors.withdrawAmount && formik.touched.withdrawAmount
										? "form-control form-control-lg error errorfocus"
										: "form-control form-control-lg"
									}
									/>
									{formik.touched.withdrawAmount && formik.errors.withdrawAmount && (
										<div className="input-feedback">{formik.errors.withdrawAmount}</div>
									)}
									<small className="form-label text-muted  text-end withdraw-avtext">Available to withdraw: {"00.00"}</small>
								</div>
								
								<div className="mb-3">
									<label className="form-label">Confirm withdraw UPI ID</label>
									<div className="position-relative">
									<input
									 type="text"
									 name="upi"
									 id="upi"
									 placeholder="Confirm withdraw UPI ID"
									 value={'Rajesh@okhdfc'} 
									 disabled
									 onChange={formik.handleChange}
									 onBlur={formik.handleBlur}
									 className={
										formik.errors.upi && formik.touched.upi
										? "form-control form-control-lg error errorfocus"
										: "form-control form-control-lg"
									 }
									 />
									 {formik.touched.upi && formik.errors.upi && (
											<div className="input-feedback">{formik.errors.upi}</div>
										)}
									 
									 
									 
									 <Link className="withdraw-edit text-link" to={`/addwithdrawaddress/${'2'}/update`}>Edit</Link>
									 </div>
									<small className="text-muted">Please make payment to the above UPI ID and use your Account Id: {'100026'} as your payment reference</small>
								</div>	
																	
								
								
								<div className="d-grid gap-2 mt-3">
									<Link to={"/profile2"} className="btn btn-lg btn-danger">Confirm withdraw</Link>
								</div>
							</form>
								
							</div>
						</div>
					</div>

                    <div className="text-center  mb-3">
							<Link to={"#"} onclick={()=>navigate(-1)}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default WithdrawPage;