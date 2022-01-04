function getScreenSize() {
         return [process.stdout.columns, process.stdout.rows];
}

let screenSize = getScreenSize();

let screenWidth = screenSize[0]-2;
let screenHeight = screenSize[1]-2;
let pixelArraySize = screenWidth * screenHeight;
console.log(pixelArraySize);
console.log(screenWidth);
console.log(screenHeight);
let pixelArray = new Array (pixelArraySize).fill(" ");//two for 1

function trnsltOneDimnsion (x, y) {
        let oneDindex = (y * screenWidth) + x;
        return oneDindex;// Indexes
}

function draw (){


        let columnLength = screenWidth;
        let joinedPixels = pixelArray.join("");
        for (i = 0; i < screenHeight; i++) {
                let ndx = screenWidth * i;
                console.log(i+joinedPixels.slice(ndx, ndx + columnLength));
        }

}


function line (x1, y1, x2, y2) {
        let dx = x2 - x1;
        let dy = y2 - y1;
        let D = 2*dy - dx;
        let y = y1;

        for (x = x1; x < x2; x++){
                console.log(x, y);
                let oneD = trnsltOneDimnsion(x, y);
                console.log(oneD);
                pixelArray[oneD] = "88";//two instead of one
                //pixelArray[oneD+1] = "8"
                console.log(pixelArray[oneD]);
                if (D > 0) {
                        y += 1;
                        D = D - 2*dx
                }
                else if (D = D + 2*dy){

                }
        }
}

function line3d(x1, y1, z1, x2, y2, z2) {
        let lstOfPnts = []
        lstOfpnts.append ((x1, y1, z1)) //checka ef failar
        let dx = Math.abs(x2 - x1)
        let dy = Math.abs(y2 - y1)
        let dz = Math.abs(z2 - z1)
        let xs
        let xy
        let xz

        if (x2 > x1) {
                xs = 1
        }
        else {
                xs = -1
        }
        if (y2 > y1) {
                ys = 1
        }
        else {
                ys = -1
        }
        if (z2 > z1) {
                zs = 1
        }
        else {
                zs = -1
        }

        //Driving axis is x axis
        let p1
        let p2
        if (dx >= dy && dx >= dz){
                p1 = 2 * dy - dx
                p2 = 2 * dz - dx
		while (x1 != x2) {
                        x1 += xs
                        if (p1 >= 0){
                                y1 += ys
                                p1 -= 2 * dx
                        }
                        if (p2 >= 0) {
                                z1 += zs
                                p2 -= 2 * dx
                        }
                        p1 += 2 * dy
                        p2 += 2 * dz
                }
                lstOFpnts.append((x1, y1, z1))// check ef failar
        }
}

line(0, 0, 100, 100);

draw();
console.log(screenHeight);