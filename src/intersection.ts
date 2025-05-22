type FileData = {
  path: string;
  content: string;
};

type Status = {
  isOpen: boolean;
  errMsg?: string;
};

type AccessedFileData = FileData & Status;

// interface FileData {
//   path: string;
//   content: string;
// };

// interface Status {
//   isOpen: boolean;
//   errMsg?: string;
// };

// interface AccessedFileData extends FileData , Status{}
