export default class FiltersList {
    constructor() {
        this.render();

        this.addEventListeners();
    }

    getTemplate() {
        return `
            <section>

                <div class="wrapper-filters-list">

                    <section class="block-slider">
                        <h2 class="block-slider-text">Prise</h2>
                
                        <section class="wrapper-slider">
                            <input type="range" class="form-range-slider" min="0" max="85000"  step="1000" id="customRange1">
                    
                            <div class="block-slider-price">
                                <div class="slider-price"><p class="slider-number">0 UA</p></div>
                                <div class="slider-price"><p class="slider-number">85000 UA</p></div>
                            </div>
                        </section>
                    </section>
            
            
                    <section class="category-filters-list">
            
                        <h2 class="block-category-brand">Category</h2>
                
                        <form action="#">
                
                            <ul class="blocks-cat-list" data-category-list="category">
                            
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-category-monitors" class="cursor-filter-list" name="category" value="monitors">
                                    <label for="blocks-category-monitors" class="cursor-filter-list none-style-filters text-color-filters">Monitors</label>
                                </li>
                                
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-category-laptops" class="cursor-filter-list" name="category" value="category=laptops">
                                    <label for="blocks-category-laptops" class="cursor-filter-list none-style-filters text-color-filters">LapTops</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-category-video-cards" class="cursor-filter-list" name="category" value="category=video_cards">
                                    <label for="blocks-category-video-cards" class="cursor-filter-list none-style-filters text-color-filters">Video cards</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-category-gaming-keyboards" class="cursor-filter-list" name="category" value="category=gaming_keyboards">
                                    <label for="blocks-category-gaming-keyboards" class="cursor-filter-list none-style-filters text-color-filters">Gaming keyboards</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-category-computer-mouse" class="cursor-filter-list" name="category" value="category=computer_mouse">
                                    <label for="blocks-category-computer-mouse" class="cursor-filter-list none-style-filters text-color-filters">Computer mouse</label>
                                </li>
                        
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-category-ssd" class="cursor-filter-list" name="category" value="category=ssd">
                                    <label for="blocks-category-ssd" class="cursor-filter-list none-style-filters text-color-filters">SSD</label>
                                </li>
                        
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-category-sound-cards" class="cursor-filter-list" name="category" value="category=sound_cards">
                                    <label for="blocks-category-sound-cards" class="cursor-filter-list none-style-filters text-color-filters">Sound cards</label>
                                </li>
                        
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-category-ram" class="cursor-filter-list" name="category" value="category=ram">
                                    <label for="blocks-category-ram" class="cursor-filter-list none-style-filters text-color-filters">RAM</label>
                                </li>
                            </ul>
                
                        </form>
            
                    </section>
            
            
                    <section class="brand">
            
                        <h2 class="block-category-brand strip">Brand</h2>
                
                        <form action="#">
                
                            <ul class="blocks-cat-list" data-brand-list="brand">
                
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-asus" class="cursor-filter-list" name="brand" value="brand=asus">
                                    <label for="blocks-brand-asus" class="cursor-filter-list none-style-filters text-color-filters">Asus</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-acer" class="cursor-filter-list" name="brand" value="brand=acer">
                                    <label for="blocks-brand-acer" class="cursor-filter-list none-style-filters text-color-filters">Acer</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-apple" class="cursor-filter-list" name="brand" value="brand=apple">
                                    <label for="blocks-brand-apple" class="cursor-filter-list none-style-filters text-color-filters">Apple</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-dell" class="cursor-filter-list" name="brand" value="brand=dell">
                                    <label for="blocks-brand-dell" class="cursor-filter-list none-style-filters text-color-filters">Dell</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-dynamode" class="cursor-filter-list" name="brand" value="brand=dynamode">
                                    <label for="blocks-brand-dynamode" class="cursor-filter-list none-style-filters text-color-filters">Dynamode</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-gigabyte" class="cursor-filter-list" name="brand" value="brand=gigabyte">
                                    <label for="blocks-brand-gigabyte" class="cursor-filter-list none-style-filters text-color-filters">Gigabyte</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-kingston" class="cursor-filter-list" name="brand" value="brand=kingston">
                                    <label for="blocks-brand-kingston" class="cursor-filter-list none-style-filters text-color-filters">Kingston</label>
                                </li>
                    
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-lenovo" class="cursor-filter-list" name="brand" value="brand=lenovo">
                                    <label for="blocks-brand-lenovo" class="cursor-filter-list none-style-filters text-color-filters">Lenovo</label>
                                </li>
                        
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-logitech" class="cursor-filter-list" name="brand" value="brand=logitech">
                                    <label for="blocks-brand-logitech" class="cursor-filter-list none-style-filters text-color-filters">Logitech</label>
                                </li>
                        
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-msi" class="cursor-filter-list" name="brand" value="brand=msi">
                                    <label for="blocks-brand-msi" class="cursor-filter-list none-style-filters text-color-filters">MSI</label>
                                </li>
                        
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-benq" class="cursor-filter-list" name="brand" value="brand=benq">
                                    <label for="blocks-brand-benq" class="cursor-filter-list none-style-filters text-color-filters">BenQ</label>
                                </li>
                        
                                <li class="blocks-cat-br">
                                    <input type="checkbox" id="blocks-brand-a4tech" class="cursor-filter-list" name="brand" value="brand=a4tech">
                                    <label for="blocks-brand-a4tech" class="cursor-filter-list none-style-filters text-color-filters">A4Tech</label>
                                </li>
                
                            </ul>
                
                        </form>
            
                        <div class="block-line"></div>
            
                    </section>
            
            
                    <div class="block-slider-rating">
                        <h2 class="block-slider-text">Rating</h2>
                
                        <section class="wrapper-slider">
                            <input type="range" class="form-range-slider" min="0" max="5"  step="1" id="customRange1">
                    
                            <div class="block-slider-price">
                                <div class="slider-rating"><p class="slider-number">0</p></div>
                                <div class="slider-rating"><p class="slider-number">5</p></div>
                            </div>
                        </section>
                    </div>
                </div>
                                                                
                <section class="wrapper-butto-clear">
                    <button type="button" class="butto-clear">CLEAR ALL FILTERS</button>
                </section>

            </section>
        `;
    }

    render() {
        const wrapper = document.createElement("div");

        wrapper.innerHTML = this.getTemplate();

        // помещаем элемент в наш обьект
        this.element = wrapper.firstElementChild;
    }

    addEventListeners() {
        const categoryList = this.element.querySelector('[data-category-list="category"]');
        // const brandList = this.element.querySelector('[data-brand-list="brand"]');
        
        categoryList.addEventListener("click", event => {
            const filtersCategory = event.target.closest('.blocks-cat-br input');
            
            if(filtersCategory === null) return;
             
            let stateElement = filtersCategory.checked;
            let block = "category";
            let filtersName = filtersCategory.value;
            
            this.dispatchEvent(block, filtersName, stateElement);
        });
    }

    dispatchEvent(block, filtersName, stateElement) {
        const customEvent = new CustomEvent("category-brand", {detail:{nameBlock:block, filters:filtersName, state:stateElement}});

        this.element.dispatchEvent(customEvent);
    }
}
