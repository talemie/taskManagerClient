import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./showTask.css";
import LoadingOverlay from "../Loading/Loading";

function ShowTask() {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true); //for the loading feature
	// for toggling the task detail
	const [isToggled, setIsToggled] = useState(false);

	// fetching tasks from DB
	async function fetchTasks() {
		let fetchedTasks = await axios.get("http://localhost:3007/tasks");
		setTasks(fetchedTasks.data);
		// console.log(fetchedTasks);
	}
	// console.log(tasks);
	useEffect(() => {
		// Simulating a delay to demonstrate the loading feature
		setTimeout(() => {
			setIsLoading(false);
			fetchTasks();
		}, 2000);
		
	}, []);

	// delete task function
	function deleteTask(id) {
		// console.log(id);
		let sure = window.confirm("Do you want to proceed to delete the task?");

		if (sure) {
			// User clicked 'OK' or 'Yes'
			fetch(`http://localhost:3007/remove/${id}`, {
				method: "DELETE",
			}).then(alert(`Task with id ${id} is deleted`));
		} else {
			// User clicked 'Cancel' or 'No'
			alert("Ok No worries Task is still there");
		}
	}
	
	function toggleTaskDetail() {
		let toggleElement = $(".toggle-status");
		toggleElement.slideToggle()
		console.log('toggle');
	}

	// for toggle the task detail
	 const handleToggle = (e) => {
			setIsToggled((prevState) => !prevState);
		};
	$(".task-name-wrapper h3").click(handleToggle);

	return (
		<>
			<div className="text-center">
				<h2>Tasks</h2>
			</div>

			{isLoading && <LoadingOverlay isLoading={isLoading} /> }
			{tasks.map((singleTask, i) => {
				let taskStatus = singleTask.task_status;

				return (
					<div key={i} className="container show-task-wrapper">
						<div className="row ">
							<div className="col-sm-12   task-name-wrapper">
								<h3
									className={`task-title px-5   ${
										taskStatus == "Completed" ? "completed-task" : ""
									}`} 
								>
									{taskStatus == "Completed" && (
										<i className="fas fa-check-circle "></i>
									)}
									{singleTask.task_name}
									<Link to={`/edit/${singleTask.task_id}`}>
										<i className="fas fa-edit edit-icon"></i>
									</Link>


									
									<Link to="#">
										<i
											className="fas fa-trash delete-icon"
											id="delete-task"
											onClick={() => {
												deleteTask(singleTask.task_id);
											}}
										></i>
									</Link>
								</h3>
								<div
									className={`toggle-status content ${
										isToggled ? "open" : "closed"
									}`}
								>
									Test toggle
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default ShowTask;
