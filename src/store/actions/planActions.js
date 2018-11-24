export const createPlan = (plan) => {
    
    return (dispatch,getState,{getFirebase,getFirestore})  => {
        // Making async calls 
        const firestore = getFirestore();
        
        firestore.collection('plans').add({
                  
                    ...plan,
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
