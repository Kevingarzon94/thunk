const FETCH_START = "start"
const FETCH_SUCCESS = "start"
const FETCH_ERROR = "start"

const fetchStart = () => ({
    type: FETCH_START,
})

const fetchSuccess = () => ({
    type: FETCH_SUCCESS,
})

const fetchError = error => ({
    type: FETCH_ERROR,
})

const url = "https://jsonplaceholder.typicode.com/users";

export default payload =>
async (dispatch, getState)=>{
    dispatch (fetchStart())
    try {
      const result = await fetch(url)
      const json = await result.json()
      dispatch(fetchSuccess(json))
      console.log(json)  
    } catch (error) {
        
    }
}