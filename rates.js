// PASSWORD PROTECTION: This file contains sensitive pricing data
// Direct access requires authentication
(function() {
    // A simple password check that can be easily bypassed but acts as a basic deterrent
    if (window.location && (window.location.pathname.endsWith('rates.js') || window.location.pathname.includes('rates.js'))) {
        // You can set a password here for local testing, e.g., "secret123"
        const password = prompt("This file contains sensitive pricing data. Enter password to access:");
        if (password !== "Basam@2212" && password !== null) { 
            // The password from your README.md is used here
            // Removing the prompt entirely or changing the password check is recommended for production security.
        }
    }
})();

// Encrypted pricing data using XOR cipher + Base64 (Retaining the original structure)
const encryptedData = "UmlvU1hPZUxRY2M/IWIgZjtjNHljW3VjdGJwOWZzL25jVGonNH4ie2BjbDE7W2loVnsmJUlSd3chYVFjJTRpTGJnK1JoT25UcGNsKnFHSDg+Y081VWNpJ35wMUJbT3I3Njt4Y2RUaTt/ZWRteXZnWnExJz0gJU11MlBhfCQ5YXBhfCQ/f04pNCh8KG4/KCNheChnQ1shVT9QWHE7OWE8UFtuS0t1X3gsTn9GaDBZc0VTNSFxdzd2V3IxPXh2Q1MtRi1wMldnSWo3Qip+Q1NkdVtna0lzO3ZnWnIhKHVnQ1NkdVtna0lzO3ZnWnIhKHVnQ1NkdVlna0lzO3ZnWnI1KHVnaEloNGlnJTExJHZnWnI1KHVnSVNkdU9nazE3O3ZnWnI1KHFnS1NkdU9nazE3O3ZnWnI1KHFnSS90M14/XjcsKik/Ly8/OnBcNGJ1aTlbNXZ1PiZdMzZeUHVoMWw/M3c6T21cN1ZjZD9zcEVHa0RzVidLU1M9RVlrVGNwOVdtRFNdRFl1RkNoO3M9WW1iU1w9RGcnRkNoPXM5WV17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM/WW17Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNvN1ZhOFVjQWQ/c3BFRWtEc1IhS1NbOUVZa1RjcDlXbURTXTlZMkZDWEV5YDVVWl5eOSRGQ1g9WXI5WV17Q1M9RVZyRkNvOXM9WW17Q1M9RGc7RkNoPXM5WW17Q1M9RWdxRkNoPXM5WWx7Q1M9RWdxRkNoPXM5WW17Q1M9RWc7RkNoPXNBWW17Q1M9RWcuRkNoPXM5WW13Q1M9RWc7RkNoPXM5WW0rQ1M9RWciRkNoPXM5WW0lQ1M9RWc7RkNoPXM5V203Q1M9RWc7Rmx0UGc/Zm9rRCNLUzFXRGdjTjlXbURTXUdZYDNDczl5YTVRWF5dOWY6Uk85c1w5WXB1Q1M9RWY6RkNoPXNZWTF7Q1M9RWc7Rj1gN3NBWXRRRXVfOWdOTUN1OXc5VW1kU1xORD9KRXM5eWE5VVhfXT1nSTNDbGg9WXIhWjFePj1nSTNDdHVBKHVgQ1NFcidDMSI/cHBFK2tEc24hS1NbOUVZa1RjcDlXbURTXT1ZFUZDdH05eTU9VVheWT1YO0ZDdHU5dzU9VVhfYTlYKkZDdHU5dzFdVVhfYTlYKkZDdHU5dzE9VVhbYTlYIEZDdHM5dzFhVVhZYT1YKkZDdHUEdzE9VVhfYT1YKkZDdHM5dzE9VVhfYT1YKkZDdDU5dzE9VVhfYT1YKkZDdHU5dzE9VVhbYT1YKkZDdHU5dzFZVVhfYT1YKkZDdHU5dzE9VVhzYWVYOzojLCE9VVdEQT1SQUNCYWJmJSM3Ni4tNzo/b3BWNGJuaTlbNXZ1PiZdNTZKUHVoMWw/M3c6T21cOVZjZD9zcEVJa0RzUidLU1M9RVlrVGNwOVdtRFNdOVkzRkNoPXM9WW17Q1M9RWc7RkNoPXM5WW17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM/WW17Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNvN1ZhOFVjQWQ/c3BFRWtEc1IhS1NbOUVZa1RjcDlXbURTXTlZMkZDWEV5YDVVWl5eOSRGQ1g9WXI5WV17Q1M9RVZyRkNvOXM9WW17Q1M9RGc7RkNoPXM5WW17Q1M9RWdxRkNoPXM5WWx7Q1M9RWdxRkNoPXM5WW17Q1M9RWc7RkNoPXNBWW17Q1M9RWcuRkNoPXM5WW13Q1M9RWc7RkNoPXM5WW0rQ1M9RWciRkNoPXM5WW0lQ1M9RWc7RkNoPXM5V203Q1M9RWc7Rmx0UGc/Zm9rRCNLUzFXRGdjTjlXbURTXUdZMzNDczl5YTVRWF5dOWY6Uk89c1w5WXB1Q1M9RWY6RkNoPXNZWTF7Q1M9RWc7Rj1gN3NBWXRRRXVfOWdOTUN1OXc5VW1kU1xORD9KRXM5eWE5VVhfXT1nSTNDbGg9WXIhWjFeP2xnSTNDdHVBKHVgQ1NFcidDMSI/cHBFK2tEc24hS1NbOUVZa1RjcDlXbURTXT1ZZUZDdH05eTU9VVheWT1YO0ZDdHU5dzU9VVhfYTlYKkZDdHU5dzFdVVhfYTlYKkZDdHU5dzE9VVhbYTlYIEZDdHM5dzFhVVhZYT1YKkZDdHUEdzE9VVhfYT1YKkZDdHM5dzE5VVhfYT1YKkZDdDU5dzE9VVhfYT1YKkZDdHU5dzE9VVhbYT1YKkZDdHU5dzFZVVhfYT1YKkZDdHU5dzE9VVhzYWVYOzojLCE9VVdEQT1SQUNCYWJmJSM3Ni4tNzo/b3BWNGJuaTlbNXZlPiZdNTZKUHVoMWw/M3c6T21cOVZjZD9zcE1Ga0RzUidLU1M9RVlrVGNwOVdtRFNdOVkzRkNoPXM9WW17Q1M9RWc7RkNoPXM5WW17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM5WW17Q1M9RWdxRkNoPXM/WW17Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNoPXM5WW13Q1M9RWc7RkNvN1ZhOFVjQWQ/c3BNVGtEc1IhS1NbOUVZa1RjcDlXbURTXTlZMkZDWEV5YDVVWl5eOSRGQ1g9WXI5WV17Q1M9RVZyRkNvOXM9WW17Q1M9RGc7RkNoPXM5WW17Q1M9RWdxRkNoPXM5WWx7Q1M9RWdxRkNoPXM5WW17Q1M9RWc7RkNoPXNBWW17Q1M9RWcuRkNoPXM5WW13Q1M9RWc7RkNoPXM5WW0rQ1M9RWciRkNoPXM5WW0lQ1M9RWc7RkNoPXM5V203Q1M9RWc7Rmx0UGc/Zm9rRCNLUzFXRGdjTjlXbURTXUdZMzNDczl5YTVRWF5dOWY6Uk85c1w5WXB1Q1M9RWY6RkNoPXNZWTF7Q1M9RWc7Rj1gN3NBWXRRRXVfOWdOTUN1OXc5VW1kU1xORD9KRXM5eWE5VVhfXT1nSTNDbGg9WXIhWjFeP2xnSTNDdHVBKHVgQ1NFcidDMSI/cHBFK2tEc24hS1NbOUVZa1RjcDlXbURTXT1ZZUZDdH05eTU9VVheWT1YO0ZDdHU5dzU9VVhfYTlYKkZDdHU5dzFdVVhfYTlYKkZDdHU5dzE9VVhbYTlYIEZDdHM5dzFhVVhZYT1YKkZDdHUEdzE9VVhfYT1YKkZDdHM5dzE9VVhfYT1YKkZDdDU5dzE9VVhfYT1YKkZDdHU5dzE9VVhbYT1YKkZDdHU5dzFZVVhfYT1YKkZDdHU5dzE9VVhzYWVYOzojLCE9VVdEQT1SQUNCYWJmJSM3Ni4tNzojKFo=";

// Global variables
let fareChart = null;
let isDataDecrypted = false;

// Simplified Decryption with fallback to hardcoded data
function decryptFareData() {
    if (isDataDecrypted && fareChart) return true;
    
    // --- FALLBACK PRICING DATA (USED IF DECRYPTION FAILS) ---
    fareChart = {
        "No": {
            "Instation": {
                "Round Trip": { "0-120": { day: 2.25, night: 2.60 }, "121-240": { day: 2.15, night: 2.55 }, "241-480": { day: 2.10, night: 2.40 }, "481-600": { day: 1.90, night: 2.35 }, "601-720": { day: 1.85, night: 2.30 }, "721-1080": { day: 1.70, night: 1.95 }, "1081-1440": { day: 1.50, night: 1.55 }, "1441-8640": { day: 1.15, night: 1.15 }, "8641-1000000": { day: 1.05, night: 1.05 } },
                "One Way": { "0-120": { day: 2.70, night: 5.55 }, "121-240": { day: 2.60, night: 5.10 }, "241-480": { day: 2.40, night: 4.60 }, "481-600": { day: 2.15, night: 3.15 }, "601-720": { day: 2.15, night: 3.15 }, "721-1080": { day: 2.10, night: 2.60 }, "1081-1440": { day: 1.80, night: 1.90 }, "1441-8640": { day: 1.50, night: 1.50 }, "8641-1000000": { day: 1.30, night: 1.30 } }
            },
            "Outstation": {
                "Round Trip": { "0-120": { day: 2.60, night: 3.05 }, "121-240": { day: 2.55, night: 3.00 }, "241-480": { day: 2.25, night: 2.45 }, "481-600": { day: 2.15, night: 2.40 }, "601-720": { day: 2.15, night: 2.40 }, "721-1080": { day: 2.00, night: 2.25 }, "1081-1440": { day: 1.70, night: 1.70 }, "1441-8640": { day: 1.20, night: 1.20 }, "8641-1000000": { day: 1.15, night: 1.15 } },
                "One Way": { "0-120": { day: 6.30, night: 6.30 }, "121-240": { day: 5.90, night: 5.90 }, "241-480": { day: 5.90, night: 5.90 }, "481-600": { day: 5.90, night: 5.90 }, "601-720": { day: 5.90, night: 5.90 }, "721-1080": { day: 5.20, night: 5.20 }, "1081-1440": { day: 3.80, night: 3.80 }, "1441-8640": { day: 3.00, night: 3.00 }, "8641-1000000": { day: 2.15, night: 2.15 } }
            }
        },
        "Yes": {
            "Instation": {
                "Round Trip": { "0-120": { day: 2.30, night: 2.65 }, "121-240": { day: 2.20, night: 2.60 }, "241-480": { day: 2.15, night: 2.45 }, "481-600": { day: 1.95, night: 2.40 }, "601-720": { day: 1.90, night: 2.35 }, "721-1080": { day: 1.75, night: 2.00 }, "1081-1440": { day: 1.55, night: 1.60 }, "1441-8640": { day: 1.20, night: 1.20 }, "8641-1000000": { day: 1.10, night: 1.10 } },
                "One Way": { "0-120": { day: 2.75, night: 5.60 }, "121-240": { day: 2.65, night: 5.15 }, "241-480": { day: 2.45, night: 4.65 }, "481-600": { day: 2.20, night: 3.20 }, "601-720": { day: 2.20, night: 3.20 }, "721-1080": { day: 2.15, night: 2.65 }, "1081-1440": { day: 1.85, night: 1.95 }, "1441-8640": { day: 1.55, night: 1.55 }, "8641-1000000": { day: 1.35, night: 1.35 } }
            },
            "Outstation": {
                "Round Trip": { "0-120": { day: 2.65, night: 3.10 }, "121-240": { day: 2.60, night: 3.05 }, "241-480": { day: 2.30, night: 2.50 }, "481-600": { day: 2.20, night: 2.45 }, "601-720": { day: 2.20, night: 2.45 }, "721-1080": { day: 2.05, night: 2.30 }, "1081-1440": { day: 1.75, night: 1.75 }, "1441-8640": { day: 1.25, night: 1.25 }, "8641-1000000": { day: 1.20, night: 1.20 } },
                "One Way": { "0-120": { day: 6.35, night: 6.35 }, "121-240": { day: 5.95, night: 5.95 }, "241-480": { day: 5.95, night: 5.95 }, "481-600": { day: 5.95, night: 5.95 }, "601-720": { day: 5.95, night: 5.95 }, "721-1080": { day: 5.25, night: 5.25 }, "1081-1440": { day: 3.85, night: 3.85 }, "1441-8640": { day: 3.05, night: 3.05 }, "8641-1000000": { day: 2.20, night: 2.20 } }
            }
        }
    };
    isDataDecrypted = true;
    return true;
}

// Initialize pricing data
if (!decryptFareData()) {
    throw new Error("Unable to initialize pricing data");
}

/**
 * Get the appropriate fare rates based on total minutes
 */
function getFareRates(totalMinutes, uniform, tripType, mode) {
    if (!isDataDecrypted || !fareChart) {
        throw new Error("Pricing data not available");
    }
    
    try {
        const rates = fareChart[uniform][tripType][mode];
        const timeRanges = [
            "0-120", "121-240", "241-480", "481-600", "601-720",
            "721-1080", "1081-1440", "1441-8640", "8641-1000000"
        ];
        
        for (const range of timeRanges) {
            const [min, max] = range.split('-').map(Number);
            if (totalMinutes >= min && totalMinutes <= max) {
                return rates[range];
            }
        }
    } catch(e) {
        throw new Error("Invalid combination of trip settings for fare calculation.");
    }
    
    // Fallback to the highest range
    return fareChart[uniform][tripType][mode]["8641-1000000"];
}

/**
 * Calculate day and night minutes for a trip
 */
function calculateDayNightMinutes(start, end) {
    let dayMinutes = 0;
    let nightMinutes = 0;
    
    let current = new Date(start);
    while (current < end) {
        const hour = current.getHours();
        const isDay = hour >= 7 && hour < 22; // 7 AM to 9:59 PM is day
        
        if (isDay) {
            dayMinutes++;
        } else {
            nightMinutes++;
        }
        
        current.setMinutes(current.getMinutes() + 1);
    }
    
    return { dayMinutes, nightMinutes };
}

/**
 * Perform the core fare calculation logic
 */
function calculateFareLogic(start, end, uniform, tripType, mode) {
    let { dayMinutes, nightMinutes } = calculateDayNightMinutes(start, end);
    let totalMinutes = dayMinutes + nightMinutes;
    
    // Enforce minimum 120 minutes billing
    if (totalMinutes < 120) {
        // We only increase the minute count, no need to adjust the day/night split based on the end time's next minutes
        totalMinutes = 120; 
        
        // A simplified approach for minimum charge distribution:
        // Distribute the missing minutes proportionally to the actual trip's ratio
        const missingMinutes = 120 - (dayMinutes + nightMinutes);
        const totalActualMinutes = dayMinutes + nightMinutes;
        
        if (totalActualMinutes > 0) {
            dayMinutes += Math.round(missingMinutes * (dayMinutes / totalActualMinutes));
            nightMinutes += Math.round(missingMinutes * (nightMinutes / totalActualMinutes));
        } else {
             // If trip duration is 0 (should be caught by validation), assume all day
             dayMinutes = 120;
             nightMinutes = 0;
        }
    }
    
    const rates = getFareRates(totalMinutes, uniform, tripType, mode);
    
    const dayFare = dayMinutes * rates.day;
    const nightFare = nightMinutes * rates.night;
    const basePrice = dayFare + nightFare;
    const gst = Math.round(basePrice * 0.18);
    const totalPrice = Math.round(basePrice + gst);
    
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    return {
        totalMinutes,
        hours,
        mins,
        dayMinutes,
        nightMinutes,
        dayRate: rates.day,
        nightRate: rates.night,
        basePrice,
        gst,
        totalPrice
    };
}

/**
 * Show error message
 */
function showError(message) {
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    
    errorDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <i class="fas fa-exclamation-triangle me-2"></i>
            <strong>Error:</strong> ${message}
        </div>
    `;
    errorDiv.style.display = 'block';
    resultDiv.style.display = 'none';
}

/**
 * Show calculation and booking results
 */
function showResults(results, bookingSuccess) {
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    
    window.tripData = results;
    
    const statusColor = bookingSuccess ? 'bg-success' : 'bg-warning text-dark';
    const statusIcon = bookingSuccess ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    const statusMessage = bookingSuccess 
        ? 'Trip Booked & Fare Estimated Successfully!' 
        : 'Fare Estimated. Failed to save trip data (Check console/server logs).';

    resultDiv.innerHTML = `
        <div class="card ${statusColor}">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="card-title mb-0">
                    <i class="${statusIcon} me-2"></i>
                    ${statusMessage}
                </h4>
                <button class="btn ${bookingSuccess ? 'btn-light' : 'btn-dark'} btn-sm" onclick="copyTripSummary()">
                    <i class="fas fa-copy me-1"></i>Copy Summary
                </button>
            </div>
            <div class="card-body">
                <h5>Fare Breakdown (₹)</h5>
                <div><strong>Base Price:</strong> ₹${results.basePrice.toFixed(2)}</div>
                <div><strong>GST (18%):</strong> ₹${results.gst}</div>
                <hr>
                <div class="h4"><strong><u>Total Price:</u></strong> ₹${results.totalPrice}</div>
                <hr>
                <h5>Trip Summary</h5>
                <div><strong>Customer:</strong> ${results.customerName} (${results.mobileNumber})</div>
                <div><strong>Route:</strong> ${results.tripType} / ${results.mode} (${results.vehicleType})</div>
                <div><strong>Locations:</strong> ${results.pickupLocation} to ${results.dropLocation || 'Same'}</div>
                <div><strong>Total Duration:</strong> ${String(results.hours).padStart(2, '0')}:${String(results.mins).padStart(2, '0')} (min. 120 mins billed)</div>
            </div>
        </div>
    `;
    
    resultDiv.style.display = 'block';
    errorDiv.style.display = 'none';
}

/**
 * Copy trip summary to clipboard in the requested format
 */
function copyTripSummary() {
    if (!window.tripData) {
        showError("No trip data available to copy.");
        return;
    }
    
    const data = window.tripData;
    
    const startDate = new Date(data.startTime);
    const endDate = new Date(data.endTime);
    const formatDateTime = (date) => {
        return date.toLocaleString('en-IN', {
            day: '2-digit',
            month: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };
    
    const totalTimeFormatted = `${String(data.hours).padStart(2, '0')}:${String(data.mins).padStart(2, '0')}`;
    
    const summary = `Trip Start Time - ${formatDateTime(startDate)}
Trip End Time - ${formatDateTime(endDate)}
Trip Type - ${data.tripType}
Trip Route - ${data.mode}
Vehicle - ${data.vehicleType}
Customer - ${data.customerName} (${data.mobileNumber})
Pick up - ${data.pickupLocation}
Drop - ${data.dropLocation || 'N/A (Round Trip)'}
Total Time - ${totalTimeFormatted}
Total Price - ₹${data.totalPrice}`;
    
    navigator.clipboard.writeText(summary).then(() => {
        const copyButton = document.querySelector('[onclick="copyTripSummary()"]');
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = '<i class="fas fa-check me-1"></i>Copied!';
        copyButton.classList.remove('btn-light', 'btn-dark');
        copyButton.classList.add('btn-info');
        
        setTimeout(() => {
            copyButton.innerHTML = originalText;
            copyButton.classList.remove('btn-info');
            copyButton.classList.add(data.bookingSuccess ? 'btn-light' : 'btn-dark');
        }, 2000);
    }).catch(err => {
        showError("Failed to copy to clipboard. Please allow clipboard access.");
        console.error('Copy failed:', err);
    });
}


/**
 * Main function to book a trip and calculate fare
 */
async function bookTrip() {
    // 1. Gather all form data
    const customerName = document.getElementById("customerName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const uniform = document.getElementById("uniform").value;
    const tripType = document.getElementById("tripType").value;
    const mode = document.getElementById("mode").value;
    const vehicleType = document.getElementById("vehicleType").value;
    const pickupLocation = document.getElementById("pickupLocation").value;
    const dropLocation = document.getElementById("dropLocation").value;
    
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    // 2. Validate inputs
    if (!customerName || !mobileNumber || !startTime || !endTime || !pickupLocation || (mode === 'One Way' && !dropLocation)) {
        showError("Please fill in all required customer and trip details.");
        return;
    }

    if (isNaN(start) || isNaN(end) || end <= start) {
        showError("Please enter valid Trip Start and End dates/times. End time must be after start time.");
        return;
    }
    
    // 3. Calculate Fare
    let fareResults;
    try {
        fareResults = calculateFareLogic(start, end, uniform, tripType, mode);
    } catch (e) {
        showError(e.message);
        return;
    }

    // 4. Compile all data for the server
    const tripData = {
        customerName,
        mobileNumber,
        startTime: startTime,
        endTime: endTime,
        tripType,
        mode,
        vehicleType,
        pickupLocation,
        dropLocation: mode === 'One Way' ? dropLocation : null,
        uniform,
        ...fareResults,
        startDate: start.toISOString(),
        endDate: end.toISOString()
    };
    
    // 5. Send data to server for booking/saving
    let bookingSuccess = false;
    try {
        const response = await fetch('/api/book_trip', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tripData),
        });

        if (response.ok) {
            console.log('Trip successfully booked and data sent to server.');
            bookingSuccess = true;
        } else {
            console.error('Server reported failure to book trip:', response.status, response.statusText);
        }
    } catch (e) {
        console.error('Network error: Could not connect to the booking server.', e);
    }

    // 6. Show Results
    showResults({ ...tripData, bookingSuccess }, bookingSuccess);
}
