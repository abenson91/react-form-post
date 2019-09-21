import React from "react";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Title: "",
			Type: "",
			_Date: new Date(),
			Message: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ Title: event.target.Title });
		this.setState({ Type: event.target.Type });
		this.setState({ _Date: event.target._Date });
		this.setState({ Message: event.target.Message });
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
						title: this.state.Title,
						type: this.state.Type,
						date: this.state._Date,
						message: this.state.Message,
					}),
				});
			} catch (error) {
				alert(error);
				console.error(error);
			}
		})();
		//event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Title:
					<input
						type="text"
						value={this.state.Title}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Type:
					<input
						type="text"
						value={this.state.Type}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Date:
					<input
						type="date"
						value={this.state._Date}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Message:
					<input
						type="text"
						value={this.state.Message}
						onChange={this.handleChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Form;
