export default class Cart {
    constructor(data = {}) {
        this.state = data;

        // this.amount = 0;

        this.render();

    }

    getTemplate() {
        return `
            <li class="cart">
                    
                <div class="cart-img">
                <img src="${this.state.images[0]}" alt="${this.state.category}" height="40">
                </div>
                
                <div class="block-cart-title">
                <h1 class="cart-title text-cart-list">${this.state.title}</h1>
                </div>
                
                <section class="cart-block">
                <div class="amount-product">
                    <button type="button">
                    <i class="bi bi-plus-circle"></i>
                    </button>
            
                    <p class="text-cart-list">1</p>
            
                    <button type="button">
                    <i class="bi bi-dash-circle"></i>
                    </button>
                </div>
                
                <div class="price-title">
                    <p class="text-cart-list">${this.state.price}</p>
                </div>
                
                <div class="delete-title">
                    <button type="button">
                    <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
                </section>
                
            </li>
        `
        // ${this.state.images[0]}
        // ${this.state.title}
        // ${this.state.price}
    }

    render() {
        const wrapper = document.createElement("div");
        
        wrapper.innerHTML = this.getTemplate();

        // помещаем элемент в наш обьект
        this.element = wrapper.firstElementChild;
    }
}