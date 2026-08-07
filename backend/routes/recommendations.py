from flask import Blueprint, request
from database import get_session

recommend_bp = Blueprint("recommend", __name__)


@recommend_bp.route("/recommend", methods=["POST"])
def recommend():

    data = request.get_json()
    email = data["email"]

    session = get_session()

    result = session.run("""
        MATCH (u:User {email:$email})-[:HAS_SKILL]->(s:Skill)
        MATCH (j:Job)-[:REQUIRES]->(s)
        MATCH (c:Company)-[:POSTED]->(j)

        RETURN DISTINCT
            j.title AS job,
            c.name AS company
    """, email=email)

    recommendations = []

    for record in result:
        recommendations.append({
            "job": record["job"],
            "company": record["company"]
        })

    session.close()

    return {
        "status": "success",
        "recommendations": recommendations
    }