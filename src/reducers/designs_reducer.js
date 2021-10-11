const designs_reducer=(state,action)=>{
    switch(action.type) {
        case "UPDATELIKE":{
            
            let newDesign=state.designsData.map((item)=>{
                if(item.id===action.payload)
                {
                    let newlike=item.like+1
                    return {
                        ...item,
                        like:newlike
                    }
                }
                return item
            })
            localStorage.setItem('data',JSON.stringify(newDesign))
            return{
                ...state,
                designsData:newDesign
            }
        }
        default: return state
    }
}
export default designs_reducer;