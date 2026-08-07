from flask import Blueprint
from database import get_session

jobs_bp = Blueprint("jobs", __name__)

@jobs_bp.route("/jobs", methods=["GET"])
def get_jobs():

    session = get_session()

    result = session.run("""
        MATCH (c:Company)-[:POSTED]->(j:Job)
        RETURN j.title AS job,
               c.name AS company
    """)

    jobs = []

    for record in result:
        jobs.append({
            "job": record["job"],
            "company": record["company"]
        })

    session.close()

    return {
        "status": "success",
        "jobs": jobs
    }


@jobs_bp.route("/job/<title>", methods=["GET"])
def get_job_details(title):

    session = get_session()


    result = session.run("""
        MATCH (c:Company)-[:POSTED]->(j:Job)
        MATCH (j)-[:REQUIRES]->(s:Skill)

        WHERE j.title = $title

        RETURN 
            j.title AS job,
            c.name AS company,
            collect(s.name) AS skills

    """,
    title=title)



    record = result.single()


    session.close()



    if record:

        return {
            "status":"success",
            "job":{
                "title":record["job"],
                "company":record["company"],
                "skills":record["skills"]
            }
        }


    return {
        "status":"failed",
        "message":"Job Not Found"
    },404