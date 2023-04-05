export default class CartsList {
    constructor() {
        this.carts = [];

        this.render();

        this.addEventListenersClose();

    }

    getTemplate() {
        return `
            <section class="wrapper-cart-list">

                <header class="header-close">
                    <a href="#" data-element="close-carts-list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-x-octagon" viewBox="0 0 16 16">
                        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </a>
                </header>
                
                <main>
                    <ul class="carts-list">
            
                    <li class="cart">
            
                        <div class="cart-img">
                        <img src="https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg" alt="laptop" height="40">
                        </div>
                        
                        <div class="block-cart-title">
                        <h1 class="cart-title text-cart-list">Монитор 23.8\" Asus TUF Gaming VG249Q1A (90LM06J1-B01170) + Asus TUF M3 USB (90MP01J0-B0UA00) у подарунок!</h1>
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
                            <p class="text-cart-list">28999</p>
                        </div>
                        
                        <div class="delete-title">
                            <button type="button">
                            <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                        </section>
                        
                    </li>
            
                    <li class="cart">
            
                        <div class="cart-img">
                        <img src="https://content1.rozetka.com.ua/goods/images/big_tile/6151372.jpg" alt="laptop" height="40">
                        </div>
                        
                        <div class="block-cart-title">
                        <h1 class="cart-title text-cart-list">Монитор 23.8\" Asus TUF Gaming VG249Q1A (90LM06J1-B01170) + Asus TUF M3 USB (90MP01J0-B0UA00) у подарунок!</h1>
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
                            <p class="text-cart-list">28999</p>
                        </div>
                        
                        <div class="delete-title">
                            <button type="button">
                            <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                        </section>
                        
            
                    </li>
            
                    <li class="cart">
            
                        <div class="cart-img">
                        <img src="https://content2.rozetka.com.ua/goods/images/big/21329737.jpg" alt="laptop" height="40">
                        </div>
                        
                        <div class="block-cart-title">
                        <h1 class="cart-title text-cart-list">Звуковая карта Asus Xonar SE (90YA00T0-M0UA00)</h1>
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
                            <p class="text-cart-list">1600</p>
                        </div>
                        
                        <div class="delete-title">
                            <button type="button">
                            <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                        </section>
                        
            
                    </li>

                    <li class="cart">
  
                        <div class="cart-img">
                        <img src="https://content2.rozetka.com.ua/goods/images/big/21329737.jpg" alt="laptop" height="40">
                        </div>
                        
                        <div class="block-cart-title">
                        <h1 class="cart-title text-cart-list">Звуковая карта Asus Xonar SE (90YA00T0-M0UA00)</h1>
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
                            <p class="text-cart-list">1600</p>
                        </div>
                        
                        <div class="delete-title">
                            <button type="button">
                            <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                        </section>
                        
            
                    </li>

                    <li class="cart">
  
                        <div class="cart-img">
                        <img src="https://content2.rozetka.com.ua/goods/images/big/21329737.jpg" alt="laptop" height="40">
                        </div>
                        
                        <div class="block-cart-title">
                        <h1 class="cart-title text-cart-list">Звуковая карта Asus Xonar SE (90YA00T0-M0UA00)</h1>
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
                            <p class="text-cart-list">1600</p>
                        </div>
                        
                        <div class="delete-title">
                            <button type="button">
                            <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                        </section>
                        
            
                    </li>

                    <li class="cart">
  
                        <div class="cart-img">
                        <img src="https://content2.rozetka.com.ua/goods/images/big/21329737.jpg" alt="laptop" height="40">
                        </div>
                        
                        <div class="block-cart-title">
                        <h1 class="cart-title text-cart-list">Звуковая карта Asus Xonar SE (90YA00T0-M0UA00)</h1>
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
                            <p class="text-cart-list">1600</p>
                        </div>
                        
                        <div class="delete-title">
                            <button type="button">
                            <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                        </section>
                        
            
                    </li>
                    
                    
                    </ul>
                </main>
                
                <footer>
            
                    <div class="cart-total">
                    <h2 class="text-cart-list">Total:</h2>
                    <p class="text-cart-list" data-element="total">28999</p>
                    </div>
                
                    <div class="order-button">
                    <button class="text-cart-list">ORDER</button>
                    </div>
                </footer>
        
            </section>

            
        `;
    }

    render() {
        const wrapper = document.createElement("div");
        
        wrapper.innerHTML = this.getTemplate();

        // помещаем элемент в наш обьект
        this.element = wrapper.firstElementChild;
    }

    addEventListenersClose() {
        const closeButton = this.element.querySelector('[data-element="close-carts-list"]');
        
        closeButton.addEventListener("click", event => {
            
            this.dispatchEvent();
        })
    }

    dispatchEvent() {
        const closeCartsListEvent = new CustomEvent("closecartslistevent");
        
        this.element.dispatchEvent(closeCartsListEvent);
    }
    
}