import React from 'react'

const Search = ({setPincode,setQuery,query,pincode,setLoading}) => {
    const submitHandler = (e) =>{
        e.preventDefault()
        setQuery(pincode)
        setLoading(true)
        

    }
  return (
    <>
    <form action="" onSubmit={submitHandler}>
        <div className='box'>
    <input type="text" placeholder='Enter zipcode to search' value={pincode} onChange={(e)=>{setPincode(e.target.value)}} />
    <button type='submit' className='button-85' >Search</button>
    </div>
    </form>
    </>
  )
}

export default Search
