const API_URL = 'https://dmt-1.vercel.app/api'; // CHANGE THIS FOR DEPLOYMENT

document.addEventListener('DOMContentLoaded', () => {
    const tripForm = document.getElementById('trip-form');
    const routeTypeSelect = document.getElementById('route-type');
    const dropAddressGroup = document.getElementById('drop-address-group');
    const bookingSection = document.getElementById('booking-section');
    const reportsSection = document.getElementById('reports-section');
    const bookingNav = document.getElementById('booking-nav');
    const reportsNav = document.getElementById('reports-nav');
    const reportsTableBody = document.querySelector('#trips-table tbody');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close-button');
    const tripPriceInput = document.getElementById('trip-price');
    const driverNameInput = document.getElementById('driver-name');
    const driverNumberInput = document.getElementById('driver-number');
    const completeTripBtn = document.getElementById('complete-trip-btn');

    let currentTripId = null;

    // Show/hide drop-off address based on route type
    routeTypeSelect.addEventListener('change', () => {
        const dropAddressInput = document.getElementById('drop-address');
        if (routeTypeSelect.value === 'one-way') {
            dropAddressGroup.classList.remove('hidden');
            dropAddressInput.setAttribute('required', 'required');
        } else {
            dropAddressGroup.classList.add('hidden');
            dropAddressInput.removeAttribute('required');
        }
    });

    // Handle form submission
    tripForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const tripData = {
            customerName: document.getElementById('customer-name').value,
            mobileNumber: document.getElementById('customer-mobile').value,
            routeType: document.getElementById('route-type').value,
            tripType: document.getElementById('trip-type').value,
            pickAddress: document.getElementById('pick-address').value,
            startTime: document.getElementById('start-time').value,
            endTime: document.getElementById('end-time').value,
            dropAddress: document.getElementById('route-type').value === 'one-way' ? document.getElementById('drop-address').value : 'N/A',
            vehicleType: document.getElementById('vehicle-type').value
        };

        try {
            const response = await fetch(`${API_URL}/trips`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tripData)
            });

            if (!response.ok) throw new Error('Failed to book trip');
            const newTrip = await response.json();
            alert(`Trip booked successfully! Trip ID: ${newTrip.tripId}`);
            tripForm.reset();
            fetchTrips(); // Refresh dashboard
        } catch (error) {
            console.error('Error booking trip:', error);
            alert('Failed to book trip. Check backend connection.');
        }
    });

    // Handle modal display and data population
    reportsTableBody.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const tripId = e.target.closest('tr').dataset.tripId;
            showTripDetails(tripId);
        }
    });

    async function showTripDetails(tripId) {
        try {
            const response = await fetch(`${API_URL}/trips/${tripId}`);
            if (!response.ok) throw new Error('Trip not found');
            const trip = await response.json();

            // Populate modal with trip data
            document.getElementById('display-trip-id').textContent = trip.tripId;
            document.getElementById('display-customer-name').textContent = trip.customerName;
            document.getElementById('display-customer-mobile').textContent = trip.mobileNumber;
            document.getElementById('display-pick-address').textContent = trip.pickAddress;
            document.getElementById('display-drop-address').textContent = trip.dropAddress;
            document.getElementById('display-start-time').textContent = new Date(trip.startTime).toLocaleString();
            document.getElementById('display-end-time').textContent = new Date(trip.endTime).toLocaleString();
            document.getElementById('display-duration').textContent = calculateDuration(trip.startTime, trip.endTime);

            // Populate mutable fields
            driverNameInput.value = trip.driverName || '';
            driverNumberInput.value = trip.driverNumber || '';
            tripPriceInput.value = trip.tripPrice || '';
            document.getElementById('display-gst').textContent = `₹${(trip.gst || 0).toFixed(2)}`;
            document.getElementById('display-total-bill').textContent = `₹${(trip.totalBill || 0).toFixed(2)}`;

            currentTripId = trip.tripId;
            modal.classList.remove('hidden');
        } catch (error) {
            console.error('Error fetching trip details:', error);
            alert('Could not fetch trip details.');
        }
    }

    // Handle price input for calculations
    tripPriceInput.addEventListener('input', () => {
        const tripPrice = parseFloat(tripPriceInput.value) || 0;
        const gst = tripPrice * 0.18;
        const totalBill = tripPrice + gst;

        document.getElementById('display-gst').textContent = `₹${gst.toFixed(2)}`;
        document.getElementById('display-total-bill').textContent = `₹${totalBill.toFixed(2)}`;
    });

    // Handle trip completion
    completeTripBtn.addEventListener('click', async () => {
        if (!currentTripId) return;

        const updatedData = {
            driverName: driverNameInput.value,
            driverNumber: driverNumberInput.value,
            tripPrice: parseFloat(tripPriceInput.value) || 0,
            gst: (parseFloat(tripPriceInput.value) * 0.18) || 0,
            totalBill: (parseFloat(tripPriceInput.value) * 1.18) || 0,
            status: 'completed'
        };

        try {
            const response = await fetch(`${API_URL}/trips/${currentTripId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) throw new Error('Failed to update trip');
            alert('Trip updated successfully!');
            modal.classList.add('hidden');
            fetchTrips();
        } catch (error) {
            console.error('Error completing trip:', error);
            alert('Failed to complete trip. Please try again.');
        }
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    // Navigation and data fetching
    reportsNav.addEventListener('click', (e) => {
        e.preventDefault();
        bookingSection.classList.add('hidden');
        reportsSection.classList.remove('hidden');
        bookingNav.classList.remove('active');
        reportsNav.classList.add('active');
        fetchTrips();
    });

    bookingNav.addEventListener('click', (e) => {
        e.preventDefault();
        reportsSection.classList.add('hidden');
        bookingSection.classList.remove('hidden');
        reportsNav.classList.remove('active');
        bookingNav.classList.add('active');
    });

    async function fetchTrips() {
        try {
            const response = await fetch(`${API_URL}/trips`);
            if (!response.ok) throw new Error('Failed to fetch trips');
            const trips = await response.json();
            renderTrips(trips);
        } catch (error) {
            console.error('Error fetching trips:', error);
            reportsTableBody.innerHTML = '<tr><td colspan="4">Failed to load trips.</td></tr>';
        }
    }

    function renderTrips(trips) {
        reportsTableBody.innerHTML = '';
        if (trips.length === 0) {
            reportsTableBody.innerHTML = '<tr><td colspan="4">No trips found.</td></tr>';
            return;
        }

        trips.forEach(trip => {
            const row = document.createElement('tr');
            row.dataset.tripId = trip.tripId;

            const statusText = getStatusText(trip);
            const statusClass = getStatusClass(trip);

            row.innerHTML = `
                <td>${trip.tripId}</td>
                <td>${trip.customerName}</td>
                <td><span class="${statusClass}">${statusText}</span></td>
                <td><button class="details-btn">View Details</button></td>
            `;
            reportsTableBody.appendChild(row);
        });
    }

    function getStatusText(trip) {
        if (trip.status === 'completed') return 'Completed';
        if (trip.driverName) return 'In Progress';
        return 'Created';
    }

    function getStatusClass(trip) {
        if (trip.status === 'completed') return 'status-completed';
        if (trip.driverName) return 'status-in-progress';
        return 'status-created';
    }

    function calculateDuration(start, end) {
        const diff = new Date(end) - new Date(start);
        const minutes = Math.floor(diff / (1000 * 60));
        return `${minutes} minutes`;
    }
    
    // Initial fetch of trips when the page loads
    fetchTrips();
});
