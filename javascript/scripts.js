$(function(){
    $( document ).ready(function() {
        fetch('https://tools.simplistic.com/test/products.php').then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then(function (data) {
            renderDatalist(data);
            console.log(data);
        }).catch(function (error) {
            console.warn(error);
        });
        let results = document.querySelector('#results');
        function renderDatalist (data) {
            let datalist = document.createElement('datalist');
            datalist.id = 'results-data';
            results.setAttribute('list', datalist.id);
            let fragment = document.createDocumentFragment();
            for (let result of data) {
                let optionItem = document.createElement('option');
                optionItem.appendChild(
                    document.createElement('strong')
                ).textContent = result.title;
                optionItem.append(
                    ` Precio: ${ result.price } `
                );
                results.appendChild(optionItem);
            fragment.append(optionItem);
            }
            datalist.append(fragment);
            results.after(datalist);
            for (let result of data) {
                let optionItem = document.createElement('option');
                optionItem.appendChild(
                    document.createElement('strong')
                ).textContent = result.title;
                optionItem.append(
                    ` Precio: ${ result.price } `
                );
                results.appendChild(optionItem);
            }
        }
        
        $('#search').click(function() {
            $('.modal-search').slideToggle("slow");
        });
        $('.fa-close').click(function() {
            $('.modal-search').slideToggle("slow");
        });
    });
});