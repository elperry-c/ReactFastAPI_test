import uvicorn

# Importing app here makes the syntax cleaner as it will be picked up by refactors
from sample import app

if __name__ == "__main__":
    uvicorn.run("debug:app", host="0.0.0.0", port=8080, reload=True)
