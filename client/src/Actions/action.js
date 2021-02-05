async function getSubtotal(curTotal, price){
  const url = '/subtotal';
  let data = {
    total: curTotal,
    price: price
  }
  const request = new Request(url, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });

  try{
    const res = await fetch(request)
    if(res.status === 200){
      return await res.json()
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



async function checkout(subtotal, discount, regionCode){
  const url = '/checkout';
  let data = {
    total: subtotal,
    discount: discount,
    region: regionCode
  }
  const request = new Request(url, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });

  try{
    const res = await fetch(request)
    if(res.status === 200){
      return await res.json()
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

export { getSubtotal, checkout };