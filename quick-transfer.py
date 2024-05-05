import sqlite3
import json
import traceback
from notion import get_database_items
import uuid

# Connect to the SQLite database
db = sqlite3.connect('database.db')

def insert_job(title, link, tags, rating, rating_comment, created_at):
    # Generate UUID for the job
    job_id = str(uuid.uuid4())
    # Insert job details into PreviousJobs table
    db.execute("INSERT INTO PreviousJobs (job_id, title, link, rating, rating_comment, created_at) VALUES (?, ?, ?, ?, ?, ?)",
               (job_id, title, link, rating, rating_comment, created_at))
    # Insert tags into Tags table if they don't exist and retrieve their tag_ids
    tag_ids = []
    for tag in tags:
        cursor = db.cursor()
        # Check if the tag already exists in the Tags table
        cursor.execute("SELECT tag_id FROM Tags WHERE tag_name = ?", (tag,))
        existing_tag = cursor.fetchone()
        if existing_tag:
            # If the tag exists, use its existing tag_id
            tag_id = existing_tag[0]
        else:
            # If the tag doesn't exist, generate a new tag_id and insert the tag into the Tags table
            tag_id = str(uuid.uuid4())
            cursor.execute("INSERT INTO Tags (tag_id, tag_name) VALUES (?, ?)", (tag_id, tag,))
            db.commit()
        tag_ids.append(tag_id)
    # Insert job-tag relationships into JobTags table
    for tag_id in tag_ids:
        db.execute("INSERT INTO JobTags (job_id, tag_id) VALUES (?, ?)", (job_id, tag_id))
    # Commit changes to the database
    db.commit()


def print_response():
    notion_response = get_database_items(database_id="073a707c080c471b94d3681edc0301de")

    for result in notion_response["results"]:
        try:
            link = result["properties"]["Link"]["url"]
            tags = [i['name'] for i in result["properties"]["Multi-select"]["multi_select"]]
            created_at = result['properties'].get("Date", {}).get('date', {}).get('start', "")
            title = result['properties']['Name']['title'][0]['plain_text']
            rating = 0
            rating_comment = ""
            insert_job(title, link, tags, rating, rating_comment, created_at)
        except Exception as e:
            print(f"Error processing job: {e}")
            print(traceback.format_exc())
            continue

if __name__ == "__main__":
    print_response()

