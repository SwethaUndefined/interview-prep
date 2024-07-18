const data = "<h1 style='color : blue;>Some really usefull content</h1>"


import React from 'react'

const changeTheDataInterviewQuestion = () => {
  return (
    <div dangerouslySetInnerHTML={{__html : data}}/>
  )
}

export default changeTheDataInterviewQuestion




// do it in react project, so that it works
