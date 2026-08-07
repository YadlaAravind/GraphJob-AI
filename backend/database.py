from neo4j import GraphDatabase
from config import DATABASE_URI, DATABASE_USERNAME, DATABASE_PASSWORD


driver = GraphDatabase.driver(
    DATABASE_URI,
    auth=(DATABASE_USERNAME, DATABASE_PASSWORD)
)


def get_session():
    return driver.session()



def verify_connection():

    try:

        with driver.session() as session:

            result = session.run(
                "RETURN 'CognoDB Connected Successfully' AS message"
            )

            return result.single()["message"]


    except Exception as e:

        return str(e)