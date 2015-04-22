function updatePrice(event)
    {
    if (event.target.name == 'pepperonipizza')
        {
        if (event.target.value == '12')
            {
            document.getElementById('pepperonipizzaprice').innerHTML = '$11.75';
            }
        else
            {
            document.getElementById('pepperonipizzaprice').innerHTML = '$13.90';
            }
        }
    if (event.target.name == 'specialpizza')
            {
            if (event.target.value == '12')
                {
                document.getElementById('specialpizzaprice').innerHTML = '$15.00';
                }
            else
                {
                document.getElementById('specialpizzaprice').innerHTML = '$18.00';
                }
            }
    if (event.target.name == 'meatloverspizza')
        {
        if (event.target.value == '12')
            {
            document.getElementById('meatloverspizzaprice').innerHTML = '$15.00';
            }
        else
            {
            document.getElementById('meatloverspizzaprice').innerHTML = '$18.00';
            }
        }
    }

var elements = document.getElementsByTagName('input');
var radios = [];
for (var i=0; i<elements.length; ++i)
    {
    if (elements[i].type == 'radio')
        {
        radios.push(elements[i]);
        }
    }

for (var i=0; i<radios.length; ++i)
    {
    radios[i].addEventListener('click', updatePrice);
    }

