<script>
	import SideColumn from './SideColumn.svelte';
	import MainColumn from './MainColumn.svelte';

	export const sideColumn = [
		{
			type: 'contact',
			label: 'Contact',
			details: [
				{
					subcategory: 'About me',
					contactDetails: [
						{
							text: '17. May 1993',
						},
						{
							text: 'DE: Mother tongue',
							icon: 'language'
						},
						{
							text: 'EN: Fluent',
							icon: 'language'
						},
						{
							text: 'FR/IT: Rudimentary',
							icon: 'language'
						},
						{
							text: 'Tann, ZH',
							icon: 'location',
						},
					],
				},
				{
					subcategory: 'Find me online',
					contactDetails: [
						{
							isLink: true,
							type: 'email',
							text: 'luca.salzani@gmail.com',
							icon: 'email',
						},
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
		{
			type: 'aboutcv',
			label: 'About this CV',
			details: [
				{
					qrCode: 'qr-code.png',
					url: 'https://cv-elte.vercel.app/',
					description: 'Reading this CV on paper? Get the latest version online. Fully printable. Built with Svelte, deployed with Vercel.',
					version: 'v0.1'
				}
			]
		}
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
					description: 'Bachelor thesis: "Stücklistenmanagement für Maschinen" - mark 6.0. Specialization Software Engineering and Application Design.',
				},
				{
					title: 'Technical Vocational (BM2)',
					subtitle: 'Berufsbuildungszentrum Uster',
					dates: '08/2012 — 06/2014',
					location: 'Uster, ZH',
					description: 'Part time after apprenticeship. Graduated with a mark of 4.9',
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
