use rocket_contrib::json::Json;

/**
 * Health endpoint.
 * Called by rocket when a request matches.
 */
#[get("/")]
pub fn health() -> Json<HealthResponse> {
	Json(HealthResponse { state: "ok" })
}

/**
 * Response to the health endpoint.
 */
#[derive(Serialize)]
pub struct HealthResponse {
	state: &'static str,
}
