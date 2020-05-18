use include_dir::Dir;
use std::path::{Path, PathBuf};

static FRONTEND_FILES: Dir = include_dir!("frontend/dist");

#[get("/<file..>")]
pub fn serve(file: PathBuf) -> &'static [u8] {
	let path = Path::new("").join(file);
	let file = FRONTEND_FILES
		.get_file(path)
		.or_else(|| FRONTEND_FILES.get_file("index.html"))
		.unwrap();

	file.contents()
}

#[get("/")]
pub fn serve_index() -> &'static [u8] {
	let file = FRONTEND_FILES.get_file("index.html").unwrap();

	file.contents()
}
