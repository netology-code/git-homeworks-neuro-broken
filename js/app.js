(() => {
    const subscriptionForm = document.querySelector('#subscription-form');

    subscriptionForm.addEventListener('submit', ev => {
        ev.preventDefault();

        const subpscriptionEmail = subscriptionForm.querySelector('#subscription-email');
        const subpscriptionHelp = subscriptionForm.querySelector('#subscription-help');
        const email = subpscriptionEmail.value.trim();

        if (email === '') {
            subpscriptionHelp.classList.remove('text-hide');
            return;
        }

        if (!email.includes('@')) {
            subpscriptionHelp.classList.remove('text-hide');
            return;
        }
        
        subpscriptionHelp.classList.add('text-hide');

        // TODO: send email simulation:
        setTimeout(() => {
            alert('Вы успешно подписаны на новости');
            subpscriptionEmail.value = '';
        }, 500);
    });
})();