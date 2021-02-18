class FileService {
    static saveImage(image) {
        var buffer = Buffer.from(image, 'base64');
        console.log(buffer);
        window.fs.writeFile('./image.jpg', buffer);
    }
}

export default FileService;