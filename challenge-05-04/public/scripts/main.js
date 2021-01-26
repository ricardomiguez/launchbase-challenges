/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-04: Database Results Pagination */

const currentPage = location.pathname;
const menuOptions = document.querySelectorAll(".menu-option");

for (let menuOption of menuOptions) {
    if (currentPage.includes(menuOption.getAttribute("href"))) {
        menuOption.classList.add("active");
    }
}

const pagination = document.querySelector(".pagination");

if (pagination) {
    createPagination(pagination);
}

const pageNumbers = document.querySelectorAll(".page-number");
const currentPageNumber = +pagination.dataset.page;

for (let pageNumber of pageNumbers) {
    if (currentPageNumber == pageNumber.getAttribute("value")) {
        pageNumber.classList.add("active");
    }
}

function paginate(selectedPage, totalPages) {
    let pages = [],
        previousPage;

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
        const firstAndLastTwoPages = currentPage <= 2 || currentPage >= totalPages - 1,
            pageBeforeSelectedPage = currentPage >= selectedPage - 1,
            pageAfterSelectedPage = currentPage <= selectedPage + 1;

        if (firstAndLastTwoPages || pageBeforeSelectedPage && pageAfterSelectedPage) {
            if (previousPage && currentPage - previousPage > 2) {
                pages.push("...");
            }

            if (previousPage && currentPage - previousPage == 2) {
                pages.push(previousPage + 1);
            }

            pages.push(currentPage);

            previousPage = currentPage;
        }
    }

    return pages;
}

function createPagination(pagination) {
    const filter = pagination.dataset.filter,
        page = +pagination.dataset.page,
        total = +pagination.dataset.total,
        pages = paginate(page, total);

    let elements = "";

    for (let page of pages) {
        if (String(page).includes("...")) {
            elements += `<span>${page}</span>`;
        } else {
            if (filter) {
                elements += `<a class="page-number" href="?page=${page}&filter=${filter}" value="${page}">${page}</a>`;
            } else {
                elements += `<a class="page-number" href="?page=${page}" value="${page}">${page}</a>`;
            }
        }
    }

    pagination.innerHTML = elements;
}
