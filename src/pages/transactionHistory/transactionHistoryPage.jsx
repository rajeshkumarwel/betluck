import React from "react";
import { Link } from "react-router-dom";
import "./transactionHistoryPage.css";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";

const TransactionHistoryPage = () => {

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

					<h1 className="h3"><strong>Jaya Kumar</strong> <span className="card-title">Super User</span></h1>
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
                                                        <h1 className="text-end"><strong><i className="bi bi-currency-rupee"></i>3250.00</strong></h1>
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
										<Link to={"/managetransaction"}>
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
													
											</div>
											</Link>
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
														<span className="text-end">- <i className="bi bi-currency-rupee"></i>5,000.00</span>
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
							<Link to={'/profile'}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default TransactionHistoryPage;