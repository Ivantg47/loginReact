export const usuarioReducer = (state=[], action) => {

    switch (action.type) {
        case 'agregar':
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime()
                }
            ]
        case 'eliminar':
            return state.filter(user => user.id !== action.payload)
        default:
            return state;
    }
}