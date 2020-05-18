extern crate aether;

use rocket::{
	http::{ContentType, Status},
	local::Client,
};

/**
 * Check if getting root returns a HTML file.
 */
#[test]
fn get_index() {
	let rocket = aether::create_server();
	let client = Client::new(rocket).expect("valid rocket instance");

	let req = client.get("/");
	let res = req.dispatch();

	assert_eq!(res.status(), Status::Ok);
	assert_eq!(res.content_type(), Some(ContentType::HTML));
}

/**
 * Check if getting a different, non-existing URL also returns HTML.
 * This is for compatibility with the history API.
 */
#[test]
fn get_history_compatible() {
	let rocket = aether::create_server();
	let client = Client::new(rocket).expect("valid rocket instance");

	let req = client.get("/users");
	let res = req.dispatch();

	assert_eq!(res.status(), Status::Ok);
	assert_eq!(res.content_type(), Some(ContentType::HTML));
}
