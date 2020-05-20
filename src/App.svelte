<script>
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import AddTodo from './AddTodo.svelte';
	import { todos } from './store.js';

	function deleteTodo(id) {
		$todos = $todos.filter(todo => todo.id !== id);
		localStorage.setItem('todos', JSON.stringify($todos));
	}
</script>

<main>
	<h1>Svelte Todo</h1>

	<AddTodo />

	<article>
		<ul>
			{#each $todos as { task, id } (id)}
				<li
					in:fade={{ duration: 400 }}
					animate:flip={{ duration: 200 }}
					class="todo">
					<span>task: {task}</span>
					<button
						class="delete"
						aria-label="Delete Task"
						on:click={() => deleteTodo(id)}>
						&times;
					</button>
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

	.delete {
		color: var(--danger);
		background: 0;
		border: 0;
		outline: 0;
		border: 2px solid transparent;
		padding: 0 0.25rem;
		font-size: 1.25rem;
		font-weight: 700;
		cursor: pointer;
		border: 2px solid transparent;
	}

	.delete:focus {
		border: 2px solid var(--danger);
	}
</style>
