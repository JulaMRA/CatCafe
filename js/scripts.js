 function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }
    function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }

    function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
  }

  function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
  }

  // Automatyczne zamykanie sidebaru po kliknięciu linku
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      hideSidebar();
    });
  });