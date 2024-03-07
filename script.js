document.addEventListener('DOMContentLoaded', function() {
    fetch('searchEngines.json')
        .then(response => response.json())
        .then(data => {
            const section = document.getElementById('additional-section');
            data.forEach(engine => {
                const form = document.createElement('form');
                form.action = engine.actionUrl;
                form.method = 'get';
                form.target = '_blank';
                
                const label = document.createElement('label');
                label.textContent = engine.name + ' 搜索：';
                form.appendChild(label);
                
                const input = document.createElement('input');
                input.type = 'text';
                input.name = engine.queryParam;
                input.placeholder = '输入关键词';
                form.appendChild(input);
                
                const button = document.createElement('button');
                button.type = 'submit';
                button.textContent = '搜索';
                form.appendChild(button);
                
                section.appendChild(form);
            });
        });
});
