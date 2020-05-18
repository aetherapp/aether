use std::fs;
use std::io::{self, Write};
use std::process::Command;

fn main() {
	println!("cargo:rerun-if-changed=build.rs");
	println!("cargo:rerun-if-changed=frontend");

	walkdir("./frontend/src");

	let out = Command::new("yarn")
		.current_dir("./frontend")
		.args(&["build"])
		.output()
		.expect("cargo:warning=Failed to build frontend for embedding.");

	io::stdout().write_all(&out.stdout).unwrap();
	io::stderr().write_all(&out.stderr).unwrap();

	assert!(out.status.success());
}

fn walkdir(path: &str) {
	let dir = fs::read_dir(path).unwrap();

	for entry in dir {
		let e = entry.unwrap();
		let path = e.path();

		if e.file_type().unwrap().is_dir() {
			walkdir(path.to_str().unwrap());
		}

		println!("cargo:rerun-if-changed={}", path.to_str().unwrap());
	}
}
