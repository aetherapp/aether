use include_dir::Dir;
use rocket::http::{ContentType, Status};
use rocket::response::content::Content;
use std::path::PathBuf;

static FRONTEND_FILES: Dir = include_dir!("frontend/dist");

#[get("/<file..>")]
/**
 * Serve the static files with a path.
 */
pub fn serve(file: PathBuf) -> Result<Content<&'static [u8]>, Status> {
	let path = match file.to_str() {
		Some(val) => val,
		_ => return Err(Status::InternalServerError),
	};

	FRONTEND_FILES
		.get_file(path)
		.or_else(|| FRONTEND_FILES.get_file("index.html"))
		.and_then(|file| Some(file.contents()))
		.and_then(|file| Some(Content(get_type(path), file)))
		.ok_or(Status::NotFound)
}

#[get("/")]
/**
 * Serve `index.html` on `/`.
 */
pub fn serve_index() -> Result<Content<&'static [u8]>, Status> {
	FRONTEND_FILES
		.get_file("index.html")
		.and_then(|file| Some(file.contents()))
		.and_then(|file| Some(Content(get_type("index.html"), file)))
		.ok_or(Status::NotFound)
}

fn get_type(path: &str) -> ContentType {
	let file_name = path.split("/").last();
	if file_name.is_none() {
		return ContentType::Binary;
	}

	let file = file_name.unwrap();
	if file.split(".").count() == 1 {
		return ContentType::HTML;
	}

	let extension = file.split(".").last();
	if extension.is_none() {
		return ContentType::Binary;
	}

	match extension.unwrap() {
		"html" => ContentType::HTML,
		"css" => ContentType::CSS,
		"js" => ContentType::JavaScript,
		"ico" => ContentType::Icon,
		_ => ContentType::Binary,
	}
}

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	/**
	 * Get the index.
	 */
	fn get_index() {
		assert_eq!(get_type("/index.html"), ContentType::HTML);
	}

	#[test]
	/**
	 * Get the index in a different path, to check for compatability with the history api.
	 */
	fn get_history() {
		assert_eq!(get_type("/users"), ContentType::HTML);
	}

	#[test]
	/**
	 * Get a Javascript file.
	 */
	fn get_js() {
		assert_eq!(get_type("/src.12323.js"), ContentType::JavaScript);
	}
	#[test]
	/**
	 * Get a CSS file.
	 */
	fn get_css() {
		assert_eq!(get_type("/style.s3efqed.css"), ContentType::CSS);
	}

	#[test]
	/**
	 * Get a Binary file.
	 */
	fn get_binary() {
		assert_eq!(get_type("/binary.bin"), ContentType::Binary);
	}
}
