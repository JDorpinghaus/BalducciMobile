function removeFromCart(event)
    {
    items = JSON.parse(LocalStorage.getItem('items'));
        
    localStorage.setItem('items', items)
    }