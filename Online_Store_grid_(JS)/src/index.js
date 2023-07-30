// В этой компоненте будет вся логика от всей страницы и другие компоненты
import Header from "./components/header/header.js";
import CardsList from "./components/cards-list/cards-list.js";
import Pagination from "./components/pagination/pagination.js";
import FiltersList from "./components/filters-list/filters_list.js";
import Search from "./components/search/search.js";
import CartsList from "./components/carts-list/carts_list.js";

// import Header from "./header.js";
// import CardsList from "./cards-list.js";
// import Pagination from "./pagination.js";
// import FiltersList from "./filters_list.js";
// import Search from "./search.js";
// import CartsList from "./carts_list.js";

// products?_page=1&_limit=9
const backendUrl = `https://online-store.bootcamp.place/api/`;

export default class OnlineStorePage {
    constructor() {
        // Колличество страничек на листе
        this.pageSize = 9;

        // указываем, что products = [] по умолчанию пустой массив
        this.products = [];
        this.categories = [];
        this.brands = [];
        
        // this.totalElements = 100;
        this.totalPages = 12;
               
        // добавляем параметр "products" к адресу "beckendUrl"
        this.urlProducts = new URL("products", backendUrl);
        this.urlCategories = new URL("categories", backendUrl);
        this.urlBrands = new URL("brands", backendUrl);

        this.urlProducts.searchParams.set("_limit", this.pageSize);
        
        this.components = {};

        this.initComponents();
        this.render();
        this.renderComponents();

        this.initEventListeners();

        this.initEventListenersFilters();

        this.initEventListenersClear();

        this.initEventListenersCartsList();

        this.update(1);

        this.updateCategoriesBrand();
    }

    async loadData(pageNumber) {
        this.urlProducts.searchParams.set("_page", pageNumber);

        const response = await fetch(this.urlProducts);
        const products = await response.json();

        // fetch(url)
        // .then(response => response.json())
        // .then(products => {
        //     console.log("products=", products);
        // });
        
        return products;
    }

    async loadDataCategories() {
        const response = await fetch(this.urlCategories);
        const categories = await response.json();
        
        return categories;
    }

    async loadDataBrands() {
        const response = await fetch(this.urlBrands);
        const brands = await response.json();
        
        return brands;
    }

    async totalElements() {
        let urlTotalPage = new URL(this.urlProducts);

        urlTotalPage.searchParams.delete("_limit");
        urlTotalPage.searchParams.delete("_page");
        
        const response = await fetch(urlTotalPage);
        const products = await response.json();
        
        let totalElements = products.length;
        
        return totalElements;
    }

    async calcTotalPages() {
        const totalElements = await this.totalElements();
        const totalPages = Math.ceil(totalElements / this.pageSize);

        return totalPages;
    }

    getTemplate() {
        return `
            <div class="wrapper-grid">
                <dialog class="modal">
                    <!--Carts list-->
                </dialog>
                
                <header class="item-header">
                    <!--Header component-->
                </header>

                <aside class="item-products" data-element="filtersList">
                    <!-- FiltersList -->
                </aside>

                <section class="item-search">
                    <!-- Item-Search -->
                </section>

                <div class="item-main" data-element="cardsList">
                    <!-- Card List component -->
                </div>

                <div class="item-pagination" data-element="pagination">
                    <!--Pagination component-->
                </div>
            </div>
        `;
    }

    initComponents() {
        // Зададим колличиство элементов в объекте products
       
        // const totalPages = Math.ceil(this.totalElements / this.pageSize);
     
        // const cardsList = new CardsList(this.products.slice(0, this.pageSize));
        
        const header = new Header();
        const cardsList = new CardsList(this.products);
        const pagination = new Pagination({
            activePageIndex: 0,
            totalPages: this.totalPages,
        });
        const filtersList = new FiltersList(this.categories, this.brands);
        const search = new Search();
        const cartsList = new CartsList();
        
        this.components.header = header;
        this.components.cardsList = cardsList;
        this.components.pagination = pagination;
        this.components.filtersList = filtersList;
        this.components.search = search;
        this.components.cartsList = cartsList;
    }

    renderComponents() {
        const header = this.element.querySelector('.item-header');
        const cardsConteiner = this.element.querySelector('[data-element="cardsList"]');
        const paginationConteiner = this.element.querySelector('[data-element="pagination"]');
        const filtersListConteiner = this.element.querySelector('[data-element="filtersList"]');
        const searchConteiner = this.element.querySelector('.item-search');
        const cartsConteiner = this.element.querySelector('.modal');
            
        header.append(this.components.header.element);
        cardsConteiner.append(this.components.cardsList.element);
        paginationConteiner.append(this.components.pagination.element);
        filtersListConteiner.append(this.components.filtersList.element);
        searchConteiner.append(this.components.search.element);
        cartsConteiner.append(this.components.cartsList.element);
    }

    render() {
        const wrapper = document.createElement("div");

        wrapper.innerHTML = this.getTemplate();
        
        // помещаем элемент в наш обьект
        this.element = wrapper.firstElementChild;
    }

    initEventListeners() {
        this.components.pagination.element.addEventListener("page-changed", event => {
            const pageIndex = event.detail;

            this.update(pageIndex + 1);
        })
    }

    initEventListenersFilters() {
        // Фильтрация по categories и brands
        this.components.filtersList.element.addEventListener("categories-brands", event => {
            let nameBlock = event.detail.nameBlock;
            let filters = event.detail.filters;
            let stateElement = event.detail.state;

            console.log("nameBlock=", nameBlock, "filters=", filters, "stateElement=", stateElement);
            
            if(stateElement) {
                
                this.urlProducts.searchParams.append(nameBlock, filters);
            }
            else{
                let listName = this.urlProducts.searchParams.getAll(nameBlock);
                
                this.urlProducts.searchParams.delete(nameBlock);

                listName.map(item =>{
                    if(item != filters) {
                        this.urlProducts.searchParams.append(nameBlock, item);
                    }
                })
            }
            this.components.pagination.setPage(0);
            this.update(1);
        })

         // Фильтрация по слайдеру
        this.components.filtersList.element.addEventListener("range-selected", event => {
            let from = event.detail.value.from;
            let to = event.detail.value.to;
            let filterName = event.detail.filterName;

            if(filterName === "price") {
                this.urlProducts.searchParams.set("price_gte", from);
                this.urlProducts.searchParams.set("price_lte", to);
            }
            if(filterName === "rating") {
                this.urlProducts.searchParams.set("rating_gte", from);
                this.urlProducts.searchParams.set("rating_lte", to);
            }
            
            this.components.pagination.setPage(0);
            this.update(1);
        })

        // Фильтрация по поисковой строке
        this.components.search.element.addEventListener("search", event =>{
            let searchText = event.detail;
            console.log("searchText=", searchText);
            if(searchText != undefined) {
                this.urlProducts.searchParams.set("q", searchText);
            }
            
            this.update(1);
        })
    }

    initEventListenersClear() {
        this.components.filtersList.element.addEventListener("clear-filters", event =>{
        
        this.urlProducts.searchParams.delete("category");
        this.urlProducts.searchParams.delete("brand");

        this.urlProducts.searchParams.delete("price_gte");
        this.urlProducts.searchParams.delete("price_lte");

        this.urlProducts.searchParams.delete("rating_gte");
        this.urlProducts.searchParams.delete("rating_lte");

        this.urlProducts.searchParams.delete("q");
        this.components.search.clearSearch();

        this.components.pagination.setPage(0);
        
        this.update(1);
        });
    }

    initEventListenersCartsList() {
        const dialog = this.element.querySelector("dialog");
        
        this.components.header.element.addEventListener("cartslistevent", event => {
            dialog.showModal();
        })

        this.components.cartsList.element.addEventListener("closecartslistevent", event => {
            dialog.close();
        })

        this.components.cardsList.element.addEventListener("cardeventadd", event => {
            const dataCarts = event.detail;

            

            this.components.cartsList.update(dataCarts);
        })
    }

    async update(pageNumber) {
        // этот метод реализует логику отрисовки
        
        // const start = this.pageSize * pageIndex;
        // const end = start + this.pageSize;
        // const data = this.products.slice(start, end);
        const data = await this.loadData(pageNumber);

        let totalPages = await this.calcTotalPages();
        this.totalPages = totalPages;
                
        this.components.cardsList.update(data);
        this.components.pagination.update(totalPages);
    }

    async updateCategoriesBrand() {
        const dataCategories = await this.loadDataCategories();
        const dataBrands = await this.loadDataBrands();
        
        this.components.filtersList.update(dataCategories, dataBrands);
    }
}