import sys
import random

from lib_.notion import get_database_items
from types_.initial import PreviousJob

if len(sys.argv) < 2:
    args = []
else:
    args = [i.strip() for i in sys.argv[-1].split(',')]
    args = [arg for arg in args if arg]

notion_response = get_database_items(database_id="073a707c080c471b94d3681edc0301de")

previous_jobs: list[PreviousJob] = []
jobs_to_print: list[str] = []
for result in notion_response["results"]:
    link = result["properties"]["Link"]["url"]
    tags = [i['name'] for i in result["properties"]["Multi-select"]["multi_select"]]
    created_at = result['properties'].get("Date", {}).get('date', {}).get('start', "")
    title = result['properties']['Name']['title'][0]['plain_text']
    previous_jobs.append(PreviousJob(link=link, tags=tags, created_at=created_at, title=title))

    for tag in tags:
        if tag in args or not args:
            emojis = ["🎉", "🚀", "🔥","👏","🎁","🥂", "👍"]
            jobs_to_print.append(f"{random.choice(emojis)}: {title} - {link}")

for job in jobs_to_print[:10]:
    print(job)
