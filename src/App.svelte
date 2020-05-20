<script>
	import { fly } from 'svelte/transition';
	import AddTodo from './AddTodo.svelte';
	import { todos } from './store.js';
</script>

<main>
	<h1>Svelte Todo</h1>

	<AddTodo />

	<article>
		<ul>
			{#each $todos as { task, id } (id)}
				<li transition:fly={{ x: 200, y: 0 }}>
					task: {task}, id: {id}
				</li>
			{/each}
		</ul>
	</article>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		color: var(--primary);
		text-transform: uppercase;
		font-weight: 300;
		font-size: 4rem;
		position: relative;
		text-align: center;
		margin: 4rem 0;
	}

	article {
		display: flex;
		justify-content: center;
	}
</style>
