import React from 'react';
import { Tag } from "react-bulma-components";
import './../App.css';

const Projects = () => {
	return(
		<div className="projBg">
			<div className="projHeader bounceIn">
				<h1>My Projects and Capstones</h1>
			</div>
			<div className="projCont">
				<div className="proj">
					<img src="/images/dota2logo.jpg" alt="Project"/>
						<h2>Dota Memory Card Game</h2>
							<div className="projDescription">
								<p>My take on a Classic Memory game using Vanilla Javascript</p>
							</div>
						<a href="https://kearledc.github.io/jquerygame/." target="_blank"><button> Play Here! </button></a>
						<h4>Skills Utilized:</h4>
						<Tag.Group className="skillsUtilized">
							<Tag color="info">Javascript</Tag>
							<Tag color="info">JQuery</Tag>
						</Tag.Group>	
				</div>
				<div className="proj flipInY">
					<img src="/images/aarhus3.jpg" alt="Project"/>
						<h2>Capstone 1: Travel Blog</h2>
							<div className="projDescription">
								<p>Join Cherry as she goes around Denmark exploring different places</p>
							</div>	
						<a href="https://kearledc.gitlab.io/cherryblog/" target="_blank"><button> Visit Denmark! </button></a>
						
						<h4>Skills Utilized:</h4>
						<Tag.Group className="skillsUtilized">
							<Tag color="info">HTML 5.0</Tag>
							<Tag color="info">CSS 3.0</Tag>
							<Tag color="info">Bootstrap 4.1</Tag>
						</Tag.Group>	
				</div>
				<div className="proj flipInX">
					<img src="/images/download.png" alt="Project"/>
						<h2>Capstone 2: Assets</h2>
							<div className="projDescription">
								<p>An Online Store Asset Management system Integrated with Paypal</p>
							</div>
					
						<a href="http://nanaystore.herokuapp.com/products"><button> Visit Nanay's</button></a>
						<h4>Skills Utilized:</h4>
						<Tag.Group className="skillsUtilized">
							<Tag color="info">Laravel</Tag>
							<Tag color="info">PHP</Tag>
							<Tag color="info">Heroku</Tag>
							<Tag color="info">MYSQL</Tag>
						</Tag.Group>
				</div>
			</div>
		</div>

	)
}

export default Projects;