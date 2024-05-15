import React, { useState, useEffect } from "react";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import { Link } from "react-router-dom";


const HomePage = () => {

	const [data, setData] = useState([]);

	const getData = () => {
		var requestOptions = {
		  method: "GET",
		  redirect: "follow",
		};
	
		fetch(process.env.REACT_APP_BASE_API_URL+"/ip2024.json", requestOptions)
		  .then((response) => response.json())
		  .then((result) => {
			setData(result)
			console.info('result.................', result)
	})
		  .catch((error) => console.log("error", error));
	  };
	
	  useEffect(() => {
		getData();
	  }, []);
    return(
        <div className="main">
			<Navbar navitem={true}/>

			<main className="content">
				<div className="container-fluid p-0">

					<h1 className="h3 mb-3"><strong>Indian Premier League</strong></h1>

					<div className="row">

					{data?.map((item, index) => (
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="card flex-fill w-100">
								<div className="card-body">
									<div className="row">
										<div className="col-6 mt-0">
											<h5 className="card-title">{item.scheduleAdWrapper.date}</h5>
										</div>
										<div className="col-6 mt-0">
											<h5 className="card-title text-end">
											{item.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].matchDesc}
											
											{/* <span className="badge bg-success">Live</span> */}
											</h5>
										</div>
									</div>
									<div className="row log-items mt-3">
										<div className="col-4 mt-0 log-items">
											<img className="team-logo team-border-mi" src={"logo/"+item.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team1.teamSName+".jpg"} alt={item.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team1.teamSName} />
										</div>
										<div className="col-4 mt-0 log-items">
											<h1><strong>VS</strong></h1>
										</div>
										<div className="col-4 mt-0 log-items">
										<img className="team-logo team-border-mi" src={"logo/"+item.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team2.teamSName+".jpg"} alt={item.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team2.teamSName} />
										</div>
									</div>
									<div className="row log-items mt-3">
										<div className="col-4 mt-0 log-items">
											<h5 className="card-title">{item.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team1.teamSName}</h5>
										</div>
										<div className="col-4 mt-0 log-items">
											
										</div>
										<div className="col-4 mt-0 log-items">
										<h5 className="card-title">{item.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team2.teamSName}</h5>
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
										<div className="col-xl-12 col-xxl-5 d-flex mt-3">
											<div className="w-100">
												<div className="row">
													<div className="col-12">
														<div className="card place-card">
															<div className="card-body card-body-txt">
															<Link to={'/home1'}>
																<div className="d-flex">
																	<div className="col mt-0 profile-text">
																		<h5 className="card-title mb-0">Place your bets </h5>    
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
								</div>
							</div>
						</div>
					))}

						{/* <div className="col-xl-6 col-xxl-7">
							<div className="card flex-fill w-100">
							<div className="card-body">
									<div className="row">
										<div className="col-6 mt-0">
											<h5 className="card-title">18:30, Today</h5>
										</div>
										<div className="col-6 mt-0">
											<Link to={'/home1'}>
												<h5 className="card-title text-end">T20 7 of 74
											</h5>
											</Link>
										</div>
									</div>
									<div className="row log-items mt-3">
										<div className="col-4 mt-0 log-items">
											<img className="team-logo item-border-srh" src={srh} alt="SRH" />
										</div>
										<div className="col-4 mt-0 log-items">
											<h1><strong>VS</strong></h1>
										</div>
										<div className="col-4 mt-0 log-items">
										<img className="team-logo team-border-mi" src={dc} alt="DC" />
										</div>
									</div>
									<div className="row log-items mt-3">
										<div className="col-4 mt-0 log-items">
											<h5 className="card-title">SRH</h5>
										</div>
										<div className="col-4 mt-0 log-items">
											
										</div>
										<div className="col-4 mt-0 log-items">
										<h5 className="card-title">DC</h5>
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
										<div className="col-xl-12 col-xxl-5 d-flex mt-3">
											<div className="w-100">
												<div className="row">
													<div className="col-12">
														<div className="card place-card">
															<div className="card-body card-body-txt">
															<Link to={'/'}>
																<div className="d-flex">
																	<div className="col mt-0 profile-text">
																		<h5 className="card-title mb-0">Place your bets </h5>    
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
								</div>
							</div>
						</div> */}
					</div>

					
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default HomePage;