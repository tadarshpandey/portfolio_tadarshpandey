from flask import Flask, request, render_template, jsonify
import json
import os

app = Flask(__name__)

# Ensure messages.json exists
if not os.path.exists("messages.json"):
    with open("messages.json", "w") as file:
        json.dump([], file)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    print("Received Raw Form Data:", request.form.to_dict())  # ✅ Debugging

    data = request.form.to_dict()  # ✅ Extract form data

    if not data or "name" not in data:
        return jsonify({"status": "error", "message": "No data received!"}), 400

    try:
        with open("messages.json", "r") as file:
            messages = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        messages = []

    messages.append({
        "name": data.get("name"),
        "email": data.get("email"),
        "subject": data.get("subject"),
        "message": data.get("message")
    })

    with open("messages.json", "w") as file:
        json.dump(messages, file, indent=4)

    print("Saved Data:", messages)  # ✅ Debugging
    return jsonify({"status": "success", "message": "Message send successfully!"})


if __name__ == "__main__":
    app.run(debug=True)
