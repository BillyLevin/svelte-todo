<script>
	import { todos } from './store.js';

	let task;

	function handleSubmit(e) {
		$todos = [...$todos, { task, id: Date.now(), done: false }];

		task = '';
	}
</script>

<div class="container">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<label for="task">Task</label>
			<input type="text" name="task" id="task" bind:value={task} />
		</div>

		<button type="submit">Add Todo</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		margin-bottom: 4rem;
	}

	form {
		display: flex;
		align-items: flex-end;
		margin: 0 auto;
		justify-content: center;
		border: 2px solid var(--primary);
		padding: 1rem 2rem;
		border-radius: 3px;
	}
	.form-group {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-right: 2rem;
	}

	label {
		font-weight: 700;
		text-transform: uppercase;
		font-size: 1rem;
		margin-bottom: 0.25rem;
		letter-spacing: 1px;
		color: var(--primary);
	}

	input {
		padding: 0.25rem;
		transition: all 0.3s;
		border: 2px solid transparent;
		background-color: var(--primaryGrey);
	}

	input:focus {
		outline: 0;
		border: 2px solid var(--primary);
	}

	button {
		background-color: var(--primary);
		color: #fff;
		border: 0;
		padding: 0.5rem 1rem;
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.3s;
		outline: 0;
	}

	button:hover,
	button:focus,
	button:active {
		background-color: var(--primaryDark);
	}

	@media only screen and (max-width: 600px) {
		form {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			margin: 0 1rem;
		}

		.form-group {
			margin-right: 0;
			margin-bottom: 1rem;
		}
	}
</style>
