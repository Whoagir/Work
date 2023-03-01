export default function sketch(p) {
    let canvas;

    p.setup = () => {
        canvas = p.createCanvas(300, 200);
        p.noStroke();
    }

    p.draw = () => {
        p.background(1);
        p.rotate(200.0);
        p.stroke(255, 0, 0);
        p.strokeWeight(10);
        p.fill(255);
        p.ellipse(0, 0, 10, 10);
        p.fill(50);
        p.ellipse(0, 0, 20, 20);
        p.fill(200);
        p.ellipse(0, 0, 30, 30);

        
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
        if (canvas) //Make sure the canvas has been created
            p.fill(newProps.color);
    }
}