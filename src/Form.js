import React from "react";
import "./Form.css";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			type: "",
			date: new Date(),
			message: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearForm = this.clearForm.bind(this);
	}

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		(async () => {
			try {
				await fetch("*url*", {
					method: "POST",
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						title: this.state.title,
						type: this.state.type,
						date: this.state.date,
						message: this.state.message,
					}),
				}).then((response) => {
					if (response !== 200) {
						alert("Error, status code: " + response.status);
					} else {
						alert("success");
						this.clearForm();
					}
				});
			} catch (error) {
				alert(error);
				console.error(error);
			}
		})();
		event.preventDefault();
	}

	clearForm() {
		this.setState({
			title: "",
			type: "",
			date: new Date(),
			message: "",
		});
	}

	render() {
		return (
			<body>
				<form onSubmit={this.handleSubmit}>
					<input
						name="title"
						type="text"
						value={this.state.title}
						placeholder="Title"
						onChange={this.handleChange}
					/>
					<input
						name="type"
						type="text"
						value={this.state.type}
						placeholder="Type"
						onChange={this.handleChange}
					/>
					<input
						name="date"
						type="date"
						value={this.state.time}
						onChange={this.handleChange}
					/>
					<input
						name="message"
						type="text"
						value={this.state.message}
						placeholder="Message"
						onChange={this.handleChange}
					/>
					<input type="submit" value="Submit" className="button" />
				</form>
			</body>
		);
	}
}

export default Form;
