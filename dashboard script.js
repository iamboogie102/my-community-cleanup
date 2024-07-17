document.addEventListener('DOMContentLoaded', function() {
    // Example: Load upcoming events dynamically
    const upcomingEventsContainer = document.getElementById('upcoming-events');
    fetch('get_upcoming_events.php') // PHP script to fetch upcoming events
        .then(response => response.json())
        .then(data => {
            upcomingEventsContainer.innerHTML = `<a href="events.html" class="box">Upcoming Events: ${data.count}</a>`;
        })
        .catch(error => console.error('Error fetching upcoming events:', error));
});
