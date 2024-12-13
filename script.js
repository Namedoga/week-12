


document.getElementById('fetchDataFetch').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => {
            dataDisplay.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
    });

    document.getElementById('fetchDataXHR').addEventListener('click', () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) { 
                if (xhr.status === 200) { 
                    const data = JSON.parse(xhr.responseText);
                    console.log(data);
                    displayData(data);
                } else {
                    console.error('Error fetching data:', xhr.statusText);
                }
            }
        };
    
        xhr.send();
    });
    


    document.getElementById('postForm').addEventListener('submit', event => {
        event.preventDefault();

        const title = document.getElementById('postTitle').value;
        const body = document.getElementById('postBody').value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
          
            })
            .then(data => {
                console.log(data);
                displayData(data);
            })
            .catch(error => {
                dataDisplay.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
            });
        });       
    