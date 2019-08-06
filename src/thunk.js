const FETCH_START = 'start'
const FETCH_SUCCESS = 'success'
const FETCH_ERROR = 'error'

const fecthStart = () => ({
  type: FETCH_START,
})
const fecthSuccess = payload => ({
    type: FETCH_SUCCESS,
    payload,
  })
  const fecthError = error => ({
    type: FETCH_ERROR,
    error,
  })


const url ='https://jsonplaceholder.typicode.com/users/'

export default payload => 
async( dispatch ,getState ) => {
    dispatch(fecthStart())
    try {
        const result = await fetch(url)
        const json = await result.json()
        dispatch(fecthSuccess(json))
        //console.log(json)
    } catch (error) {
        dispatch(fecthError(error))
    }
    
}