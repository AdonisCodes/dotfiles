import requests
import os
import typing

NOTION_API_KEY = os.getenv("NOTION_API_KEY")

def get_database_items(database_id: str, total: int=10000, sort_by_date: bool = True) -> dict:
    headers = {
        "Authorization": f"Bearer {NOTION_API_KEY}",
        "Content-Type": "application/json",
        "Notion-Version": "2021-05-13"
    }

    data: dict[str, typing.Any] = {
            "page_size": total,
    }

    if sort_by_date:
        data["sorts"] = [
            {
                "property": "Date",
                "direction": "descending"
            }
        ]

    response = requests.post('https://api.notion.com/v1/databases/' + database_id+'/query', json=data, headers=headers)
    if response.status_code != 200:
        # TODO: Ping Dicord Webhook because this isn't supposed to happen (Or just a notification library) 
        return {}
    
    return response.json()
