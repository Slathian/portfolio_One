export const increment = (numberValue) => {
    return (dispatch) => {
        dispatch({
        type: 'INCREMENT',
        payload: numberValue
        })
    }
}

export const decrement = (numberValue) => {
    return (dispatch) => {
        dispatch({
        type: 'DECREMENT',
        payload: numberValue
        })
    }
}

