from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai

app = FastAPI()
openai.api_key = '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'

class GenerateTextRequest(BaseModel):
    prompt: str

@app.post("/generate-text/")
async def generate_text(request_body: GenerateTextRequest):
    # Prepend instructions to the prompt
    # if not request_body.prompt:
    #     raise HTTPException(status_code=400, detail="Prompt cannot be null")
    full_prompt = (
        "Create a story based on the following prompt within 300 word limit\n\n"
        f"{request_body.prompt}\n\n"
    )
    

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": full_prompt}
        ],
        max_tokens=900,
        temperature=1  # Adjust this value to control randomness
    )
    generated_text = response['choices'][0]['message']['content'].strip()

    # Ensuring the generated text contains either hashtags or comments
    # if '#' not in generated_text and '//' not in generated_text:
    #     raise HTTPException(status_code=400, detail="No suggestions provided in generated text")

    return {"generated_text": generated_text}
class EditedTextRequest(BaseModel):
    edited_text: str
@app.post("/edit-text/")
async def edit_text(request_body: EditedTextRequest):
    # Do something with the edited text
    # For example, save it to a database or file
    edited_text = request_body.edited_text
    # ... your code here ...
    return {"message": "Edited text received and processed"}
# CORS Middleware settings
origins = ["http://localhost:3000"]  # Adjust this to match your frontend application's URL

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

