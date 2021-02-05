async function getSubtotal(curTotal, price){
  const url = '/subtotal';
  const data = {
    total: curTotal,
    price: price
  }
  const request = new Request(url, {
      method: 'GET', 
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });

  try{
    const res = await fetch(request)
    if(res.status === 200){
      const result = await res.json()
      console.log(result)
      return result.newsub
    }
    else{
      console.log("Failed to get the subtotal, status: " + res.status)
      return null
    }
  }
  catch(err){
    throw new Error(err)
  }
}


export { getSubtotal };