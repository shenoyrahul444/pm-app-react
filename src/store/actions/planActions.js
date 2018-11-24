export const createPlan = (plan) => {
    return (dispatch,getState)  => {
        // Making async calls 
        

        // Continuing with the dispatch
        dispatch({
            type:'CREATE_PLAN',
            plan
        })

    }
} 
