from flask import Flask
from flask_cors import CORS

from routes.jobs import jobs_bp
from routes.users import users_bp
from routes.recommendations import recommend_bp
from database import verify_connection

print(verify_connection())

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.register_blueprint(jobs_bp)
app.register_blueprint(users_bp)
app.register_blueprint(recommend_bp)

@app.route("/")
def home():
    return {
        "message": "Graph Job Recommendation API Running"
    }

if __name__ == "__main__":
    app.run(debug=True)