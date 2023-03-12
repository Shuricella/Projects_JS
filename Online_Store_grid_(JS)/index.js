// В этой компоненте будет вся логика от всей страницы и другие компоненты
import CardsList from "./cards-list.js";
import Pagination from "./pagination.js";
import FiltersList from "./filters_list.js";

// products?_page=1&_limit=9
const backendUrl = `https://online-store.bootcamp.place/api/`;

export default class OnlineStorePage {
    constructor() {
        // Колличество страничек на листе
        this.pageSize = 9;

        // указываем, что products = [] по умолчанию пустой массив
        this.products = [];
        
        // this.totalElements = 100;
        
        
        
        // добавляем параметр "products" к адресу "beckendUrl"
        // необходимо поменять this.url на this.productsurl
        // будет еще this.Categoryurl и this.Brandurl
        this.url = new URL("products", backendUrl);
        this.url.searchParams.set("_limit", this.pageSize);
        
        this.components = {};

        // this.calcTotalPages();
        this.totalPages = 12;

        this.initComponents();
        this.render();
        this.renderComponents();

        this.initEventListeners();

        this.initEventListenersFilters();

        this.update(1);
    }

    async loadData(pageNumber) {
        this.url.searchParams.set("_page", pageNumber);

        const response = await fetch(this.url);
        const products = await response.json();

        // fetch(url)
        // .then(response => response.json())
        // .then(products => {
        //     console.log("products=", products);
        // });
        
        return products;
    }

                                async totalEl() {
                                    let urlTotalPage = new URL(this.url);

                                    urlTotalPage.searchParams.delete("_limit");
                                    urlTotalPage.searchParams.delete("_page");
                                    // console.log("urlTotalPage=", urlTotalPage);

                                    const response = await fetch(urlTotalPage);
                                    const products = await response.json();
                                    
                                    let totalElements = products.length / 2;
                                    
                                    // console.log("totalEl=", totalElements);
                                    return totalElements;
                                }

                                async calcTotalPages() {
                                    const totalElements = await this.totalEl();
                                    const totalPages = Math.ceil(totalElements / this.pageSize);

                                    // console.log("calcTotalPages=", totalPages);
                                    
                                    
                                    return totalPages;

                                }

    getTemplate() {
        return `
        <div class="wrapper-grid">
            <aside class="item-products" data-element="filtersList">
                <!-- FiltersList -->
            </aside>

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
        
        const cardsList = new CardsList(this.products);
        const pagination = new Pagination({
            activePageIndex: 0,
            totalPages: this.totalPages
        });
        const filtersList = new FiltersList();

        this.components.cardsList = cardsList;
        this.components.pagination = pagination;
        this.components.filtersList = filtersList;
    }

    renderComponents() {
        const cardsConteiner = this.element.querySelector('[data-element="cardsList"]');
        const paginationConteiner = this.element.querySelector('[data-element="pagination"]');
        const filtersListConteiner = this.element.querySelector('[data-element="filtersList"]');
        
        cardsConteiner.append(this.components.cardsList.element);
        paginationConteiner.append(this.components.pagination.element);
        filtersListConteiner.append(this.components.filtersList.element);
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
                                                this.components.filtersList.element.addEventListener("category-brand", event => {
                                                    let nameBlock = event.detail.nameBlock;
                                                    let filters = event.detail.filters;
                                                    let stateElement = event.detail.state;

                                                    console.log("nameBlock=", nameBlock, "filters=", filters, "stateElement=", stateElement);

                                                    if(stateElement) {
                                                        this.url.searchParams.set(nameBlock, filters);
                                                    }
                                                    else{
                                                        this.url.searchParams.delete(nameBlock);
                                                    }
                                                    // this.components.pagination.setPage(0);
                                                    this.update(1);
                                                })
                                            }

    async update(pageNumber) {
        // этот метод реализует логику отрисовки
        
        // const start = this.pageSize * pageIndex;
        // const end = start + this.pageSize;
        // const data = this.products.slice(start, end);
        const data = await this.loadData(pageNumber);
        
        this.components.cardsList.update(data);

        // this.components.pagination.update(7);
    }
}