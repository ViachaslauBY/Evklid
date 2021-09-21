document.addEventListener('DOMContentLoaded', () => {

  const tabButtons = document.querySelectorAll('.tab__button');
  const tabItemsContent = document.querySelectorAll('.tab__item-content');

  tabButtons.forEach((item) => {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (! currentBtn.classList.contains('active')) {
        tabButtons.forEach((item) => {
        item.classList.remove('active');
      });

      tabItemsContent.forEach((item) => {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
      }
    });
  });
});
