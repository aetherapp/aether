use chrono::{DateTime, Utc};

// File or directory in the system.
pub struct File {
	// ID of the string.
	id: String,
	// Name of the file/directory.
	name: String,
	// Type of the file
	file_type: FileType,
	// MIME type, only exists when the file is a file.
	mime: Option<String>,
	// Size of the file.
	size: u64,
	// Last updated time.
	last_changed: DateTime<Utc>,
}

// Type of the file.
pub enum FileType {
	// A directory, which can contain more files.
	Directory,
	// A file, linked to a storage space.
	File,
}
