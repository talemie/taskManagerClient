import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./edit.css";

function EditTask(props) {
	const [task, setTask] = useState([]);
	const { taskId } = useParams();
	
	console.log(taskId);
	// edit functionality
	// calling the update server to update the task status
	function updateTask(status) {
		axios
			.put(`http://localhost:3007/update/${taskId}`, { taskStatus: status })
			.then(() => {
				// alert(`Task with an id of ${taskId} updated`)
			});
		let updateAlertStatus = document.querySelector(".update-status-alert");
		updateAlertStatus.innerHTML = `Task with an id of ${taskId} updated!!`;
		setTimeout(() => {
			updateAlertStatus.innerHTML = "";
		}, 2000);
	}

	// calling the above status updater function
	function checkComplete(e) {
		e.preventDefault();

		let checkBox = document.getElementById("check-complete").checked;
		// console.log(checkBox);
		if (checkBox) {
			updateTask("Completed");
		} else {
			updateTask("Open");
		}
	}

	// Fetching tasks to get the task name
	async function fetchTask() {
		try {
			let fetchedTasks = await fetch("http://localhost:3007/tasks");
			let jsonResponse = await fetchedTasks.json();

			let filteredTask = jsonResponse.filter(
				(sinData) => sinData.task_id == taskId
			);

			setTask(filteredTask);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchTask();
	}, []);

	return (
		<div className="container text-center">
			<div className="row">
				<div className="edit-form ">
					<form onSubmit={checkComplete}>
						<div className="row text-center">
							<div className="col-sm-12 col-md-6">
								{task.map((item, i) => {
									return (
										<div>
											<div>
												<h3>Task ID: {item.task_id}</h3>
											</div>
											<h2 key={i}>{item.task_name}</h2>
										</div>
									);
								})}
							</div>
							<div className="col-sm-12 col-md-6">
								<h4>
									Complete: <br />
									<input
										type="checkbox"
										name="complete"
										id="check-complete"
										className=""
									/>
								</h4>
							</div>
						</div>

						<button className="task-name-wrapper button-wide btn btn-success">
							Update
						</button>
						<div className="update-status-alert"></div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default EditTask;
