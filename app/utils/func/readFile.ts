export const readFile = (file: File) =>
  new Promise<string>((resolve, reject) => {
    try {
      let src = "";
      const reader = new FileReader();
      reader.onload = (e) => {
        src = reader.result as string;
        resolve(src);
      };
      reader.onerror = (e) => {
        reject(e);
      };
      reader.readAsDataURL(file);
    } catch (e) {
      reject(e);
    }
  });
