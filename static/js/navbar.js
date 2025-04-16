document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const toggleBtn = document.getElementById('toggleSidebar');
  
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  });
  