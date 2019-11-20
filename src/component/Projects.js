import React from 'react';
import { Container, Heading } from "react-bulma-components";


const Projects = () => {
	return(
		<Container className="has-text-centered">
			<Heading size={2}>
				<h1 className="heading-text">Projects</h1>
			</Heading>
			<Heading subtitle size="{6}">
				Sample Projects
			</Heading>
		</Container>
	)
}

export default Projects;