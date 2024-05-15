import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import "./manageTransactionPage.css";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import { manageTransactionPlayerInformation } from "../../store/managePlayer/actions";

const ManageTransactionPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(()=>{
		dispatch(manageTransactionPlayerInformation())
	},[])

	const manageTransPlayerInfomation = useSelector((state) => state.managePlayerList.manageTransactionPlayerInformation)
	console.info('manageTransPlayerInfomation.....', manageTransPlayerInfomation)

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

					
					<h1 className="mb-3"><strong>Manage transaction</strong></h1> 
                    

                    <div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-12">
										<div className="card">
											<div className="card-body card-body-txt mt-3 mb-3">
													<div className="d-flex mb-2">
														<div className="col mt-0 profile-text">
															<h5 className="mb-0">
																24/03/2024 09:45 </h5>    
														</div>
														<span className="text-end badge bg-warning">Pending</span>
													</div>
													<div className="d-flex">
														<div className="col mt-0 profile-text">
															<h5 className="mb-0">
																<span className="pi pi-money-bill profile-icon-text"></span> Withdraw </h5>    
														</div>
														<span className="text-end">- <i className="bi bi-currency-rupee"></i>3,000.00</span>
													</div>
													<a className="withdraw-avtext mt-2" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
													{/* <i class="pi pi-angle-down"></i>*/} Hide details 
												</a>
											</div>
											
												<div className="collapse" id="collapseExample">
													<div className="card card-body">
													<div className="d-flex mb-2">
														<div className="col mt-0 profile-text">
															<h4 className="mb-1">
																Jai kumar</h4>   
																<h5 className="mb-0">
																Account ID:223223</h5>  
														</div>
														
													</div>
													<div className="row text-center">
														<div className="d-grid gap-2 mb-3 col-6">
															<Link to={"/manageplayer1"} className="btn btn-danger">Approve</Link>
														</div>
														<div className="d-grid gap-2 mb-3 col-6">
															<Link to={"/manageplayer2"} className="btn btn-secondary">Decline</Link>
														</div>
													</div>
												</div>
													</div>
													<div>
								
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
											<div className="card-body card-body-txt mt-3 mb-3">
													<div className="d-flex mb-2">
														<div className="col mt-0 profile-text">
															<h5 className="mb-0">
																24/03/2024 09:45 </h5>    
														</div>
														<span className="text-end badge bg-success">Successfull</span>
													</div>
													<div className="d-flex">
														<div className="col mt-0 profile-text">
															<h5 className="mb-0">
																<span className="pi pi-money-bill profile-icon-text"></span> Deposit </h5>    
														</div>
														<span className="text-end">- <i className="bi bi-currency-rupee"></i>3,000.00</span>
													</div>
													<a className="withdraw-avtext mt-2" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
													{/* <i class="pi pi-angle-down"></i>*/} Hide details 
												</a>
											</div>
											
											<div className="collapse" id="collapseExample">
												<div className="card card-body">
												<div className="d-flex mb-2">
													<div className="col mt-0 profile-text">
														<h4 className="mb-2">
															Jai kumar</h4>   
															<h5 className="mb-2">
															Account ID:223223</h5> 
															<h4 className="mb-2">
															664646313@paytm</h4>   
															<h5 className="mb-0">
															Payment reference:223223d14dw44ew</h5>   
													</div>
													
													
												</div>
												
											</div>
												</div>
												<div>
							
											</div>
												
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    
                 

                    <div className="text-center mb-3">
							<Link to={'/transactionhistory'}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default ManageTransactionPage;