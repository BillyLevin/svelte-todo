<script>
	import { todos } from './store.js';

	export let currentTodo;

	let { id, task, done } = currentTodo;

	let editing = false;
	let editInput;

	$: {
		updateDoneStatus(done);
	}

	function deleteTodo() {
		$todos = $todos.filter(todo => todo.id !== id);
	}

	function toggleEditMode() {
		if (editing) {
			saveTodo();
		}

		editing = !editing;
	}

	function saveTodo() {
		const newTask = editInput.value;
		$todos = $todos.map(todo => {
			if (todo.id !== id) return todo;

			return { ...todo, task: newTask };
		});
	}

	function handleKeydown(e) {
		if (e.key === 'Enter') {
			toggleEditMode();
		}
	}

	function updateDoneStatus(done) {
		$todos = $todos.map(todo => {
			if (todo.id !== id) return todo;

			return { ...todo, done };
		});
	}
</script>

{#if editing}
	<div class="form-group">
		<label for={`edit-${id}`}>Edit Task</label>
		<input
			type="text"
			bind:value={task}
			name={`edit-${id}`}
			id={`edit-${id}`}
			bind:this={editInput}
			on:keydown={handleKeydown} />
	</div>
{:else}
	<div>
		<label for={`done-${id}`} class="visually-hidden">
			Toggle Done Status
		</label>
		<input
			class="done-input"
			type="checkbox"
			name={`done-${id}`}
			id={`done-${id}`}
			bind:checked={done} />
		<span class={`task ${done && 'done'}`}>{task}</span>
	</div>
{/if}
<div class="functions">
	<button class="edit" on:click={toggleEditMode}>
		{editing ? 'Save' : 'Edit'}
	</button>
	<button
		type="button"
		class="delete"
		aria-label="Delete Task"
		on:click={deleteTodo}>
		&times;
	</button>
</div>

<style>
	.task {
		font-weight: 700;
	}

	.done {
		text-decoration: line-through;
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

	.functions {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.edit {
		cursor: pointer;
		background: 0;
		border: 0;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 0.75rem;
	}

	.edit:hover {
		text-decoration: underline;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.form-group label {
		font-size: 0.75rem;
	}

	.form-group input {
		padding: 0.5rem;
		border: 1px solid transparent;
		outline: 0;
		transition: all 0.3s;
	}

	.form-group input:focus {
		border: 1px solid var(--primary);
	}

	.visually-hidden {
		position: absolute !important;
		height: 1px;
		width: 1px;
		overflow: hidden;
		clip: rect(1px 1px 1px 1px);
		clip: rect(1px, 1px, 1px, 1px);
		white-space: nowrap;
	}

	.done-input {
		margin-right: 0.5rem;
	}
</style>
