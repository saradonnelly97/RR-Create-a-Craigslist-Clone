import React from 'react'
import Posting from './Posting'
const craigPost = require('./postings')


function Gallery() {
  return (
    <div>
        {
            craigPost.postings.map((data, i)=>{
                return <Posting data={data} key={i}/>

            })
        }
    </div>
  )
}

export default Gallery