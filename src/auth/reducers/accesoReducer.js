export const accesoReducer = (state={}, action) => {

    switch (action.type) {
        case 'acceso':
            
            return {
                isAuth: true,
                user: action.payload
            };
        case 'cerrar':
            
            return {
                isAuth: false
            };
        default:
            return state;
    }
}