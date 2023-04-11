const confirmButton = document.querySelector('button');
const modal = document.querySelector('sf-modal');

modal.addEventListener('confirm', () => {
    console.log('Confirmed...');
});

modal.addEventListener('cancel', () => {
    console.log('Cancelled...');
});

confirmButton.addEventListener('click', () => {
    if(!modal.isOpen){
        modal.open();
        console.log('Opening...')
    }
});