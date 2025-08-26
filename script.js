document.addEventListener('DOMContentLoaded', () => {
    const tripForm = document.getElementById('trip-form');
    const routeTypeSelect = document.getElementById('route-type');
    const dropAddressGroup = document.getElementById('drop-address-group');
    const tripDetailsDiv = document.getElementById('trip-details');
    const tripPriceInput = document.getElementById('trip-price');

    // Show/hide drop-off address based on route type
    routeTypeSelect.addEventListener('change', () => {
        if (routeTypeSelect.value === 'one-way') {
            dropAddressGroup.classList.remove('hidden');
            document.getElementById('drop-address').setAttribute('required', 'required');
        } else {
            dropAddressGroup.classList.add('hidden');
            document.getElementById('drop-address').removeAttribute('required');
        }
    });

    // Handle form submission
    tripForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const customerName = document.getElementById('customer-name').value;
        const customerMobile = document.getElementById('customer-mobile').value;
        const pickAddress = document.getElementById('pick-address').value;
        const dropAddress = document.getElementById('drop-address').value;
        const startTime = new Date(document.getElementById('start-time').value);
        const endTime = new Date(document.getElementById('end-time').value);
        const routeType = routeTypeSelect.value;
        const totalMinutes = Math.floor((endTime - startTime) / (1000 * 60));

        // Generate a unique Trip ID
        const tripId = generateTripId();

        // Display trip details
        document.getElementById('display-trip-id').textContent = tripId;
        const tripLink = document.getElementById('trip-link');
        tripLink.href = `https://your-github-username.github.io/your-repo/${tripId}`;
        document.getElementById('display-customer-name').textContent = customerName;
        document.getElementById('display-customer-mobile').textContent = customerMobile;
        document.getElementById('display-pick-address').textContent = pickAddress;
        document.getElementById('display-start-time').textContent = startTime.toLocaleString();
        document.getElementById('display-end-time').textContent = endTime.toLocaleString();
        document.getElementById('display-duration').textContent = `${totalMinutes} minutes`;
        
        // Handle drop address display
        if (routeType === 'one-way') {
            document.getElementById('display-drop-address').textContent = dropAddress;
            document.getElementById('trip-details').querySelector('p:nth-of-type(6)').style.display = 'block';
        } else {
            document.getElementById('display-drop-address').textContent = 'N/A';
            document.getElementById('trip-details').querySelector('p:nth-of-type(6)').style.display = 'none';
        }

        // Show the trip details section
        tripDetailsDiv.classList.remove('hidden');
    });

    // Calculate total bill on price input
    tripPriceInput.addEventListener('input', () => {
        const tripPrice = parseFloat(tripPriceInput.value) || 0;
        const gst = tripPrice * 0.18;
        const totalBill = tripPrice + gst;

        document.getElementById('display-gst').textContent = gst.toFixed(2);
        document.getElementById('display-total-bill').textContent = totalBill.toFixed(2);
    });

    // Function to generate a Trip ID
    function generateTripId() {
        const prefix = "DDHYD";
        const tripCount = localStorage.getItem('tripCount') ? parseInt(localStorage.getItem('tripCount')) + 1 : 1;
        localStorage.setItem('tripCount', tripCount);
        const paddedCount = String(tripCount).padStart(3, '0');
        return `${prefix}${paddedCount}`;
    }
});
