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

        case 'actualizar':
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return { 
                        ...action.payload,
                        pass: user.pass
                     }
                }
                return user
            })
            
        default:
            return state;
    }
}