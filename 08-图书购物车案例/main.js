const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-09',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-02',
				price: 50.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-03',
				price: 128.00,
				count: 1
			}
		]
	},
	methods: {
		// getFinalPrice(price){
		// 	return '￥'+ price.toFixed(2)
		// }
		increment(index){
			this.books[index].count++
		},
		decrement(index){
			// 最多减到1，为0时可以直接移除
			this.books[index].count--
		},
		removeHandle(index){
			this.books.splice(index,1)
		}
	},
	computed:{
		totalPrice(){
			let result = 0;
			// 1.普通的for循环
			// for(let i = 0;i < this.books.length;i++){
			// 	result += this.books[i].price
			// }
			
			// 2.for(let i in this.books)
			// for(let i in this.books){
			// 	result += this.books[i].price
			// }
			
			// 3.for(let i of this.books)
			// 更加快速
			// for(let item of this.books){
			// 	result += item.price * item.count
			// }
			
			// return result;
			
			// reduce
			return this.books.reduce(function(pre,book){
				return pre + book.price * book.count
			},0)
		}
	},
	filters: {
		// 
		showPrice(price){
			return '￥'+ price.toFixed(2)
		}
	}
})


