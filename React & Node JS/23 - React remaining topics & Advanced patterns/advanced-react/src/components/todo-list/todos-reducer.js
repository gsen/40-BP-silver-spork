export default function todosReducer(state, action) {
    const { type, payload = {} } = action;
    switch (type) {
        case "add":
            const { title } = payload;
            return [...state, { completed: false, title, id: crypto.randomUUID() }]
        case "update":
            const { todoId, completed } = payload;
            return state.map((todo) => (todo.id === todoId ? { ...todo, completed } : { ...todo }));
        case "reset":
            return [];
        default:
            return state;
    }
}