import { ImgKompWithURL } from './imgkomp.js';
window.addEventListener("load", () => {
    const canvas = document.getElementById("cnv");
    /*const imgs = [
        ["./orig.png", "./big.png"],
        ["./left2.png", "./right2.png"],
        ["./left3.png", "./right3.png"],
    ]

    let current = 0;*/
    const img = new ImgKompWithURL(canvas, "./left2.png", "./right2.png");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    if (window.location.search != "") {
        const imgs = (window.location.search.substring(1)).split("__DIVIDER__");
        left.value = imgs[0];
        right.value = imgs[1];
        console.log(imgs);
        img.loadImagesFromURL(imgs[0], imgs[1]);
    }
    document.getElementById("send")?.addEventListener("click", () => {
        window.location.search = (encodeURI(left.value) + "__DIVIDER__" + encodeURI(right.value));
    });
    /*document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "a":
                current = Math.max(0, current - 1)
                break;

            case "d":
                current = Math.min(current + 1, imgs.length - 1)
                break;
        }

        img.loadImagesFromURL(imgs[current][0], imgs[current][1])
    })

    document.getElementById("btn1")!.addEventListener("click", () => {
        img.loadImagesFromURL(imgs[0][0], imgs[0][1])
    })
    document.getElementById("btn2")!.addEventListener("click", () => {
        img.loadImagesFromURL(imgs[1][0], imgs[1][1])
    })
    document.getElementById("btn3")!.addEventListener("click", () => {
        img.loadImagesFromURL(imgs[2][0], imgs[2][1])
    })*/
    img.draw();
});
