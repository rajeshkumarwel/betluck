import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./transactionHistoryPage.css";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import { useDispatch, useSelector} from 'react-redux';
import { playerInformation } from "../../store/playerInformation/actions";
//import { managePlayerInformation } from "../../store/managePlayer/actions";
import { transactionHistory } from "../../store/transactionHistory/actions";

const TransactionHistoryPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(()=>{
		const playerinfo = {
			playerId: localStorage.getItem('AccountId')
		}
		dispatch(playerInformation(playerinfo))

		dispatch(transactionHistory(playerinfo))
		//dispatch(managePlayerInformation())
	},[])

	const playerInfomation = useSelector((state) => state.playerInformationList.playerInformation)
	//const managePlayerInfomation = useSelector((state) => state.managePlayerList.managePlayerInformation)
	const transactionHistoryData = useSelector((state) => state.transactionHistoryList.transactionHistory)

	

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

					<h1 className="h3"><strong>{'Rajeshkumar'}</strong> <span className="card-title">{'SuperUser'}</span></h1>
					<h1 className="mb-3"><strong>Transaction history</strong></h1> 
                    

					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card card-bg-trans">
											<div className="card-body">
												<div className="row">
													<div className="col-6 mt-0">
														<h5 className="card-title">Available balance</h5>
													</div>
                                                    <div className="col-6 mt-0">
                                                        <h1 className="text-end"><strong><i className="bi bi-currency-rupee"></i>{"3520.00"}</strong></h1>
													</div>
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
                    <div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-12">
										<div className="card">
										{/* <Link to={"#"}> */}
											<div className="card-body card-body-txt mt-3 mb-3">
													<div className="d-flex mb-2">
														<div className="col mt-0 profile-text">
															<h5 className="mb-0">
															{'14/05/2024 05:55'}  </h5>    
														</div>
														{/* <span 
														className={(item?.paymentStatus === "Successful" ? "badge bg-success":"") || (item?.paymentStatus === 'Pending' ? "badge bg-warning":"") || (item?.paymentStatus === 'Declined' ? "badge bg-danger":"")} */}

<span 
														className={"badge bg-warning"}
													
														
														>{'Pending'}</span>
													</div>
													
														<div className="d-flex">
														<div className="col mt-0 profile-text">
														<h5 className="mb-0">
																{/* <span className="pi pi-money-bill profile-icon-text"></span> {item?.paymentFlag === 'Deposit' ? "Depoist":"Withdraw"}  */}

																<span className="pi pi-money-bill profile-icon-text"></span> {'Withdraw'}
																
																</h5>     
														</div>
														<span className="text-end">
													
															<span>-</span>
						

															<i className="bi bi-currency-rupee"></i>{'4000'}</span>


													</div>
													
											</div>
											{/* </Link> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
					 <div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-12">
										<div className="card">
										<Link to={"/managetransaction"}>
											<div className="card-body card-body-txt mt-3 mb-3">
													<div className="d-flex mb-2">
														<div className="col mt-0 profile-text">
															<h5 className="mb-0">
																24/03/2024 05:20 </h5>    
														</div>
														<span className="text-end badge bg-success">Successfull</span>
													</div>
													<div className="d-flex">
														<div className="col mt-0 profile-text">
															<h5 className="mb-0">
																<span className="pi pi-money-bill profile-icon-text"></span> Deposit </h5>    
														</div>
														<span className="text-end">+ <i className="bi bi-currency-rupee"></i>5,000.00</span>
													</div>
											</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> 
                    
                 

                    <div className="text-center mb-3">
							<Link to={'#'} onClick={()=> navigate(-1)}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default TransactionHistoryPage;