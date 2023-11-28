import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
		<section>
			<nav
				className="navbar navbar-expand navbar-dark bg-dark"
				aria-label="Second navbar example"
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/show">
						Tasks
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarsExample02"
						aria-controls="navbarsExample02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExample02">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="#">
									Update
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Remove
								</Link>
							</li>
						</ul>
						<form role="search">
							<input
								className="form-control"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
						</form>
					</div>
				</div>
			</nav>
		</section>
	);
}

export default Header