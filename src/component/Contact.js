import React from "react";
import { Container, Columns, Heading, Box } from "react-bulma-components";
import './../App.css';


const Contact = () => {
	return(
		<Container className="has-text-centered">
			<Columns>
				{/*Input*/}
				<Columns.Column>
					<form>
						<div className="field">
							<label for="name" className="label has-text-light">
								Name:
							</label>
							<div className="control">
								<input type="text" id="name" className="input"/>
							</div>
						</div>
						<div className="field">
							<label for="email" className="label has-text-light">
								Email:
							</label>
							<div className="control">
								<input type="" id="email" className="input"/>
							</div>
						</div>
						<div className="field">
							<label className="label has-text-light">
								Message:
							</label>
							<div className="control">
								<textarea name="message" id="message" cols="30" rows="10" className="textarea" placeholder="How can I help you?"></textarea>
							</div>
						</div>
						
						<button className="button is-info is-fullwidth">Send</button>
					</form>
				</Columns.Column>

				{/*Map*/}
				<Columns.Column>
					<Box>
					<Heading color="dark"> Let's Work Together?</Heading>
					</Box>
				</Columns.Column>
			</Columns>
		</Container>
	)
}

export default Contact;