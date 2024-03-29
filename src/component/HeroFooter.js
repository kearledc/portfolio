import React, { useState } from "react";
import { Hero, Tabs } from "react-bulma-components";

const HeroFooter = props => {
	console.log(props);
	const [visible, setVisible] = useState(false);
	const [aboutVisible, setAbout] = useState(false);
	const [projectVisible, setProject] = useState(false);
	const [contactVisible, setContact] = useState(false);

	const aboutClick = () => {
		setAbout(true);
		setProject(false);
		setContact(false);
		setVisible(true);
		props.about(); // gamit ang props rineference natin yung about mula sa HeadFooter sa App.js
	};

	const projectClick = () => {
		setProject(true);
		setAbout(false);
		setContact(false);
		setVisible(true);
		props.projects();
	};

	const contactClick = () => {
		setContact(true);
		setProject(false);
		setAbout(false);
		setVisible(true);
		props.contact();
	};

	return (
		<Hero.Footer>
			<Tabs fullwidth={true} className="is-boxed">
				<Tabs.Tab
					onClick={aboutClick}
					active={visible && aboutVisible ? true : false}
				>
					<i class="fas fa-user"></i>About Me
				</Tabs.Tab>
				<Tabs.Tab
					onClick={projectClick}
					active={visible && projectVisible ? true : false}
				>
					<i class="fas fa-project-diagram"></i>Projects
				</Tabs.Tab>
				<Tabs.Tab
					onClick={contactClick}
					active={visible && contactVisible ? true : false}
				>
					<i class="fas fa-book-reader"></i> Contact Me
				</Tabs.Tab>
			</Tabs>
		</Hero.Footer>
	);
};

export default HeroFooter;
