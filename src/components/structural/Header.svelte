<script>
	export const name = 'Luca Salzani';
	const summaryLines = [
		'Adaptable and pragmatic full stack developer with focus on .NET backend technologies. Fast learner with wide range of industry experience. Enthusiastic about DevOps and Quality Assurance',
	];
</script>

<style>
	#header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		margin-bottom: var(--vertical-space-between-sections);
	}

	#my-name {
		text-transform: uppercase;
		color: var(--accent-color);
		font-family: var(--accent-font);
		font-size: 3em;
		margin: 0;
	}

	.summary {
		width: 78%;
		margin-top: 5px;
		font-size: 1.05em;
		font-weight: 300;
		font-family: var(--accent-font);
		line-height: 1.5em;
		color: #000;
	}
</style>

<div id="header">
	<h1 id="my-name">{name}</h1>
	<div class="summary">
		{#each summaryLines as line, i}
			<div class="summary-line-{i}">
				{@html line}
			</div>
		{/each}
	</div>
</div>
