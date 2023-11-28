import React, { useState } from "react";
import "./addtask.css";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

function AddTask() {
	const [task, setTask] = useState("");
	const [taskStatus, setTaskStatus] = useState("");

	const updateTask = (e) => {
		setTask(() => e.target.value);
	};
	const updateStatus = (e) => {
		setTaskStatus(() => e.target.value);
	};
	const submitTask = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3007/insert", {
				taskName: task,
				taskStatus: taskStatus,
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
		// adding task added status
		let alertBox = document.querySelector(".alert-wrapper");
		alertBox.innerHTML = `Task added! `;
		// removing the task added status
		setTimeout(() => {
			alertBox.innerHTML = "";
		}, 3000);
		// resetting the form after submission
		e.target.reset()
		setTask("");
		setTaskStatus("");
	};

	return (
		<div>
			<div className="row text-center form-wrapper mx-5">
				<div className="title ">
					<h1>Task Manager</h1>
				</div>
				<div className="col-12" id="task-form-wrapper">
					<form onSubmit={submitTask} id="task-form">
						<div className="row">
							<div className="col-12">
								<input
									type="text"
									name="taskName"
									
									onChange={updateTask}
									placeholder="Task name"
									className="mx-2"
									required
								/>
								<input
									type="text"
									name="taskStatus"
									
									onChange={updateStatus}
									placeholder="Task status"
									required
								/>
							</div>

							<div className="col-12">
								<button className="add-button btn btn-primary button-wide">
									Add Task
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col-12 alert-wrapper"></div>
			</div>
		</div>
	);
}

export default AddTask;
