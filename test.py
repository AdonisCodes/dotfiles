import requests
import dataclasses
import sqlite3
import os

if not os.path.exists('database.db'):
    open('database.db', 'w').close()

db = sqlite3.connect('database.db')

def create_bounties_table():
    cursor = db.cursor()
    if cursor.execute('SELECT name FROM sqlite_master WHERE type="table" AND name="bounties"').fetchone() is not None:
        # It exists
        return 
    
    # Else create the table
    cursor.execute('CREATE TABLE bounties (id TEXT, title TEXT, solverPayout INT, status TEXT, cycles INT, deadline TEXT, url TEXT)')
    db.commit()

create_bounties_table()

def does_bounty_exist(id: str):
    cursor = db.cursor()
    cursor.execute('SELECT * FROM bounties WHERE id = ?', (id,))
    return cursor.fetchone() is not None

@dataclasses.dataclass
class Bounty:
    id: str
    title: str
    descriptionPreview: str
    cycles: int
    deadline: str
    status: str
    slug: str
    solverPayout: int
    timeCreated: str
    applicationCount: int
    isUnlisted: bool
    solver: dict
    user: dict

    @property
    def url(self):
        try:
            return f'https://replit.com/bounties/@{self.user['username']}/{self.slug}'
        except:
            return None
    
    def __str__(self):
        return f'{self.title} - {self.solverPayout}'
    def __repr__(self):
        return f'{self.title} - {self.solverPayout}'


cookies = {
    'ajs_user_id': '24030644',
    '_ga': 'GA1.2.179825654.1714370389',
    '_gid': 'GA1.2.295206684.1714370389',
    'ajs_anonymous_id': '318fe515-8270-4855-99ab-de6da704117d',
    '_gcl_au': '1.1.1235992175.1714370390',
    'replit_authed': '1',
    '__stripe_mid': 'e42d82b9-e553-40a7-a05b-67b3d2dab7baccf125',
    '_cfuvid': 'OO0emngKarDXf8c3Jozt82O6IBgs7jy6Z8ARhTfRgUI-1714819749222-0.0.1.1-604800000',
    'amplitudeSessionId': '1714819750',
    'connect.sid': 'eyJhbGciOiJSUzI1NiIsImtpZCI6Il9PQzZaZyJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9yZXBsaXQtd2ViIiwicm9sZXMiOlsiZXhwbG9yZXIiLCJ0ZWFjaGVyX3VudmVyaWZpZWQiXSwiYXVkIjoicmVwbGl0LXdlYiIsImF1dGhfdGltZSI6MTcxNDUwOTcwNCwidXNlcl9pZCI6IkVLS0pBeWx1NTZnS3VEUWVUOXFzNkpCUlFzZzEiLCJzdWIiOiJFS0tKQXlsdTU2Z0t1RFFlVDlxczZKQlJRc2cxIiwiaWF0IjoxNzE0ODE5NzUyLCJleHAiOjE3MTU0MjQ1NTIsImVtYWlsIjoiMTIyMTU0MjU3K2Fkb25pc2NvZGVzQHVzZXJzLm5vcmVwbHkuZ2l0aHViLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAxOTkwOTA5NjcyNzQwMzMxOTIzIl0sImdpdGh1Yi5jb20iOlsiMTIyMTU0MjU3Il0sImVtYWlsIjpbIjEyMjE1NDI1NythZG9uaXNjb2Rlc0B1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn19.XHzy3VQZGeADZJTtClXIo2lG92c1ObkAajdBbheepSvRKZ-FfFkfoDNSy_L5iOxjgBxbqrVLGhHk3jnuLoL_-cjqhNb8wc8aBB0-pb7wJYelRaDpKCORmtXyddy1TOKO8Pf_xjYlrAnG1BiUS1XLluSvR8Flnxob-gq9i1MVvF8VMyepA0kHGEC8pIcQ9m3KnTpY3YeIaP-4JFTmkI8C-p6jMd97TEuK6DCSo5nViTM39TMZxgDnxTXdGOnPgIWXE8wMEn4JXxDNPJP613nsqUXXjgdWssBRMgi_DKcB2HZTU21KQfnjiikKGNXzuSD-nwSKkwo5VrgZH4ufckUEOg',
    '__cf_bm': 'Eys3cm6WzlGj.nNula4G8cOzwqkWoorZw7Idle3f7uU-1714820798-1.0.1.1-jCBwsj5b3r5tyQvdr4BwbAb._rM1UQlL0HpgW9FoXFWbunepEk0sKbAOMIjEW8NnUT13qWgWL.OUr4W5HY3t9g',
    '__stripe_sid': '49da5590-f305-45bf-9b36-b6938f706138668acd',
    'sidebarClosed': 'true',
    '_gat': '1',
    '_ga_MPJY3F1YEL': 'GS1.2.1714820800.14.1.1714821045.0.0.0',
    '_dd_s': 'logs=1&id=df10fc0f-fd4f-4c3f-9384-724269ffcefb&created=1714820798377&expire=1714821950887&rum=0',
}

headers = {
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    'origin': 'https://replit.com',
    'priority': 'u=1, i',
    'referer': 'https://replit.com/bounties?order=creationDateDescending',
    'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'x-client-version': '743e287c',
    'x-forwarded-host': 'replit.com',
    'x-requested-with': 'XMLHttpRequest',
}

count = 0
bounties = []
while True:
    json_data = [
        {
            'operationName': 'BountiesPageSearch',
            'variables': {
                'input': {
                    'after': str(count),
                    'count': 50,
                    'searchQuery': '',
                    'statuses': [
                        'open',
                        'inProgress',
                        'completed',
                        'canceled',
                    ],
                    'order': 'creationDateDescending',
                    'listingState': 'listed',
                },
            },
            'query': 'query BountiesPageSearch($input: BountySearchInput!) {\n  bountySearch(input: $input) {\n    __typename\n    ... on BountySearchConnection {\n      items {\n        ...BountyCard\n        __typename\n      }\n      pageInfo {\n        hasNextPage\n        nextCursor\n        __typename\n      }\n      __typename\n    }\n    ... on UserError {\n      message\n      __typename\n    }\n    ... on UnauthorizedError {\n      message\n      __typename\n    }\n  }\n}\n\nfragment BountyCard on Bounty {\n  id\n  title\n  descriptionPreview\n  cycles\n  deadline\n  status\n  slug\n  solverPayout\n  timeCreated\n  applicationCount\n  isUnlisted\n  solver {\n    id\n    username\n    image\n    url\n    __typename\n  }\n  user {\n    id\n    username\n    image\n    url\n    __typename\n  }\n  __typename\n}\n',
        },
    ]

    response = requests.post('https://replit.com/graphql', headers=headers, json=json_data)
    print(response.status_code)
    if response.status_code != 200 or len(response.json()[0]['data']['bountySearch']['items']) == 0:
        break
    else:
        count += 50
    print(len(response.json()[0]['data']['bountySearch']['items']))
    should_break = False
    for item in response.json()[0]['data']['bountySearch']['items']:
        del item['__typename']
        if not item['user']:
            continue

        bounty = Bounty(**item)
        if does_bounty_exist(bounty.id):
            print("Bounty Already Exists")
            # If a bounty exists, that means we can break out because we catched up to the latest bounty (From the previous scrape)
            should_break = True
            break
            

        bounties.append(bounty)

    if should_break:
        break


for bounty in bounties:
    if not does_bounty_exist(bounty.id):
        db.cursor().execute('INSERT INTO bounties VALUES (?, ?, ?, ?, ?, ?, ?)', (bounty.id, bounty.title, bounty.solverPayout, bounty.status, bounty.cycles, bounty.deadline, bounty.url))


print(db.cursor().execute('SELECT * FROM bounties LIMIT 100').fetchall())
# Print the count of vbountie
db.commit()
print(db.cursor().execute('SELECT COUNT(*) FROM bounties').fetchone())
db.commit()
db.close()
