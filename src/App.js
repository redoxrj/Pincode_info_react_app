import { useEffect, useState } from 'react';
import Details from './components/Details';
import Search from './components/Search';
import './styles/app.scss';
import './styles/mediaQuery.scss';
import axios from 'axios'
import Loader from './components/Loader'
import ErrorComponent from './components/ErrorComponent'

function App() {
  const [pincode, setPincode] = useState('400093') 
  const [details, setDetails] = useState({})
  const [query, setQuery] = useState('400093')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getDetails =async()=>{
    try {
      const {data} = await axios.get(`https://api.zippopotam.us/in/${query}`)
      // console.log(data)
      setDetails(data)
      setLoading(false)
      setError(false)

      
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)

      
    }
   


  }
  useEffect(() => {
    getDetails()
   
  },[query,error]);

  // if(error) {
  //   return <ErrorComponent/>
  // }
  return (
    <>
    <h1 id='title' ><span style={{color:'crimson'}}>Zip Code</span> Information App</h1>
    <Search setPincode={setPincode} setQuery={setQuery} query={query} pincode={pincode} setLoading={setLoading}/>
    {loading?<Loader/> :
    <>
    {/* <Details details={details}/> */}
    {error? <ErrorComponent message={`No Details Found`}/> : <Details details={details}/>}
    </>
  }
  </>
   
  
  );
}

export default App;
