const reducer = (state='light',action) => {

    if (action.type==="toggle"){
        if(state==='light'){
            return 'dark'
        }
        else{
            return 'light'
        }
    }
    else{
        return state
    }
}

export default reducer;