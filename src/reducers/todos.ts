var todos = (state: any, action: any) => {
    if (!state)
        state = [];
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            
            ];
        case 'TOGGLE_TODO':
            return state.map((todo:any) => todo.id === action.id ? { completed: !todo.completed, ...todo } : todo)
        default:{
            return state;
        }
            
    }
}
export default todos
