document.getElementById('submit-button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        console.log("Name:", name);
        console.log("Email:", email);

        document.getElementById('input-section').style.display = 'none';
        document.getElementById('bingo-card-section').style.display = 'block';

        const bingoCard = document.getElementById('bingo-card');
        generateBingoCard(bingoCard);
    } else {
        alert('Please enter both name and email.');
    }
});

function generateBingoCard(container) {
    container.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-item';

        const link = document.createElement('a');
// another loop here to attach to regions
        link.href = '/';
        link.textContent = Math.floor(Math.random() * 100) + 1;

        cell.appendChild(link);
        container.appendChild(cell);
    }
}

/**
 * Fetches bingo card data from a specified API endpoint.
 *
 * This function uses the Fetch API to send a GET request to the provided URL
 * and retrieves a bingo card. It assumes the response format is JSON data
 * containing the bingo card information.
 *
 * @throws {Error} - If the API request fails or the response cannot be parsed.
 */
async function getBingoCard() {
    try {
      // Define the API endpoint URL
      const url = "https://5iajpszvjj.execute-api.us-east-1.amazonaws.com/items";
  
      // Send GET request with Fetch API
      const response = await fetch(url);
  
      // Check for successful response
      if (!response.ok) {
        throw new Error(`API request failed with status code: ${response.status}`);
      }
  
      // Parse JSON data from response
      const data = await response.json();
  
      // Process the retrieved data (e.g., display in console, manipulate in DOM)
      // retrieve regions and shuffle them and output to card
      console.log("Retrieved items:", data);
      // You can further process the data here (e.g., display it in a table)
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  
  // Call the function to initiate the API request
  getBingoCard();

