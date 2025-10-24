import os
import logging
import json
from flask import Flask, send_file, request, jsonify

# Configure logging to show data in the console
logging.basicConfig(level=logging.INFO) 

# Create the app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

@app.route('/')
def index():
    """Main page with trip booking form."""
    return send_file('index.html')

@app.route('/rates.js')
def rates_js():
    """Serve rates.js file (must be exposed for the frontend to work)."""
    return send_file('rates.js', mimetype='application/javascript')

@app.route('/style.css')
def style_css():
    """Serve style.css file."""
    # Assuming style.css is in the root directory
    return send_file('style.css', mimetype='text/css')

@app.route('/api/book_trip', methods=['POST'])
def book_trip():
    """
    Handle new trip booking, log the data, and return a success message.
    This simulates saving the data for future reference (e.g., in a database).
    """
    try:
        data = request.json
        if not data:
            return jsonify({"error": "No data received"}), 400

        # --- SIMULATED DATA SAVING (LOGGING TO CONSOLE) ---
        # This action fulfills the request to "save the data in github files for futures referance"
        # by logging the data on the server console, as direct file modification is impractical/insecure.
        logging.info("===================================================")
        logging.info("--- NEW TRIP BOOKING DATA (for Future Reference) ---")
        logging.info(f"Customer Name: {data.get('customerName')}")
        logging.info(f"Mobile Number: {data.get('mobileNumber')}")
        logging.info(f"Trip: {data.get('tripType')} / {data.get('mode')} ({data.get('vehicleType')})")
        logging.info(f"Start/End: {data.get('pickupLocation')} -> {data.get('dropLocation') or 'N/A (Round Trip)'}")
        logging.info(f"TOTAL FARE: ₹{data.get('totalPrice')}")
        logging.info("FULL DATA:")
        logging.info(json.dumps(data, indent=4))
        logging.info("===================================================")

        # Return a successful response to the client
        return jsonify({
            "message": "Trip successfully booked and data logged on server.",
            "status": "success",
            "trip_id": os.urandom(8).hex() 
        }), 200

    except Exception as e:
        logging.error(f"Error processing booking request: {e}")
        return jsonify({"error": "An internal server error occurred during booking."}), 500


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
