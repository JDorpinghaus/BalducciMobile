function addToCart(event)
    {
    if (localStorage.getItem('items') === null)
        {   
        items = [];
        }
    else
        {
        items = JSON.parse(localStorage.getItem('items'));
        }
    items.push('item');
    localStorage.setItem('items', JSON.stringify(items));
    document.getElementById('test').innerHTML = event.target.value;
    window.plugins.toast.showShortBottom('Item added to cart');
    }

function updatePrice(event)
    {
    if (event.target.value == 12)
        {
        document.getElementById('price').innerHTML = '$10.00';
        }
    else
        {
        document.getElementById('price').innerHTML = '$12.00';
        }
    }


var elements = document.getElementsByClassName('cart');
for (var i=0;i<elements.length;i++)
    {
    elements[i].addEventListener('click', addToCart, false);
    }

var elements = document.getElementsByTagName('input');
for (var i=0;i<elements.length;i++)
    {
    if (elements[i].nodeType == 'radio')
        {
        document.getElementById('test').innerHTML = elements[i];
        elements[i].addEventListener('click', updatePrice, false);
        }
    }