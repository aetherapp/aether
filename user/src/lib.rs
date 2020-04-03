#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate serde_derive;

extern crate rocket_contrib;
mod routes;

/**
 * Create the new rocket server.
 * This is split from main to improve testability.
 */
pub fn create_server() -> rocket::Rocket {
	rocket::ignite().mount("/api/user", routes![routes::health::health])
}
