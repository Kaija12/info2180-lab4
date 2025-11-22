document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');
    
    function performSearch() {
        const query = searchInput.value.trim();
        const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : 'superheroes.php';
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                resultDiv.innerHTML = xhr.responseText;
            } else {
                resultDiv.innerHTML = '<p class="not-found">Error loading data.</p>';
            }
        };
        
        xhr.onerror = function() {
            resultDiv.innerHTML = '<p class="not-found">Request failed.</p>';
        };
        
        xhr.send();
    }
    
    // Load default list when page first loads
    performSearch();
    
    // Form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch();
    });
    
    // Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});