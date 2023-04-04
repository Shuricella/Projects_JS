export default class Header {
    constructor() {
        this.render();

        this.addEventListenersCart();
    }

    getTemplate() {
        return `
            <section class="header-components">
                <h1 class="header-text-onlstore">Online Store</h1>
                
                <a href="#" class="header-cart">
                    <div class="header-cart-bloc">
                        <div class="header-cart-bloc-resicle"><i class="bi bi-cart"></i></div>
                        <p class="header-cart-bloc-text">CART</p>
                    </div>
                </a>
            </section>
        `;
    }

    render() {
        const wrapper = document.createElement("div");
        
        wrapper.innerHTML = this.getTemplate();

        // помещаем элемент в наш обьект
        this.element = wrapper.firstElementChild;
    }

    addEventListenersCart() {
        const orderButton = this.element.querySelector(".header-cart");
        
        orderButton.addEventListener("click", event => {
            this.dispatchEvent();
        })
    }

    dispatchEvent() {
        const cartsListEvent = new CustomEvent("cartslistevent");

        this.element.dispatchEvent(cartsListEvent);
    }
}