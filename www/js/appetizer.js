var elements = document.getElementsByName('bacon');
        elements[0].addEventListener('click', updatePrice);

function updatePrice(event)
    {
    if (event.target.name == 'bacon')
        {
        if (event.target.checked == true)
            {
            document.getElementById('garliccheesebreadprice').innerHTML = '$6.00';
            }
        else
            {
        document.getElementById('garliccheesebreadprice').innerHTML = '$5.00';
            }
        }
    }