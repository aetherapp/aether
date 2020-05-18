#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate serde_derive;
#[macro_use]
extern crate include_dir;

extern crate rocket_contrib;
mod routes;

/**
 * Create the new rocket server.
 * This is split from main to improve testability.
 */
pub fn create_server() -> rocket::Rocket {
	rocket::ignite()
		.mount("/api/health", routes![routes::health::health])
		.mount(
			"/",
			routes![routes::frontend::serve_index, routes::frontend::serve],
		)
}
