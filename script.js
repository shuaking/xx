// script.js
function performSearch() {
    const searchTerm = document.getElementById('search-box').value;
    if (searchTerm) {
        fetch('sites.json')
            .then(response => response.json())
            .then(data => {
                const sites = data.sites;
                const filteredSites = sites.filter(site => site.name.toLowerCase().includes(searchTerm.toLowerCase()));
                if (filteredSites.length) {
                    window.open(filteredSites[0].url, '_blank');
                } else {
                    alert('没有找到相关网站');
                }
            });
    } else {
        alert('请输入搜索关键词');
    }
}
