extern crate user;

use rocket::{
	http::{ContentType, Status},
	local::Client,
};

/**
 * Call the HTTP request for health, and verify it's response.
 */
#[test]
fn get_health() {
	let rocket = user::create_server();
	let client = Client::new(rocket).expect("valid rocket instance");

	let req = client.get("/user/health");
	let res = req.dispatch();

	assert_eq!(res.status(), Status::Ok);
	assert_eq!(res.content_type(), Some(ContentType::JSON));
}
