import React from "react";
import { Link } from "react-router-dom";
import "./profilePage.css";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";

const ProfilePage1 = () => {

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

					<h1 className="h3"><strong>Jaya Kumar</strong> <span className="card-title">Super User</span></h1>
					<Link to={"/personalinfoupdate"}> <h5 className="card-title mb-3">Account ID: 0979797 <span className="pi pi-copy"></span></h5> </Link>
                    
					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card players-success mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>Deposit request placed succssfully</strong></h4>
												<div className="mb-1">
													<span className="text-muted">Transaction pending</span>
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
									<div className="col-sm-12">
										<div className="card card-bg-trans">
											<div className="card-body">
												<div className="row">
													<div className="col-6 mt-0">
														<h5 className="card-title">Available balance</h5>
                                                        <h1 className="mt-1 text-danger"><strong><i className="bi bi-currency-rupee"></i>00.00</strong></h1>
													</div>
                                                    <div className="col-6 mt-0">
														<h5 className="card-title text-end">Pending transaction</h5>
                                                        <h1 className="mt-1 text-end text-danger"><strong><i className="bi bi-currency-rupee"></i>0.00</strong></h1>
													</div>
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    <hr />

                    <div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-6">
										<Link to={"/deposit"} >
										<div className="card">
											<div className="card-body text-center">
												<h1 className="mt-1 mb-3"><span className="pi pi-money-bill"></span></h1>
												<div className="mb-0">
													<span className="text-muted">Deposit</span>
												</div>
											</div>
										</div>
										</Link>
									</div>
									<div className="col-6">
									<Link to={"/withdraw"} >
										<div className="card">
											<div className="card-body text-center">
												<h1 className="mt-1 mb-3"><span className="pi pi-money-bill"></span></h1>
												<div className="mb-0">
													<span className="text-muted">Withdraw</span>
												</div>
											</div>
										</div>
										</Link>
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
											<div className="card-body card-body-txt">
												<Link to={'/personalinfo'}>
													<div className="d-flex">
														
															<div className="col mt-0 profile-text">
															<h5 className="card-title mb-0"><span className="pi pi-user profile-icon-text"></span> Personal Info </h5>    
														</div>
														<span className="pi pi-angle-right text-end"></span>
														
													</div>
												</Link>
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
											<div className="card-body card-body-txt">
											<Link to={'/transactionhistory'}>
												<div className="d-flex">
													<div className="col mt-0 profile-text">
														<h5 className="card-title mb-0"><span className="pi pi-history profile-icon-text"></span> Transaction history </h5>    
													</div>
                                                    <span className="pi pi-angle-right text-end"></span>
												</div>
											</Link>
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
											<div className="card-body card-body-txt">
											<Link to={'#'}>
												<div className="d-flex">
													<div className="col mt-0 profile-text">
														<h5 className="card-title mb-0"><span className="pi pi-phone profile-icon-text"></span> Contact us </h5>    
													</div>
                                                    <span className="pi pi-angle-right text-end"></span>
												</div>
											</Link>
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
											<div className="card-body card-body-txt">
											<Link to={'#'}>
												<div className="d-flex">
													<div className="col mt-0 profile-text">
														<h5 className="card-title mb-0"><span className="pi pi-credit-card profile-icon-text"></span> Manage odds </h5>    
													</div>
                                                    <span className="pi pi-angle-right text-end"></span>
												</div>
											</Link>
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
											<div className="card-body card-body-txt">
											<Link to={'/manageplayer'}>
												<div className="d-flex">
													<div className="col mt-0 profile-text">
														<h5 className="card-title mb-0"><span className="pi pi-users profile-icon-text"></span> Manage player </h5>    
													</div>
                                                    <span className="pi pi-angle-right text-end"></span>
												</div>
											</Link>
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
											<div className="card-body card-body-txt">
											<Link to={'#'}>
												<div className="d-flex">
													<div className="col mt-0 profile-text">
														<h5 className="card-title mb-0"><span className="pi pi-id-card profile-icon-text"></span> Manage transactions </h5>    
													</div>
                                                    <span className="pi pi-angle-right text-end"></span>
												</div>
											</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

                    <div className="text-center mb-3">
							<Link to={'/home'}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default ProfilePage1;