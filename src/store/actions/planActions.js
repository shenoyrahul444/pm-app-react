export const createPlan = (plan) => {
    
    return (dispatch,getState,{getFirebase,getFirestore})  => {
        // Making async calls 
        const firestore = getFirestore();
        
        firestore.collection('plans').add({
                  
                    ...plan,
                    current_contribution:plan.periodic_budget,
                    remaining_contribution: plan.amount - plan.periodic_budget,
                    authorFirstName: "Rahul",
                    authorLastName: "Shenoy",
                    authorId : 12345,
                    createdAt : new Date()

                }).then(() =>  {
                        dispatch({  type:'CREATE_PLAN', plan     });
                }).catch((err)=> {       // In case of error in database 
                    // Continuing with the dispatch
                    dispatch({  type:"CREATE_PLAN_ERROR",  err    });
                    console.log("Handle Error");
                    });
    }
};
export const deletePlan = (id) => {

    return (dispatch,getState,{getFirebase,getFirestore})  => {

        // Making async delete plan 
        const firestore = getFirestore();
        firestore.collection('plans').doc(id).delete()
                        .then(()  => {
                                dispatch({  type:'DELETE_PLAN', id   });
                                    })
    }
    // return {}
//     return (dispatch,getState,{getFirebase,getFirestore}) => {
// const firestore = getFirestore();
//         firestore.collection('plans').remove({})
//     }
}