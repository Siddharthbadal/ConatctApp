from app import app, db
from flask import request, jsonify

from models import Contact

# get all contacts 
@app.route("/api/contacts", methods=['GET'])
def get_contacts():
    contacts= Contact.query.all()
    result = [contact.to_json() for contact in contacts]
    return jsonify(result)

# add a new contact
@app.route("/api/contacts", methods=['POST'])
def create_friend():
    try:
        data = request.json 

        required_fields = ["name", "role", "email", "description", "gender"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field - {field}"})


        name = data.get("name")
        role = data.get("role")
        email = data.get("email")
        description = data.get("description")
        gender = data.get("gender")

        # fetch avtar image based on gender
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url= f"https://avatar.iran.liara.run/public/girl?username={name}" 
        else:
            img_url=None

        new_contact = Contact(
            name=name,
            role=role,
            email=email,
            description=description,
            gender=gender,
            img_url=img_url
        )

        db.session.add(new_contact)
        db.session.commit()
        return jsonify({"message": "contact added successfully!"}), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    

# delete contact
@app.route("/api/contacts/<int:id>", methods=["Delete"])
def delete_contact(id):
    try:
        contact = Contact.query.get(id)
        if contact is None:
            return jsonify({"error": "Contact not found!"}), 404
        db.session.delete(contact)
        db.session.commit()
        return jsonify({"message": "Contact deleted"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route("/api/contacts/<int:id>", methods=["PATCH"])
def update_contact(id):
    try:
        contact = Contact.query.get(id)
        if contact is None:
            return jsonify({"error": "Contact not found!"}), 404  
        data = request.json 
        contact.name = data.get("name", contact.name)
        contact.role = data.get("role", contact.role)
        contact.email = data.get("email", contact.email)
        contact.description = data.get("description", contact.description)
        contact.gender = data.get("gender", contact.gender)

        db.session.commit()
        return jsonify({"message": "Contact updated"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500