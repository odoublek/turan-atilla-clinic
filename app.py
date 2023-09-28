import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from googletrans import Translator

load_dotenv()

# Initialize Flask
app = Flask(__name__)


api_key = os.getenv("GOOGLE_TRANSLATOR_API_KEY")


@app.route('/translate', methods=['POST'])
def translate():
    if request.method == 'POST':
        text = request.json.get('text')
        target_language = request.json.get('target_language')

        print(f"Received text: {text}")
        print(f"Target language: {target_language}")

        translator = Translator()
        translation = translator.translate(
            text, src='en', dest=target_language).text

        print(f"Translation: {translation}")

        return jsonify({"translation": translation})


if __name__ == '__main__':
    app.run(debug=True)
