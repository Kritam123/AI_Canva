import React from 'react'

const TransfermationPage = ({params}:{params:{id:string}}) => {
  console.log(params.id)
  return (
    <div>{params.id}</div>
  )
}

export default TransfermationPage