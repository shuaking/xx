function performSearch() {
    const searchText = document.getElementById('searchBox').value.toLowerCase();
    fetch('sites.json')
    .then(response => response.json())
    .then(sites => {
        const filteredSites = sites.filter(site => site.name.toLowerCase().includes(searchText));
        displayResults(filteredSites);
    });
}

function displayResults(sites) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // 清空之前的搜索结果
    if (sites.length > 0) {
        sites.forEach(site => {
            const link = document.createElement('a');
            link.href = site.url;
            link.textContent = site.name;
            link.target = '_blank';
            resultsDiv.appendChild(link);
            resultsDiv.appendChild(document.createElement('br'));
        });
    } else {
        resultsDiv.textContent = '没有找到相关网站。';
    }
}
