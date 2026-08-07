from flask import Blueprint, request
from database import get_session

users_bp = Blueprint("users", __name__)

@users_bp.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    name = data["name"]
    email = data["email"]
    password = data["password"]

    session = get_session()

    session.run("""
    MERGE (u:User {email:$email})
    SET u.name = $name,
        u.password = $password
""",
name=name,
email=email,
password=password)

    session.close()

    return {
        "status":"success",
        "message":"User Registered Successfully"
    }

@users_bp.route("/add-skills", methods=["POST"])
def add_skills():

    data = request.get_json()

    email = data["email"]
    skills = data["skills"]

    session = get_session()

    for skill in skills:

        session.run("""
            MATCH (u:User {email:$email})
            MATCH (s:Skill {name:$skill})
            MERGE (u)-[:HAS_SKILL]->(s)
        """,
        email=email,
        skill=skill)

    # 👇 Debug code ikkada add cheyyi
    result = session.run("""
        MATCH (u:User {email:$email})-[:HAS_SKILL]->(s:Skill)
        RETURN u.email AS email, s.name AS skill
    """, email=email)

    for record in result:
        print(record["email"], record["skill"])

    session.close()

    return {
        "status": "success",
        "message": "Skills Added Successfully"
    }


@users_bp.route("/login", methods=["POST"])
@users_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data["email"]
    password = data["password"]

    session = get_session()

    result = session.run("""
        MATCH (u:User {email:$email, password:$password})
        RETURN u.name AS name,
               u.email AS email
    """,
    email=email,
    password=password)

    user = result.single()

    session.close()

    if user:
        return {
            "status": "success",
            "message": "Login Successful",
            "user": {
                "name": user["name"],
                "email": user["email"]
            }
        }

    return {
        "status": "failed",
        "message": "Invalid Email or Password"
    }, 401