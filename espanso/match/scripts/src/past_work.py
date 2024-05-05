import sys
import random
import sqlite3
import json
from pathlib import Path
from types_.initial import PreviousJob
import uuid

# Path to the SQLite database
DB_PATH = Path.home() / ".config" / "database.db"

def get_tag_ids_for_args(args):
    # Connect to the SQLite database
    db = sqlite3.connect(str(DB_PATH))
    cursor = db.cursor()

    tag_ids = set()

    # Fetch tag IDs for each provided argument
    for arg in args:
        cursor.execute("SELECT tag_id FROM Tags WHERE tag_name = ?", (arg,))
        rows = cursor.fetchall()
        tag_ids.update([row[0] for row in rows])

    db.close()
    return tag_ids

def get_job_ids_for_tag_ids(tag_ids):
    # Connect to the SQLite database
    db = sqlite3.connect(str(DB_PATH))
    cursor = db.cursor()

    job_ids = set()

    # Fetch job IDs associated with the provided tag IDs
    for tag_id in tag_ids:
        cursor.execute("SELECT job_id FROM JobTags WHERE tag_id = ?", (tag_id,))
        rows = cursor.fetchall()
        job_ids.update([row[0] for row in rows])

    db.close()
    return job_ids

def get_jobs_for_job_ids(job_ids):
    # Connect to the SQLite database
    db = sqlite3.connect(str(DB_PATH))
    cursor = db.cursor()

    jobs = []

    # Fetch job details for the provided job IDs
    for job_id in job_ids:
        cursor.execute("SELECT title, link, created_at FROM PreviousJobs WHERE job_id = ?", (job_id,))
        row = cursor.fetchone()
        if row:
            title, link, created_at = row
            jobs.append(PreviousJob(link=link, tags=[], created_at=created_at, title=title))

    db.close()
    return jobs

def print_response():
    if len(sys.argv) < 2:
        args = []
    else:
        args = [i.strip() for i in sys.argv[-1].split(',')]

    # Fetch tag IDs associated with the provided arguments
    tag_ids = get_tag_ids_for_args(args)

    # Fetch job IDs associated with the fetched tag IDs
    job_ids = get_job_ids_for_tag_ids(tag_ids)

    # Fetch job details for the fetched job IDs
    jobs = get_jobs_for_job_ids(job_ids)

    # Print the processed jobs
    jobs_to_print = []
    max_title_length = 60
    for job in jobs:
        emojis = ["🎉", "🚀", "🔥", "👏", "🎁", "🥂", "👍"]
        jobs_to_print.append(f"{random.choice(emojis)}: {job.title.strip()[:max_title_length] + '...' if len(job.title) > max_title_length else job.title.strip()} - {job.link.strip()}")

    for job in jobs_to_print[:10]:
        print(job)

if __name__ == "__main__":
    print_response()

