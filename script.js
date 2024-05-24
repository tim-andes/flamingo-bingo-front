/**
 * Fetches a bingo card from a specified API endpoint.
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
      console.log("Retrieved items:", data);
      // You can further process the data here (e.g., display it in a table)
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  
  // Call the function to initiate the API request
  getBingoCard();