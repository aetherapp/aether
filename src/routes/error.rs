use rocket_contrib::json::Json;

/**
 * 404 catcher.
 * Called by rocket when a no other route matches.
 */
#[catch(404)]
pub fn not_found() -> Json<ErrorResponse> {
	Json(ErrorResponse { error: "notFound" })
}

/**
 * Error response body.
 */
#[derive(Serialize)]
pub struct ErrorResponse {
	error: &'static str,
}
