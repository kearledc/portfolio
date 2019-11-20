import React from "react";
import { Container, Columns } from "react-bulma-components";
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
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4101322928072!2d121.04148921484061!3d14.632645089782075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7afe6a39331%3A0xd367e6dc5e274032!2sCaswynn%20Building%2C%20134%20Timog%20Ave%2C%20Diliman%2C%20Quezon%20City%2C%201103%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1574221603242!5m2!1sen!2sph" frameborder="0" style={{border:0}} id="gmap"></iframe>
				</Columns.Column>
			</Columns>
		</Container>
	)
}

export default Contact;