import uvicorn
from sample import app

# ターミナルにログを出力するために別ファイルから呼び出す
if __name__ == "__main__":
    uvicorn.run("debug:app", host="0.0.0.0", port=8080, reload=True)
