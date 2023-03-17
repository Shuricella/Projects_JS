export default class FiltersList {
    constructor(dataCategories = [], dataBrands = []) {
        this.dataCategories = dataCategories;

        this.dataBrands = dataBrands;

        this.render();

        this.renderCategoriesBrands();

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
                
                            ${this.getCategories()}
                
                        </form>
            
                    </section>
            
            
                    <section class="brand">
            
                        <h2 class="block-category-brand strip">Brand</h2>
                
                        <form action="#">
                
                            ${this.getBrands()}
                
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

    getCategories() {
        return `
            <ul class="blocks-cat-list" data-category-list="category">
                
            </ul>
        `
    }

    getCategoriesTemplate(item, name) {
        return `
            <li class="blocks-cat-br">
                <input type="checkbox" id="blocks-category-${name}" class="cursor-filter-list" name="category" value="${name}">
                <label for="blocks-category-${name}" class="cursor-filter-list none-style-filters text-color-filters">${item}</label>
            </li>
        `
    }

    getBrands() {
        return `
            <ul class="blocks-cat-list" data-brand-list="brand">
                
            </ul>
        `
    }

    getBrandsTemplate(item, name) {
        return `
            <li class="blocks-cat-br">
                <input type="checkbox" id="blocks-brand-${name}" class="cursor-filter-list" name="brand" value="${name}">
                <label for="blocks-brand-${name}" class="cursor-filter-list none-style-filters text-color-filters">${item}</label>
            </li>
        `
    }

    render() {
        const wrapper = document.createElement("div");

        wrapper.innerHTML = this.getTemplate();

        // помещаем элемент в наш обьект
        this.element = wrapper.firstElementChild;
    }

    renderCategoriesBrands() {
        const categori = this.dataCategories.map(item => {
            const name = item.toLowerCase().split(" ").join("_");
            return this.getCategoriesTemplate(item, name);
        }).join("");

        const brand = this.dataBrands.map(item => {
            let name = "";
            // на backend не корректно написано в массиве бренд A4Tech
            if(item === "A4Tech") {name = "a4-tech"}
            else{name = item.toLowerCase().split(" ").join("_");}
            
            return this.getBrandsTemplate(item, name);
        }).join("");
        
        const bodyCategori = this.element.querySelector('[data-category-list="category"]');
        const bodyBrand = this.element.querySelector('[data-brand-list="brand"]');

        bodyCategori.innerHTML = categori;
        bodyBrand.innerHTML = brand;
    }

    update(dataCategories = [], dataBrands = []) {
        // обновим список карточек data
        this.dataCategories = dataCategories;
        this.dataBrands = dataBrands;

        this.renderCategoriesBrands();
    }

    addEventListeners() {
        const categoriesList = this.element.querySelector('[data-category-list="category"]');
        const brandsList = this.element.querySelector('[data-brand-list="brand"]');
        
        categoriesList.addEventListener("click", event => {
            const filtersCategories = event.target.closest('.blocks-cat-br input');
            console.log("event=", event);
            if(filtersCategories === null) return;
             
            let stateElement = filtersCategories.checked;
            let block = "category";
            let filtersName = filtersCategories.value;
            
            this.dispatchEvent(block, filtersName, stateElement);
        });

        brandsList.addEventListener("click", event => {
            const filtersBrands = event.target.closest('.blocks-cat-br input');
            
            if(filtersBrands === null) return;
             
            let stateElement = filtersBrands.checked;
            let block = "brand";
            let filtersName = filtersBrands.value;
            
            this.dispatchEvent(block, filtersName, stateElement);
        });
    }

    dispatchEvent(block, filtersName, stateElement) {
        const customEvent = new CustomEvent("categories-brands", {detail:{nameBlock:block, filters:filtersName, state:stateElement}});

        this.element.dispatchEvent(customEvent);
    }
}
