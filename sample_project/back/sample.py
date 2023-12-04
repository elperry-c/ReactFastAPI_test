from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import uvicorn

app = FastAPI()

@app.get('/api')
async def simple():
    return {"message": "Hello World!"}

origins = [
    'http://localhost:5173',
    'http://localhost:8080',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

static_dir = Path(__file__).parent.parent.joinpath('front', 'dist')
app.mount('/', StaticFiles(directory=static_dir, html=True), name='static')

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
