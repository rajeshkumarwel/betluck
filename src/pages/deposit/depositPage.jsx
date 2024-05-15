import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import { useDispatch, useSelector} from 'react-redux';
import { playerInformation } from "../../store/playerInformation/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { depositPlayerInformation } from "../../store/depositPlayer/actions";

const DepositPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(()=>{
		const playerinfo = {
			playerId: localStorage.getItem('AccountId')
		}
		dispatch(playerInformation(playerinfo))
	},[])

	const playerInfomation = useSelector((state) => state.playerInformationList.playerInformation)

	const initialValues = {
		depositAmount: "",
		upiTransactionNumber: ""
	}

	const validationSchema = Yup.object({
		depositAmount: Yup.string().required('Deposit amount is required'),
		upiTransactionNumber: Yup.string().required('UPI transaction number is required'),
	})

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values, { resetForm }) => {
			await new Promise(resolve => setTimeout(resolve, 500));
			const payload = {
				playerId: playerInfomation?.player?.playerId,
				pendingDepositAmount: values.depositAmount,
				transRefNumber: values.upiTransactionNumber,
				createdDate: new Date().toLocaleString()

			}
			const data = {
				playerData: payload
			}
			dispatch(
				depositPlayerInformation(data, (res) =>  {
					if(res.statusCode === 200) {
						navigate('/profile')
					}
				})
			)
			resetForm();
		}
	})

	

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

				<h1 className="h3"><strong>Deposit</strong></h1>
					<Link to={`/personalinfo/2`}> <h5 className="card-title mb-3">Account ID: {100023} <span className="pi pi-copy"></span></h5> </Link>
                    
					{/* <div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card players-success mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>Players invited succssfully</strong></h4>
												<div className="mb-1">
													<span className="text-muted">suresh.raj@outlook.com</span>
												</div>
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>		 */}
                    <div className="row mb-3">
						<div className="col-12 col-lg-8 col-xxl-9 d-flex">
							<div className="flex-fill mt-3">
							<form onSubmit={formik.handleSubmit}>
								<div className="mb-3">
									<label className="form-label">Enter deposit amount</label>
									<input
									id="depositAmount"
									type="text"
									name="depositAmount" 
									placeholder="Enter deposit amount" 
									value={formik.values.depositAmount}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className={
										formik.errors.depositAmount && formik.touched.depositAmount
										? "form-control form-control-lg error errorfocus"
										: "form-control form-control-lg"
									}
									/>
									{formik.touched.depositAmount && formik.errors.depositAmount && (
										<div className="input-feedback">{formik.errors.depositAmount}</div>
									)}
								</div>
								
								<div className="mb-3">
									<label className="form-label">Send payment to above UPI ID</label>
									<input
									className="form-control form-control-lg" 
									type="text"
									name="upi"
									placeholder="Send payment to above UPI ID" 
									value={'Rajesh@okhdfc'} disabled />
								</div>	
								<div className="mb-3">
									<label className="form-label">Payment reference</label>
									<input className="form-control form-control-lg" type="text" name="paymentRererence" placeholder="Send payment to above UPI ID" value={'100023'} disabled />
								</div>	
								<div className="mb-3">
									<label className="form-label">Enter UPI transaction number</label>
									<div><small className="text-muted">This can be your payment reference number</small></div>
									<input 
									id="upiTransactionNumber"
									type="text"
									name="upiTransactionNumber"
									value={formik.values.upiTransactionNumber}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className={
										formik.errors.upiTransactionNumber && formik.touched.upiTransactionNumber
										? "form-control form-control-lg error errorfocus"
										: "form-control form-control-lg"
									}
									/>
									{formik.touched.upiTransactionNumber && formik.errors.upiTransactionNumber && (
										<div className="input-feedback">{formik.errors.upiTransactionNumber}</div>
									)}
								</div>										
								
								
								<div className="d-grid gap-2 mt-3">
									<Link to={"/profile1"} className="btn btn-lg btn-danger">Confirm Deposit</Link>
								</div>
							</form>
								
							</div>
						</div>
					</div>

                    <div className="text-center  mb-3">
							<Link to={'#'} onClick={()=> navigate(-1)}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default DepositPage;