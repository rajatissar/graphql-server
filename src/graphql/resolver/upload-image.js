import { createWriteStream } from 'fs';
import path from 'path';

const upload_image_resolver = async (obj, args) => {
  const { filename, mimetype, createReadStream } = await args.image;
  console.log(`mimetype - ${mimetype} - filename = ${filename}`);

  await new Promise((res) => createReadStream()
    .pipe(createWriteStream(path.join(process.env.root_path, 'tmp', filename)))
    .on('close', res));

  return {
    status: 'image uploaded successfully'
  };
};

export default upload_image_resolver;
