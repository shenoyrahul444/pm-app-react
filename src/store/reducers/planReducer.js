const initState = {
    plans : [
        {id:'1',title:'Harley Davidson',content: 'Buying a Harley Davidson IronRod 883'},
        {id:'2',title:'Audi A8',content: 'Sleek car with amazing style'},
        {id:'3',title:'House',content: 'Buying an apartment in the US'}
    ]
}
const planReducer = (state = initState,action) => {
    
    switch(action.type){
        case "CREATE_PLAN" : 
            console.log('Created PLAN',action.plan);
            return state;
            
    
        case "CREATE_PLAN_ERROR" : 
            console.log("Created PLAN ERROR");
            return state;
            
    
        default:
            return state;

    }
}

export default planReducer;

