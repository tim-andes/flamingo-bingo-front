/**
 * Attaches a click event listener to the submit button.
 *
 * This function handles the click event on the element with the ID "submit-button".
 * When clicked, it retrieves the values from the name and email input fields.
 *
 * If both name and email have values, it performs the following actions:
 *   - Logs the retrieved name and email to the console.
 *   - Hides the "input-section" element (likely containing the name and email form).
 *   - Shows the "bingo-card-section" element (likely where the bingo card is displayed).
 *   - Retrieves the element with the ID "bingo-card" and calls the `generateBingoCard` function
 *     with that element as an argument (presumably to populate the bingo card).
 *
 * If either name or email is empty, it displays an alert message prompting the user
 * to enter both values.
 */
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
      // TO DO API: Retrieve regions and shuffle them and output to card
      console.log("Retrieved items:", data);
    
      return(data);

    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  
  // Call the function to initiate the API request
  getBingoCard();

/**
 * Generate bingo card container [INCOMPLETE]
 * TO DO
 * pull in card_regions data as a list
 * shuffle the list
 * append to cells
 */
function generateBingoCard(container) {
    container.innerHTML = '';
    let testList = [1,2,3,4,5,6,7,8,9]; // this needs to fetch from API, then shuffle array
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-item';

        const link = document.createElement('a');

        link.href = '/';
        link.textContent = testList[i];

        cell.appendChild(link);
        container.appendChild(cell);
    }
}