#target photoshop

var layoutDoc = app.activeDocument;
var layoutWidth = layoutDoc.width;
var layoutHeight = layoutDoc.height;
var marginX = 96;
var marginY = 54;

function fitImageInLayout(imageLayer) {
    var imgWidth = imageLayer.bounds[2] - imageLayer.bounds[0];
    var imgHeight = imageLayer.bounds[3] - imageLayer.bounds[1];

    var availableWidth = layoutWidth - 2 * marginX;
    var availableHeight = layoutHeight - 2 * marginY;

    var imgAspectRatio = imgWidth / imgHeight;
    var layoutAspectRatio = availableWidth / availableHeight;

    var newWidth, newHeight;
    if (imgAspectRatio > layoutAspectRatio) {
        newWidth = availableWidth;
        newHeight = availableWidth / imgAspectRatio;
    } else {
        newHeight = availableHeight;
        newWidth = availableHeight * imgAspectRatio;
    }

    imageLayer.resize(newWidth / imgWidth * 100, newHeight / imgHeight * 100);

    var offsetX = (layoutWidth - newWidth) / 2;
    var offsetY = (layoutHeight - newHeight) / 2;
    imageLayer.translate(offsetX - imageLayer.bounds[0], offsetY - imageLayer.bounds[1]);
}

function processFolder(folderPath, destinationFolder) {
    var folder = new Folder(folderPath);
    var files = folder.getFiles(/\.(jpg|jpeg|png|gif)$/i); 

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        var memeDoc = open(file);

        var memeLayer = memeDoc.activeLayer.duplicate(layoutDoc, ElementPlacement.PLACEATBEGINNING);

        memeDoc.close(SaveOptions.DONOTSAVECHANGES);

        fitImageInLayout(memeLayer);

        var fileName = file.name.replace(/\.[^.]+$/, ".png");
        var saveFile = new File(destinationFolder + "/" + fileName);

        savePNG(saveFile);

        memeLayer.remove();
    }
}

function savePNG(file) {
    var pngOptions = new PNGSaveOptions();
    pngOptions.compression = 6;
    layoutDoc.saveAs(file, pngOptions, true, Extension.LOWERCASE);
}

function main() {
    var folderPath = Folder.selectDialog("Rasmlar joylashgan papkani belgilang");

    var destinationFolder = Folder.selectDialog("Rasmlarni qayerga saqlay?");

    if (folderPath != null && destinationFolder != null) {
        processFolder(folderPath, destinationFolder);
    } else {
        alert("Papka tanlanmadi. Jarayon bekor qilindi.");
    }
}

main();
