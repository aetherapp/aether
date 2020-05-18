use include_dir::Dir;
use rocket::http::{ContentType, Status};
use rocket::response::content::Content;
use std::path::PathBuf;

static FRONTEND_FILES: Dir = include_dir!("frontend/dist");

#[get("/<file..>")]
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
pub fn serve_index() -> Result<Content<&'static [u8]>, Status> {
	FRONTEND_FILES
		.get_file("index.html")
		.and_then(|file| Some(file.contents()))
		.and_then(|file| Some(Content(get_type("index.html"), file)))
		.ok_or(Status::NotFound)
}

fn get_type(file_name: &str) -> ContentType {
	let suffix = file_name.split(".").last();

	if suffix.is_none() {
		return ContentType::Binary;
	}

	match suffix.unwrap() {
		"html" => ContentType::HTML,
		"css" => ContentType::CSS,
		"js" => ContentType::JavaScript,
		"ico" => ContentType::Icon,
		_ => ContentType::Binary,
	}
}
