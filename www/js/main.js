function addToCart(item)
    {
    if (localStorage.getItem('items') === null)
        {   
        items = [];
        }
    else
        {
        items = JSON.parse(localStorage.getItem('items'));
        }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    window.plugins.toast.showShortBottom('Item added to cart');
    }

var elements = document.getElementsByClassName('cart');
document.getElementById('test').innerHTML = [].slice.call(elements);

for (var i=0;i<elements.length;i++)
    {
    elements[i].addEventListener('click', addToCart('testitem'), false);
    }