<script>
	import SideColumn from './SideColumn.svelte';
	import MainColumn from './MainColumn.svelte';

	export const sideColumn = [
		{
			type: 'contact',
			label: 'Contact',
			details: [
				{
					subcategory: 'Say hi',
					contactDetails: [
						{
							isLink: true,
							type: 'email',
							text: 'luca.salzani@gmail.com',
							icon: 'email',
						},
						// {
						// 	isLink: true,
						// 	type: 'phone',
						// 	text: '303-909-1445',
						// 	icon: 'phone',
						// },
						{
							text: 'Tann, ZH',
							icon: 'location',
						},
					],
				},
				{
					subcategory: 'Find me online',
					contactDetails: [
						// {
						// 	isLink: true,
						// 	type: 'web',
						// 	url: 'bit.ly/2vJ0owX',
						// 	text: 'theresamorelli.com',
						// },
						{
							isLink: true,
							type: 'web',
							url: 'https://github.com/LucaSalzani',
							text: 'github.com/LucaSalzani',
							icon: 'github',
						},
						{
							isLink: true,
							type: 'web',
							url: 'https://www.linkedin.com/in/luca-salzani-21351394/',
							text: 'linkedin.com/in/luca-salzani-21351394/',
							icon: 'linkedin',
						},
					],
				},
			],
		},
		{
			type: 'skills',
			label: 'Skills',
			details: [
				'C#',
				'Angular',
				'Clean Code',
				'CI/CD',
				'Scrum',
				'WPF',
				'PostgreSQL',
				'TypeScript',
				'HTML',
				'CSS',
				'Git',
				'PowerShell',
				'Java',
			],
		},
		// {
		// 	type: 'simple-details',
		// 	label: 'Projects',
		// 	details: [
		// 		{
		// 			title: 'Hello Pizza Truck',
		// 			url: 'http://bit.ly/2VXTVJ3',
		// 			link: 'hellopizzatruck.com',
		// 			description:
		// 				'Static site for selling food truck. Built with Gatsby, React hooks, and Slick carousel.',
		// 		},
		// 		{
		// 			title: 'Newsmash',
		// 			url: 'http://bit.ly/2Ix2sKW',
		// 			link: 'newsmashed.herokuapp.com',
		// 			description:
		// 				'Data visualization for the news. Integrated three external APIs with React/Redux app and PostgreSQL.',
		// 		},
		// 		{
		// 			title: 'Svelte Resume',
		// 			url: 'bit.ly/38E1FCO',
		// 			link: 'bit.ly/svelte-resume',
		// 			description:
		// 				'Flexible and customizable PDF resume template built with Svelte.',
		// 		},
		// 	],
		// },
	];
	export const mainColumn = [
		{
			type: 'full-details',
			label: 'Experience',
			details: [
				{
					title: 'Software Engineer',
					subtitle: 'Zühlke Engineering AG',
					dates: `8/2018 — ongoing`,
					location: 'Schlieren, ZH',
					description: 'Software Engineer in multiple roles for high profile clients',
					list: [
						'Lead a developer team in a SAFe project setup in the banking industry (C#, Angular, Jenkins, Octopus)',
						'Created a webapp in a small two people project in health and insurance (Angular, GraphQL, Azure Devops)',
						'Worked on a Human-Machine-Interface application in the machine industry (WPF, PostgreSQL, TeamCity)',
					],
				},
				{
					title: 'IT Infrastructure Engineer',
					subtitle: 'Baumann Federn AG',
					dates: '8/2008 — 8/2015',
					location: 'Ermenswil, SG',
					description: 'Apprenticeship and infrastructure projects',
					list: [
						'Several assignments in different european countries',
						'Took part and lead small and medium sized infrastructure projects like Windows Server migrations, VoIP and data backup.',
						'Apprenticeship in coputer science with emphasis on system technology. Graduated with 5.2.',
					],
				},
				// {
				// 	title: 'Math Fellow, Americorps',
				// 	subtitle: 'Denver Public Schools',
				// 	dates: '2017 — 2018',
				// 	location: 'Denver, CO',
				// 	description: 'Middle school math intervention program',
				// 	list: [
				// 		'Improved academic outcomes for a diverse student population by creating and teaching lesson plans that included original worksheets and activities.',
				// 		'Developed a positive motivation system to encourage on-task behavior, teamwork, and delaying of rewards.',
				// 		'Launched and led HTML coding enrichment class with Galvanize students.',
				// 		// • Taught small-group 6th grade math intervention, writing and delivering original lessons.
				// 		// • Managed behavior and relationships with a positive motivation system, restorative conversations, and supplemental tutoring.
				// 		// • Facilitated an elective with Galvanize where students learned HTML and built websites (deployed and hosted by Galvanize).
				// 	],
				// },
				// {
				// 	title: 'Technical Writer',
				// 	subtitle: 'KBC Advanced Technologies',
				// 	dates: '2014 — 2015',
				// 	location: 'Denver, CO',
				// 	description: 'Oil refinery operations manuals',
				// 	list: [
				// 		'Produced high quality training manuals that included written content and Visio drawings, synthesizing information from various sources.',
				// 	],
				// },
			],
		},
		{
			type: 'full-details',
			label: 'Education',
			details: [
				{
					title: 'Bachelor Computer Science',
					subtitle: 'Hochschule für Technik Rapperswil (today OST)',
					dates: '09/2015 — 08/2018',
					location: 'Rapperswil, SG',
					// todo text
				},
				{
					title: 'Technical Vocational (Berufsmaturität)',
					subtitle: 'Berufsbuildungszentrum Uster',
					dates: '08/2012 — 06/2014',
					location: 'Uster, ZH',
				},
			],
		},
	];
</script>

<style>
	div {
		display: flex;
		justify-content: space-between;
		flex-direction: var(--column-order);
		margin: 0 var(--horizontal-offset);
	}
</style>

<div class="main-body">
	<MainColumn sections={mainColumn} />
	<SideColumn sections={sideColumn} />
</div>
