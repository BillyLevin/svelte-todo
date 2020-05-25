<script>
	import AddTodo from './AddTodo.svelte';
	import TodoContent from './TodoContent.svelte';
	import { todos } from './store.js';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
</script>

<main>
	<h1>Svelte Todo</h1>

	<AddTodo />

	<article>
		<ul>
			{#each $todos as todo (todo.id)}
				<li
					class="todo"
					animate:flip={{ duration: 200 }}
					in:fade={{ duration: 400 }}>
					<TodoContent currentTodo={todo} />
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

	ul {
		list-style: none;
		text-align: left;
		min-width: 20rem;
	}

	.todo {
		width: 100%;
		background-color: var(--primaryGrey);
		padding: 1rem;
		color: var(--primaryDark);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.todo:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			font-size: 2.5rem;
			margin: 2rem 0;
		}
	}
</style>
