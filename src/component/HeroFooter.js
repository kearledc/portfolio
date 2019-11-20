import React, {useState} from 'react';
import { Hero, Tabs } from 'react-bulma-components'

const HeroFooter = () => {
	const [visible, setVisible] = useState(false)
	const [aboutVisible, setAbout] = useState(false);
	const [projectVisible, setProject] = useState(false);
	const [contactVisible, setContact] = useState(false);
	
	const aboutClick = () => {
		setAbout(true)
		setProject(false)
		setContact(false)
		setVisible(true)
	}

	const projectClick = () => {
		setProject(true)
		setAbout(false)
		setContact(false)
		setVisible(true)
	}

	const contactClick = () => {
		setContact(true)
		setProject(false)
		setAbout(false)
		setVisible(true)
	}

	return(
		<Hero.Footer>
			<Tabs fullwidth={true} className="is-boxed">
				<Tabs.Tab onClick={aboutClick} active={visible && aboutVisible ? true:false}>
					About Me
				</Tabs.Tab>
				<Tabs.Tab onClick={projectClick} active={visible && projectVisible ? true:false}>
					Projects
				</Tabs.Tab>
				<Tabs.Tab onClick={contactClick} active={visible && contactVisible ? true:false}>
					Contact
				</Tabs.Tab>
			</Tabs>
		</Hero.Footer>
	)
}

export default HeroFooter;