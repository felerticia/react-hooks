export function taskReducer (state,action) {
    switch (action.type) {
        case 'added' : {
            return [
                ...state,
                {
                    id : action.id,
                    text: action.text
                }
            ]
        }

        case 'deleted' : {
            return state.filter (t => t.id !== action.id)
        }

        default : {
            return state
        }
    }
}