import React from "react";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import csk from "../../assets/img/csk.png";
import mi from "../../assets/img/mi.png";
import srh from "../../assets/img/srh.png";
import dc from "../../assets/img/dc.png";
import { Link } from "react-router-dom";

const HomePage1 = () => {

    return(
        <div className="main">
			<Navbar navitem={true}/>

			<main className="content">
				<div className="container-fluid p-0">

					<h1 className="h3 mb-3"><strong>Indian Premier League</strong></h1>

					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="card flex-fill w-100">
								<div className="card-body">
									<div className="row">
										<div className="col-6 mt-0">
											<h5 className="card-title">18:30, Today</h5>
										</div>
										<div className="col-6 mt-0">
											<h5 className="card-title text-end"><span className="badge bg-success">Live</span></h5>
										</div>
									</div>
									<div className="row log-items mt-3">
										<div className="col-4 mt-0 log-items">
											<img className="team-logo team-border-csk" src={csk} alt="CSK" />
										</div>
										<div className="col-4 mt-0 log-items">
											<h1><strong>VS</strong></h1>
										</div>
										<div className="col-4 mt-0 log-items">
										<img className="team-logo team-border-mi" src={mi} alt="MI" />
										</div>
									</div>
									<div className="row log-items mt-3">
										<div className="col-4 mt-0 log-items">
											<h5 className="card-title">CSK</h5>
										</div>
										<div className="col-4 mt-0 log-items">
											
										</div>
										<div className="col-4 mt-0 log-items">
										<h5 className="card-title">MI</h5>
										</div>
									</div>
									<div className="row log-items mt-3">
										<div className="col-6 mt-0 log-items">
											<h5 className="yet-title">Yet to bat</h5>
										</div>
										
										<div className="col-6 mt-0 log-items">
										<h5 className="yet-title">Yet to bat</h5>
										</div>
									</div>
									<div className="row">
										<div className="col-12 mt-3">
											<h5 className="card-title"><span className="pi pi-lock"></span> Match odds are open after game toss</h5>
										</div>
									</div>
									<div className="row">
										<div className="col-12 mt-3">
											<h5 className="card-title">Toss Odds</h5>
										</div>
									</div>
									<hr className="mt-0"/>
									<div>
											<div className="row">
												<div className="col-12 mt-0">
													<h5 className="card-title d-flex align-items-center"> <img className="team-logo-m team-border-csk" src={csk} alt="CSK" /> <span className=" ms-2">Chennai Super Kings</span></h5>
												</div>
												
											</div>
											<div className="row ms-4">
												<div className="col-6 mt-0">
													<div className="mb-3">
														<label className="form-label">ODDs</label>
														<input className="form-control form-control-lg" type="text" name="email" placeholder="" value={'2.00'} />
													</div>	
												</div>
												<div className="col-6 mt-0">
													<div className="mb-3">
														<label className="form-label">STAKE</label>
														<input style={{border:'1px solid #f00'}} className="form-control form-control-lg" type="text" name="email" placeholder="" value={'5000'} />
													</div>	
												</div>
											</div>
											<div className="row ">
												<div className="col-5 mt-0">
													
												</div>
												<div className="col-7 mt-0 text-end">
													<div className="mb-3">
														<label className="form-label">Returns:<i className="bi bi-currency-rupee"></i> 10,000.00</label>
													</div>	
												</div>
											</div>
									</div>
									<div>
											<div className="row">
												<div className="col-12 mt-0">
													<h5 className="card-title d-flex align-items-center"> <img className="team-logo-m team-border-csk" src={mi} alt="MI" /> <span className=" ms-2">Mumbai Indians</span></h5>
												</div>
												
											</div>
											<div className="row ms-4">
												<div className="col-6 mt-0">
													<div className="mb-3">
														<label className="form-label">ODDs</label>
														<input className="form-control form-control-lg" type="text" name="email" placeholder="" value={'2.00'} />
													</div>	
												</div>
												<div className="col-6 mt-0">
													<div className="mb-3">
														<label className="form-label">STAKE</label>
														<input style={{border: '1px solid #f00'}} className="form-control form-control-lg" type="text" name="email" placeholder="" value={''} />
													</div>	
												</div>
											</div>
											<div className="row ">
												<div className="col-5 mt-0">
													
												</div>
												<div className="col-7 mt-0 text-end">
													<div className="mb-3">
														<label className="form-label">Returns:<i className="bi bi-currency-rupee"></i> 00.00</label>
													</div>	
												</div>
											</div>
									</div>
									<div className="d-grid gap-2 mt-3">
										<Link to={'/'} className="btn btn-lg btn-danger">Place a bet</Link>
									</div>
								</div>

								
								
							</div>
						</div>

						
					</div>

					<div className="row">
						<div className="col-xl-12 col-xxl-5 d-flex mt-3">
							<div className="w-100">
								<div className="row">
									<div className="col-12">
										<div className="card">
											<div className="card-body card-body-txt">
											<a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{textDecoration:'none'}} >
												<div className="d-flex">
													<div className="col mt-0 profile-text">
														<h5 className="card-title mb-0"><i className="pi pi-telegram"></i> Show previous bets </h5>    
													</div>
													<span className="pi pi-angle-down text-end"></span>
												</div>
											</a>
											</div>
											
											<div className="collapse" id="collapseExample">
												<div className="card card-body">
												<div className="d-flex mb-2">
													<div className="col mt-0 profile-text">
													<div className="row">
														<div className="col-6 mt-0">
															<h5 className="card-title">Total Bets</h5>
														</div>
														<div className="col-6 mt-0">
															<h5 className="card-title text-end"><i className="bi bi-currency-rupee"></i> 6000.00</h5>
														</div>
													</div> 
													<hr/>
														<div className="row">
															<div className="col-6 mt-0">
																<h5 className="card-title">Toss odds</h5>
															</div>
															<div className="col-6 mt-0">
																<h5 className="card-title text-end">2.00   3500.00</h5>
															</div>
														</div> 
														<div className="row">
															<div className="col-6 mt-0">
																<h5 className="card-title">Toss odds</h5>
															</div>
															<div className="col-6 mt-0">
																<h5 className="card-title text-end">2.00   2500.00</h5>
															</div>
														</div> 
													</div>
												</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default HomePage1;