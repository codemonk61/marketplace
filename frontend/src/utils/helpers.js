export const totalItemInCart = (items) => {
    const total = items.reduce((acc, nxt)=> acc + Number(nxt.qty),0)
  return total
}

export const totalPriceInCart = (items) => {
    const total = items.reduce((acc, nxt)=> acc + Number(nxt.qty * nxt.price),0)
  return total.toFixed(2)
}