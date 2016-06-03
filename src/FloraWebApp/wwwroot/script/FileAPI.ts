function ReadFile(fileObj): string {
    var reader = new FileReader();
    var blob = new Blob();
    reader.readAsText(fileObj);

    return reader.result;
}