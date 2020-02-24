use chrono::{DateTime, Utc};

// Aether user representation.
pub struct User {
	// User ID.
	id: String,
	// Firstname.
	first_name: String,
	// Lastname.
	last_name: String,
	// Creation date
	created_at: DateTime<Utc>,
}
