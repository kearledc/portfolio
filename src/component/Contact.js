import React from "react";
import { Container, Heading } from "react-bulma-components";


const Contact = () => {
	return(
		<Container className="has-text-centered">
			<Heading size={2}>
				<h1 className="heading-text">Contact Us!</h1>
			</Heading>
			<Heading subtitle size="{6}">
				Contact Us!
			</Heading>
		</Container>
	)
}

export default Contact;