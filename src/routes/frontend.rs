use include_dir::Dir;
use rocket::http::Status;
use std::path::{Path, PathBuf};

static FRONTEND_FILES: Dir = include_dir!("frontend/dist");

#[get("/<file..>")]
pub fn serve(file: PathBuf) -> Result<&'static [u8], Status> {
	let path = Path::new("").join(file);

	FRONTEND_FILES
		.get_file(path)
		.or_else(|| FRONTEND_FILES.get_file("index.html"))
		.and_then(|file| Some(file.contents()))
		.ok_or(Status::NotFound)
}

#[get("/")]
pub fn serve_index() -> Result<&'static [u8], Status> {
	FRONTEND_FILES
		.get_file("index.html")
		.and_then(|file| Some(file.contents()))
		.ok_or(Status::NotFound)
}
