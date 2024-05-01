# We don't have a good type system for this yet, so everything gets dumped into initial.py
import dataclasses

@dataclasses.dataclass
class PreviousJob:
    link: str
    tags: list[str]
    created_at: str
    title: str

