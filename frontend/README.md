
# GraphJob AI – Graph-Based Job Recommendation System

##  Project Overview

GraphJob AI is a graph database powered job recommendation system built using **CognoDB**, **Flask**, and **React**.

The application recommends jobs to users based on their skills using graph relationships instead of traditional relational database joins.

---

##  Features

- User Registration
- User Login
- Add Skills
- View Available Jobs
- View Job Details
- Job Recommendations based on Skills
- Graph Database using CognoDB
- Responsive React Frontend
- REST API using Flask

---

##  Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Bootstrap

### Backend
- Flask
- Flask-CORS
- Neo4j Python Driver

### Database
- CognoDB (Graph Database)

---

# Why Graph Database?

Traditional relational databases require multiple JOIN operations to find relationships between users, skills, jobs, and companies.

Graph databases naturally represent these relationships, making recommendation queries faster and easier to understand.

Graph traversal used in this project:

```
User
 │
HAS_SKILL
 │
Skill
 │
REQUIRES
 │
Job
 │
POSTED
 │
Company
```

This allows efficient multi-hop traversal for job recommendations.

---

# Graph Data Model

## Nodes

- User
- Skill
- Job
- Company

## Relationships

```
(User)-[:HAS_SKILL]->(Skill)

(Job)-[:REQUIRES]->(Skill)

(Company)-[:POSTED]->(Job)
```

---

# Project Structure

```
GraphJob/
│
├── backend
│   ├── app.py
│   ├── database.py
│   ├── config.py
│   ├── seed.py
│   └── routes
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

# Seed Data

The project includes realistic seed data.

### Companies

- Infosys
- TCS
- Accenture
- Wipro
- Cognizant

### Skills

- Python
- Flask
- React
- SQL
- HTML
- CSS
- JavaScript
- MongoDB
- Git

### Jobs

- Python Developer
- Frontend Developer
- Full Stack Developer

---

# Main Cypher Queries

## Add Skill

```cypher
MATCH (u:User {email:$email})
MATCH (s:Skill {name:$skill})
MERGE (u)-[:HAS_SKILL]->(s)
```

---

## Get Jobs

```cypher
MATCH (c:Company)-[:POSTED]->(j:Job)
RETURN j.title,c.name
```

---

## Job Recommendation

```cypher
MATCH (u:User {email:$email})-[:HAS_SKILL]->(s:Skill)
MATCH (j:Job)-[:REQUIRES]->(s)
MATCH (c:Company)-[:POSTED]->(j)

RETURN DISTINCT
j.title,
c.name
```

---

# Setup

## Backend

```bash
cd backend

pip install -r requirements.txt

python app.py
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

```
DATABASE_URI=YOUR_DATABASE_URI
DATABASE_USERNAME=cognodb
DATABASE_PASSWORD=YOUR_PASSWORD
```

---

# Screenshots

# Screenshots

## Home Page

![Home](screenshots/home.png)

## Register Page

![Register](screenshots/register.png)

## Login Page

![Login](screenshots/login.png)

## Add Skills

![Add Skills](screenshots/add-skills.png)

## Jobs

![Jobs](screenshots/jobs.png)

## Job Details

![Job Details](screenshots/job-details.png)

## Recommendation

![Recommendation](screenshots/recommendation.png)



---

## 🎥 Demo Video

Watch the project demo here:

https://drive.google.com/file/d/1FRVTQp7R7MKSnUzWycPIQk5oZeKYlNWC/view?usp=sharing


# Future Improvements

- Resume Upload
- AI-based Resume Matching
- Job Application Tracking
- Company Dashboard
- Admin Panel

---

# Author

**Aravind Yadla**

B.Tech CSE (AI & ML)

Andhra Loyola Institute of Engineering and Technology

---

## Demo

GitHub Repository:
(Add after pushing)

Hosted Demo:
(Add if deployed)

Screen Recording:
(Add Google Drive or YouTube link)