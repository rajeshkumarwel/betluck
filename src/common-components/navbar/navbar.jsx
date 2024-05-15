import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { useSelector, useDispatch } from 'react-redux';
import { playerInformation } from "../../store/playerInformation/actions";

const Navbar = (props) => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// useEffect(()=>{
	// 	if(!localStorage.getItem('AccountId')) {
	// 		navigate('/')
	// 	}
	// },[])

	const handleLogout = () => { 
		 localStorage.clear();
	}
	useEffect(()=>{
		const playerinfo = {
			playerId: localStorage.getItem('AccountId')
		}
		dispatch(playerInformation(playerinfo))
	},[])
	const playerInfomation = useSelector((state) => state.playerInformationList.playerInformation)

    return(
			<nav className="navbar navbar-expand navbar-light navbar-bg">
				<Link to={'/home'} className="sidebar-toggle js-sidebar-toggle sidebar-toggle-center text-muted" style={{zIndex:"99999999"}}>
					<img src={Logo} alt="logo" /> <strong>BETLUCK</strong>
				</Link>
				<div className="navbar-collapse collapse">
					<ul className="navbar-nav navbar-align">
						<li className="nav-item dropdown">
                        {props.navitem ?
							<Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{fontSize: "20px", fontWeight: "bold"}}> 
                                <i className="bi bi-currency-rupee"></i> {playerInfomation?.player?.balance ? playerInfomation?.player?.balance: "00.00"} <span className="pi pi-user"></span>
                            </Link>
                            :
                            <Link className="nav-link" to={'/home'}>                            
                                <span><span className="pi pi-home" style={{fontSize: "20px"}}></span></span>
                            </Link>
                            }
							
                            {props.navitem &&
							<div className="dropdown-menu dropdown-menu-end">
								<Link className="dropdown-item" to={'/profile'}><i className="align-middle me-1" data-feather="user"></i> Profile</Link>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
								<div className="dropdown-divider"></div>
								<Link className="dropdown-item" to={'/'} onClick={()=>handleLogout()}>LogOut</Link>
							</div>
                            }
						</li>
					</ul>
				</div>
			</nav>
    )
}

export default Navbar;