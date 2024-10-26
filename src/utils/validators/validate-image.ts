interface ValidationResult {
  success: boolean;
  errors: string[];
}

const validateFiles = (file: File): ValidationResult => {
  const errors: string[] = [];

  if (file) {
    const allowedImageExtensions = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];
    const imageExtension = file.type;

    if (!allowedImageExtensions.includes(imageExtension)) {
      errors.push(
        "Extensión del archivo no válida. Las extensiones permitidas son .jpg, .jpeg, .png, .webp"
      );
    }
  }
  return {
    success: errors.length === 0,
    errors,
  };
};

const handleFileUpload = async (file: File) => {
  const { success, errors } = validateFiles(file);
  return { success, errors };
};

export default handleFileUpload;
