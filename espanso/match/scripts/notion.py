import requests

# Set your Notion API token
api_token = "YOUR_NOTION_API_TOKEN"

# Set the URL for your Notion database
database_url = "https://api.notion.com/v1/databases/YOUR_DATABASE_ID"

# Set the headers with your API token and Content-Type
headers = {
    "Authorization": f"Bearer {api_token}",
    "Content-Type": "application/json"
}

# Make a GET request to retrieve all pages (blocks) in the database
response = requests.get(database_url, headers=headers)

# Check if the response was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()

    # Iterate over the blocks and print their titles
    for page in data["results"]:
        print(page["title"])
else:
    print(f"Error: {response.status_code}")
