export default class Product{

    constructor(prodId,prodName, category, price=0,totalBuy=1){
        this.prodId = prodId
        this.prodName = prodName
        this.category = category
        this.price = price
        this.totalBuy = totalBuy
        this.subTotal = price * totalBuy
    }

    setPrice(price){
    return price.toString() 

    }

    setTotalBuy(total){
        return total.toString()
    }

    toString(){
        return `id product : ${this.prodId} nama product : ${this.prodName} harga : ${this.setPrice} total : ${this.setTotalBuy} total harga : ${this}`
    }

}