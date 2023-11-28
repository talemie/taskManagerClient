import React from "react";
import './loading.css'

const LoadingOverlay = ({ isLoading }) => {
	return (
		isLoading && (
			<div className="loading-overlay">
				<div className="loader"></div>
			</div>
		)
	);
};

export default LoadingOverlay;
