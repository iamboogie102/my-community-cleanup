<?php
// Example: Fetch upcoming events from database
// Replace with actual database connection and query logic

// Simulated data for demonstration
$upcomingEvents = [
    ['name' => 'Community Cleanup Day', 'date' => '2024-08-15'],
    ['name' => 'River Clean-Up Event', 'date' => '2024-09-05'],
    ['name' => 'Park Restoration Project', 'date' => '2024-10-20']
];

// Return JSON response
header('Content-Type: application/json');
echo json_encode(['count' => count($upcomingEvents)]);
?>
