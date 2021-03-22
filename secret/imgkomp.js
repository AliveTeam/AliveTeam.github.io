export class ImgKomp {
    constructor(cnv, iLeft, iRight) {
        this.active = false;
        this.loaded = false;
        this.canvas = cnv;
        const context = this.canvas.getContext("2d");
        if (context !== null) {
            this.context = context;
        }
        else {
            throw new Error("Could not get 2D context from canvas.");
        }
        this.percent = 60;
        this.loadImages(iLeft, iRight);
        this.context.imageSmoothingEnabled = false;
        this.canvas.addEventListener("mousedown", (e) => {
            this.percent = ((e.pageX - this.canvas.offsetLeft) / this.canvas.width) * 100;
            this.draw();
            this.active = true;
        });
        this.canvas.addEventListener("mouseup", () => {
            this.active = false;
        });
        this.canvas.addEventListener("mousemove", (e) => {
            if (this.active)
                requestAnimationFrame(() => {
                    this.percent = ((e.pageX - this.canvas.offsetLeft) / this.canvas.width) * 100;
                    this.draw();
                });
        });
    }
    waitForLoad() {
        this.draw();
        if (this.imgLeft?.complete && this.imgRight?.complete) {
            this.loaded = true;
            //console.log("done early")
            this.canvas.width = this.canvas.style.width = Math.max(this.imgLeft.width, this.imgRight.width);
            this.canvas.height = this.canvas.style.height = Math.max(this.imgLeft.height, this.imgRight.height);
            this.draw();
        }
        else {
            requestAnimationFrame(() => { this.waitForLoad(); });
        }
    }
    loadImages(iLeft, iRight) {
        this.loaded = false;
        this.imgLeft = iLeft;
        this.imgRight = iRight;
        this.canvas.width = this.canvas.style.width = 800;
        this.canvas.height = this.canvas.style.height = 800;
        this.draw();
        this.imgLeft.addEventListener("error", (e) => {
            console.error("Left image load failed with error: " + e.message);
        });
        this.imgRight.addEventListener("error", (e) => {
            console.error("Right image load failed with error: " + e.message);
        });
        this.waitForLoad();
    }
    draw() {
        this.context.strokeStyle = "white";
        this.context.fillStyle = "white";
        if (this.loaded && this.imgLeft !== undefined && this.imgRight !== undefined) {
            const width = this.canvas.width * (this.percent / 100);
            const width2 = this.imgLeft.width * (this.percent / 100);
            this.context.drawImage(this.imgRight, 0, 0, this.canvas.width, this.canvas.height);
            this.context.drawImage(this.imgLeft, 0, 0, width2, this.imgLeft.height, 0, 0, width, this.canvas.height);
            this.context.beginPath();
            this.context.moveTo(width, 0);
            this.context.lineTo(width, this.canvas.height);
            this.context.stroke();
        }
        else {
            this.context.fillStyle = "black";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.fillStyle = "white";
            this.context.textAlign = "center";
            this.context.fillText("Now loading...\nSo sit down and shaddap.", this.canvas.width / 2, this.canvas.height / 2);
            this.context.fillText(this.imgLeft?.complete ? "Left done" : "Left not done.", this.canvas.width / 2 - 100, this.canvas.height / 2 + 100);
            this.context.fillText(this.imgRight?.complete ? "Right done" : "Right not done.", this.canvas.width / 2 + 100, this.canvas.height / 2 + 100);
        }
    }
}
export class ImgKompWithURL extends ImgKomp {
    constructor(canvas, iLeft, iRight) {
        const imgL = new Image();
        const imgR = new Image();
        imgL.src = iLeft;
        imgR.src = iRight;
        super(canvas, imgL, imgR);
    }
    loadImagesFromURL(iLeftSrc, iRightSrc) {
        const imgL = new Image();
        const imgR = new Image();
        imgL.src = iLeftSrc;
        imgR.src = iRightSrc;
        super.loadImages(imgL, imgR);
    }
}
