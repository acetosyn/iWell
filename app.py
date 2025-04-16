# app.py

from flask import Flask, render_template, request, jsonify
# from engine import get_bot_reply

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message')
    reply = get_bot_reply(user_message)
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=True)
