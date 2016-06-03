function ReadFile(fileObj) {
    var reader = new FileReader();
    var blob = new Blob();
    reader.readAsText(fileObj);
    return reader.result;
}
