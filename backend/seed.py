from database import get_session


session = get_session()


# Connection check
print(session.run("RETURN 1 AS x").single()["x"])


# -----------------------------
# Companies
# -----------------------------

companies = [
    "Infosys",
    "TCS",
    "Wipro",
    "Accenture",
    "Cognizant"
]


for company in companies:

    session.run(
        "MERGE (c:Company {name:$name})",
        name=company
    )



# -----------------------------
# Skills
# -----------------------------

skills = [
    "Python",
    "Java",
    "React",
    "SQL",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "MongoDB"
]


for skill in skills:

    session.run(
        "MERGE (s:Skill {name:$name})",
        name=skill
    )



# -----------------------------
# Jobs
# -----------------------------

jobs = [

    {
        "title": "Python Developer",
        "company": "Infosys",
        "skills": [
            "Python",
            "Flask",
            "SQL"
        ]
    },

    {
        "title": "Frontend Developer",
        "company": "TCS",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ]
    },

    {
        "title": "Full Stack Developer",
        "company": "Accenture",
        "skills": [
            "Python",
            "React",
            "MongoDB",
            "SQL"
        ]
    }

]



for job in jobs:


    # Create Job node
    session.run(
        """
        MERGE (j:Job {title:$title})
        """,
        title=job["title"]
    )


    # Company -> Job relationship
    session.run(
        """
        MATCH (c:Company {name:$company})
        MATCH (j:Job {title:$title})

        MERGE (c)-[:POSTED]->(j)
        """,
        company=job["company"],
        title=job["title"]
    )



    # Job -> Skill relationship
    for skill in job["skills"]:

        session.run(
            """
            MATCH (j:Job {title:$title})
            MATCH (s:Skill {name:$skill})

            MERGE (j)-[:REQUIRES]->(s)
            """,
            title=job["title"],
            skill=skill
        )



# -----------------------------
# Debug Check
# -----------------------------

print("\nJobs in Database:")

result = session.run(
    """
    MATCH (j:Job)
    RETURN j.title AS title
    """
)


for record in result:
    print(record["title"])



print("\nCompanies in Database:")

result = session.run(
    """
    MATCH (c:Company)
    RETURN c.name AS name
    """
)


for record in result:
    print(record["name"])



print("\nSkills in Database:")

result = session.run(
    """
    MATCH (s:Skill)
    RETURN s.name AS name
    """
)


for record in result:
    print(record["name"])



print("\nData Inserted Successfully")


session.close()