import React, { useState } from "react";
import { Heading, Tile, Tag } from "react-bulma-components";

const WorkTimeline = () => {
	return (
		<Tile
			renderAs="article"
			kind="child"
			notification
			color="info"
			id="workTile"
			className="animated tada"
		>
			<Heading>My Hobbies</Heading>
			<Tag className="hobbyTag">
				<i class="fas fa-music"></i> Playing Music
			</Tag>
			<Tag className="hobbyTag">
				<i class="fas fa-gamepad"></i> Playing Games
			</Tag>
			<Tag className="hobbyTag">
				<i class="fas fa-book"></i> Reading Books
			</Tag>
			<Tag className="hobbyTag">
				<i class="fas fa-tv"></i> Watching Movies
			</Tag>
		</Tile>
	);
};

const SkillSets = () => {
	return (
		<div className="animated tada">
			<Tile
				renderAs="article"
				kind="child"
				notification
				color="info"
				id="skillTile"
			>
				<Heading>Programming Skillset</Heading>

				<Tag className="skillTag">
					<i class="fab fa-html5"></i> HTML 5.0
				</Tag>
				<Tag className="skillTag">
					<i class="fab fa-css3-alt"></i> CSS 4.0
				</Tag>
				<Tag className="skillTag">
					<i class="fab fa-js"></i> JS
				</Tag>
				<Tag className="skillTag">
					{" "}
					<i class="fab fa-php"></i> PHP
				</Tag>
				<Tag className="skillTag">
					<i class="fab fa-react"></i> React
				</Tag>
			</Tile>
		</div>
	);
};

const About = () => {
	const [workExp, setWorkExperience] = useState(false);
	const [skillSet, setSkillSets] = useState(false);

	const workClick = () => setWorkExperience(!workExp);
	let workTimeline = workExp ? <WorkTimeline /> : "";
	let workToggle = workExp ? "Hide Them" : "Click To See my Hobbies";

	const skillClick = () => setSkillSets(!skillSet);
	let skillSetTree = skillSet ? <SkillSets /> : "";
	let skillToggle = skillSet ? "Hide Them" : "Click to see my Skillsets";

	return (
		<div className="aboutMainContainer">
			<div className="aboutContainer1">
				<div id="aboutText" className="animated slideInLeft">
					<Tile
						renderAs="article"
						kind="child"
						notification
						color="danger"
					>
						<Heading>
							On Most days <i class="fas fa-laptop-code"></i>
						</Heading>
						<p>
							I try to work as a Freelance Developer for
							RaketSquad App. An application dedicated to bridge
							the networks between clients and freelancers. At the
							same time expanding my skills further by creating
							different applications practicing my craft
						</p>
					</Tile>
				</div>
				<div id="aboutPic" className="animated slideInRight">
					{workTimeline}
					<button
						onClick={workClick}
						className="animated pulse infinite workButton"
					>
						{workToggle}
					</button>
				</div>
			</div>
			<div className="aboutContainer2 animated bounceIn">
				<div id="aboutPic2">
					{skillSetTree}
					<h2>
						<button
							onClick={skillClick}
							className="workButton animated pulse infinite"
						>
							{skillToggle}
						</button>
					</h2>
				</div>
				<div id="aboutText2">
					<Tile
						renderAs="article"
						kind="child"
						notification
						color="danger"
					>
						<Heading>
							When I'm not behind a monitor and keyboard{" "}
							<i class="fas fa-gamepad"></i>.
						</Heading>
						<p>
							I spend my time playing guitar, joining fun runs,
							playing video games. I'm an avid spectator of the
							E-sports scene since gaming has been a huge part of
							my passion to learn coding.
						</p>
					</Tile>
				</div>
			</div>
		</div>
	);
};

export default About;
