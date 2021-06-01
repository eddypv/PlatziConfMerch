const sumTotalPrice = (cart)=>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    return cart.reduce(reducer,0)
}
export default sumTotalPrice