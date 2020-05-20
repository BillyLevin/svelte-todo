import { writable } from 'svelte/store';

const stored = localStorage.getItem('todos');
const todosArr = stored ? JSON.parse(stored) : [];

export const todos = writable(todosArr);
