import React from "react";
import { Columns, Heading, Tile, Button } from "react-bulma-components";
import "./../App.css";

const Contact = () => {
	return (
		<div className="mainContainer">
			<div className="contactContainer">
				<div className="formsContainer animated rotateInDownLeft">
					<form>
						<div className="field">
							<label for="name" className="label has-text-light">
								Name:
							</label>
							<div className="control">
								<input
									type="text"
									id="name"
									className="input"
								/>
							</div>
						</div>
						<div className="field">
							<label for="email" className="label has-text-light">
								Email:
							</label>
							<div className="control">
								<input type="" id="email" className="input" />
							</div>
						</div>
						<div className="field">
							<label className="label has-text-light">
								Message:
							</label>
							<div className="control">
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="10"
									className="textarea"
									placeholder="How can I help you?"
								></textarea>
							</div>
						</div>

						<button className="button is-info is-fullwidth">
							Send
						</button>
					</form>
				</div>

				<div id="workWithMe" className="animated rotateInDownRight">
					<Tile kind="ancestor">
						<Tile kind="parent">
							<Tile
								renderAs="article"
								kind="child"
								notification
								color="info"
							>
								<div className="content">
									<Heading>Contacts and Socials</Heading>
									<a
										href="https://facebook.com/kearledc"
										target="_blank"
										className="socialLinks"
									>
										<Heading>
											{" "}
											<i class="fab fa-facebook"></i>{" "}
											Facebook
										</Heading>
									</a>
									<a
										href="https://www.linkedin.com/in/earle-cruz-573392170/"
										target="_blank"
										className="socialLinks"
									>
										<Heading>
											{" "}
											<i class="fab fa-linkedin-in"></i>{" "}
											LinkedIn
										</Heading>
									</a>
									<a
										href="https://twitter.com/home"
										target="_blank"
										className="socialLinks"
									>
										<Heading>
											{" "}
											<i class="fab fa-twitter"></i>{" "}
											Twitter
										</Heading>
									</a>
									<Heading>
										{" "}
										My Curriculum Vitae{" "}
										<i class="fas fa-angle-double-right animated pulse infinite"></i>
										<a
											href="https://drive.google.com/open?id=1rgXwWc3ifP7eg4S6-6XIzJNGncpUw469"
											className="socialLinks"
										>
											<button className="button is-success animated heartBeat infinite">
												Click Me
											</button>
										</a>
									</Heading>
								</div>
							</Tile>
						</Tile>
					</Tile>
				</div>
			</div>
		</div>
	);
};

export default Contact;
