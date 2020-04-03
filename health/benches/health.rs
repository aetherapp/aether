extern crate health;

use criterion::{criterion_group, criterion_main, Criterion};
use rocket::local::Client;

/**
 * Health response time runner.
 */
fn response_time(c: &mut Criterion) {
	let rocket = health::create_server();
	let client = Client::new(rocket).expect("valid rocket instance");

	c.bench_function("/api/health", |b| {
		b.iter(|| client.get("/api/health").dispatch())
	});
}

criterion_group!(benches, response_time);
criterion_main!(benches);
