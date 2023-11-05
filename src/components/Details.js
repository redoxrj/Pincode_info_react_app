import React from 'react'
import { Heading } from '@chakra-ui/react'

const Details = ({details}) => {
  return (
    <div className='details button-85'>
        <Heading size={'xl'} as='h1' >post code :  <span style={{color:'crimson'}}>{details['post code']}</span></Heading>
        <Heading size={'lg'}>country : <span style={{color:'crimson'}}>{details.country}</span></Heading>
        <Heading size={'lg'}>country abbreviation  :  <span style={{color:'crimson'}}>{details['country abbreviation']}</span></Heading>
        <Heading className='places'  size={'lg'}>Places </Heading>
        <hr />
        <div className='t-grid'>
        <table >
            <thead>
                <tr>
                    <th>place name</th>
                    <th>longitude</th>
                    <th>state</th>
                    <th>state abbreviation</th>
                    <th>latitude</th>
                </tr>
            </thead>
            <tbody>
                {details.places.map((item)=>(
                    
                    <tr key={item['place name']}>
                        <td>{item['place name']}</td>
                        <td>{item.longitude}</td>
                        <td>{item.state}</td>
                        <td>{item['state abbreviation']}</td>

                        <td>{item.latitude}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        </div>

    </div>
  )
}

export default Details
