document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq__item');
  const faqItemDescription = document.querySelectorAll('.faq-item__description');

  faqItems.forEach((item, index) => {
    item.addEventListener('click', () => {

      faqItemDescription[index].classList.toggle('active');
      item.classList.toggle('active');

      if(faqItemDescription[index].classList.contains('active')) {
        faqItemDescription[index].style.height = `${faqItemDescription[index].scrollHeight}px`;
        faqItemDescription[index].style.visibility = 'visible';
      } else {
        faqItemDescription[index].style.height = `0px`;
        faqItemDescription[index].style.visibility = 'hidden';
      }
    });
  });

  faqItems.forEach((item, index) => {
    item.addEventListener('keyup', (event) => {
      event.preventDefault();

      if (event.keyCode === 13) {
        faqItemDescription[index].classList.toggle('active');
        item.classList.toggle('active');

        if(faqItemDescription[index].classList.contains('active')) {
          faqItemDescription[index].style.height = `${faqItemDescription[index].scrollHeight}px`;
          faqItemDescription[index].style.visibility = 'visible';
        } else {
          faqItemDescription[index].style.height = `0px`;
          faqItemDescription[index].style.visibility = 'hidden';
        }
      }

    });
  });

});
