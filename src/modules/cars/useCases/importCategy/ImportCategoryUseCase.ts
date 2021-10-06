import csvParse from "csv-parse";
import fs from "fs";
class ImportCategoryUseCase {
  execute(file: Express.Multer.File | undefined): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
    //console.log(file);
  }
}

export { ImportCategoryUseCase };
