CREATE TABLE PreviousJobs (
    job_id TEXT PRIMARY KEY,
    link VARCHAR(255),
    created_at DATETIME,
    title VARCHAR(255),
    total_paid DECIMAL(10, 2),
    rating DECIMAL(3, 2),
    rating_comment TEXT
);
CREATE TABLE Tags (
    tag_id TEXT PRIMARY KEY,
    tag_name VARCHAR(50) UNIQUE
);
CREATE TABLE JobTags (
    job_id TEXT,
    tag_id TEXT,
    PRIMARY KEY (job_id, tag_id),
    FOREIGN KEY (job_id) REFERENCES PreviousJobs(job_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
);
