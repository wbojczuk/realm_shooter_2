import React from 'react'


export default async function GetData() {

    async function wait(){
        return new Promise(resolve =>{
            setTimeout(()=>{resolve("Resolved")},2000)
        })
    }
    await wait();
    const testData = "TESTDATA"
  return (
    <div>{testData}</div>
  )
}
