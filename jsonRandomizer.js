function randomizeParticles() {
    var particlesJSON = {
        detectRetina: true,
        fpsLimit: 50,
        particles: {
            number: {
                density: {
                    enable: false
                },
                value: 80,
                limit: 300
            },
            collisions: {
                enable: true,
                mode: "destroy",
            },
            color: {
                value: "#fff",
                animation: {
                    enable: true,
                    speed: 1,
                    sync: true,
                }
            },
            opacity: {
                animation: {
                    enable: true,
                    sync: true,
                    speed: 1
                },
                random: {
                    enable: true,
                    minimumValue: 0.3, 
                },
                value: 0.5,
            },
            lineLinked: {
                enable: true,
                distance: 150,
                opacity: 0.5,
                width: 2,
                triangles: {
                    enable: true,
                },
            },
            lineLinkedColor: "#000",
            move: {
                angle: 90,
                attract: {
                    enable: false,
                    rotate: {
                        x: 10,
                        y: 10
                    },
                },
                direction: "bottom-left",
                enable: true,
                outMode: "bounce-horizontal",
                random: true,
                speed: 3,
                straight: true,
            },
            rotate: {
                animation: {
                    enable: true,
                    speed: 10,
                    sync: true,
                },
                direction: "counter-clockwise",
                random: true,
                value: 8,
            },
            shadow: {
                blur: 10,
                color: {
                    value: "#000",
                },
                enable: true,
                offset: {
                    x: 100,
                    y: 100,
                },
            },
            shape: {
                options: {
                    polygon: {
                        nb_sides: 5,
                    },
                    star: {
                        nb_sides: 6,
                    },
                },
                type: "polygon",
            },
            size: {
                value: 7,
                animation: {
                    destroy: "max",
                    enable: true,
                    minimumValue: 1,
                    speed: 40,
                    startValue: "max",
                    sync: true,
                },
            },
            stroke: {
                color: {
                    value: "#000",
                },
                width: 5,
                opacity: 0.75,
            },
            twinkle: {
                lines: {
                    enable: true,
                    frequency: 0.05,
                },
                particles: {
                    enable: true,
                    frequency: 0.05
                }
            },
            l: {
                color: "#000"
            },
        },
        pauseOnBlur: true,
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "grab",
                },
                onHover: {
                    enable: true,
                    mode: "connect",
                    parallax: {
                        enable: false,
                        force: 60,
                        smooth: 10,
                    },
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 60,
                },
                connect: {
                    distance: 100,
                    links: {
                        opacity: 0.7,
                    },
                    radius: 60,
                },
                grab: {
                    distance: 100,
                    links: {
                        opacity: 0.7,
                    },
                },
                push: {
                    quantity: 6,
                },
                remove: {
                    quantity: 3,
                },
                repulse: {
                    distance: 300,
                    duration: 1,
                    speed: 5,
                },
                slow: {
                    factor: 10,
                    radius: 50,
                },
            },
        },
    };

    let colors = Array("#fff", "#ff0", "#0ff", "#f2aa4c");

    particlesJSON.particles.number.value = Math.floor(Math.random() * (250 - 10)) + 10;
    
    particlesJSON.particles.collisions.enable = Math.random() < 0.5 ? true : false;
    if (particlesJSON.particles.collisions.enable === true) {
        let modes = Array("bounce", "absorb", "destroy");
        particlesJSON.particles.collisions.mode = modes[Math.floor(Math.random() * modes.length)];
    }
    
    particlesJSON.particles.color.value = colors[Math.floor(Math.random() * colors.length)];
    particlesJSON.particles.color.animation.enable = Math.random() > 0.2 ? true : false;
    particlesJSON.particles.color.animation.sync = Math.random() > 0.3 ? true : false;


    particlesJSON.particles.opacity.animation.enable = Math.floor(Math.random() * 5) > 1 ? true : false;
    particlesJSON.particles.opacity.animation.sync = Math.floor(Math.random() * 3) > 1 ? true : false;
    particlesJSON.particles.opacity.animation.speed = Math.floor(Math.random() * 10);
    particlesJSON.particles.opacity.random.enable = Math.floor(Math.random() * 4) > 1 ? true : false;

    particlesJSON.particles.lineLinked.distance = Math.floor(Math.random() * (100 - 50)) + 50;
    particlesJSON.particles.lineLinked.enable = Math.random() > 0.4 ? true: false;
    particlesJSON.particles.lineLinked.opacity = Math.min(Math.random() * 2, 1);
    particlesJSON.particles.lineLinked.width = Math.random() * 5;
    particlesJSON.particles.lineLinkedColor = Math.random() > 0.2 ?colors[Math.floor(Math.random() * colors.length)] : "#000";

    particlesJSON.particles.move.enable = Math.random() > 0.01 ?true : false;
    if (particlesJSON.particles.move.enable === true) {
        particlesJSON.particles.move.angle = Math.random() * 180 - 90;
        particlesJSON.particles.move.attract.enable = Math.random() > 0.6 ? true : false;
        if (particlesJSON.particles.move.attract.enable === true) {
            particlesJSON.particles.move.attract.rotate.x = Math.floor(Math.random() * (100 -10)) + 10; 
            particlesJSON.particles.move.attract.rotate.y = Math.floor(Math.random() * (100 -10)) + 10; 
        }
        let directions = Array("top", "left", "bottom", "right", "top-left", "top-right", "bottom-left", "bottom-right");
        particlesJSON.particles.move.direction = directions[Math.floor(Math.random() * directions.length)];
        let outMode = Array("destroy", "out", "bounce","destroy", "out", "bounce","destroy", "out", "bounce","bounce-vertical","bounce-horizontal");
        particlesJSON.particles.move.outMode = directions[Math.floor(Math.random() * outMode.length)];
        particlesJSON.particles.move.random = Math.floor() > 0.89 ?true : false;
        particlesJSON.particles.move.speed = Math.random() * 5 + 2;
        particlesJSON.particles.move.straight = Math.random() > 0.98 ? true : false;
    }

    particlesJSON.particles.rotate.direction = Math.random() > 0.5 ? "clockwise": "counter-clockwise";
    particlesJSON.particles.rotate.value = Math.random() * 10;
    particlesJSON.particles.rotate.random = Math.random() > 0.85 ? true:false;
    particlesJSON.particles.rotate.animation.speed = Math.random() * 50;

    particlesJSON.particles.shadow.enable = Math.random() > 0.4 ? true: false;
    particlesJSON.particles.shadow.blur = Math.floor(Math.random() * 14 ) + 1;
    particlesJSON.particles.shadow.offset.x = Math.floor(Math.random()* (200)) - 400 ;
    particlesJSON.particles.shadow.offset.y = Math.floor(Math.random()* (200)) - 400 ;

    particlesJSON.particles.shape.options.polygon.nb_sides = Math.floor(Math.random() * ( 9 - 4)) + 4;
    particlesJSON.particles.shape.options.star.nb_sides = particlesJSON.particles.shape.options.polygon.nb_sides;
    let shapes = Array("circle", "circle", "circle", "circle", "circle", "triangle", "triangle", "triangle", "polygon", "polygon", "edge", "edge", "edge", "star");
    particlesJSON.particles.shape.type = shapes[Math.floor(Math.random() * shapes.length)];

    if (particlesJSON.particles.number.value > 150) {
        particlesJSON.particles.size.value = Math.floor(Math.random() * 10) + 5;
    } else if (particlesJSON > 50) {
        particlesJSON.particles.size.value = Math.floor(Math.random() * 10) + 10;
    } else {
        particlesJSON.particles.size.value = Math.floor(Math.random() * 10) + 30;
    } 
    particlesJSON.particles.size.animation.destroy = Math.random() > 0.5 ? "max": "min";
    particlesJSON.particles.size.animation.enable.true = Math.random() > 0.2 ? true : false;
    particlesJSON.particles.size.animation.speed = Math.floor(Math.random() * (60 -10)) + 10;
    particlesJSON.particles.size.animation.startValue = Math.random() > 0.5 ? "max": "min";

    particlesJSON.particles.stroke.width = Math.floor(Math.random()*20);
    particlesJSON.particles.stroke.opacity = Math.random();

    particlesJSON.particles.twinkle.lines.enable = Math.random() > 0.4 ? true : false;
    particlesJSON.particles.twinkle.lines.frequency = Math.random() * 0.75 + 0.05;
    particlesJSON.particles.twinkle.particles.enable = particlesJSON.particles.twinkle.lines.enable;
    particlesJSON.particles.twinkle.particles.frequency = particlesJSON.particles.twinkle.lines.frequency;


    let onClick = Array("bubble", "push", "remove", "repulse");
    let onHover = Array("bubble", "connect", "grab", "push", "repulse");
    particlesJSON.interactivity.events.onClick.enable = Math.random() > 0.05 ? true : false;
    particlesJSON.interactivity.events.onHover.enable = Math.random() > 0.05 ? true : false;
    particlesJSON.interactivity.events.onClick.mode = onClick[Math.floor(Math.random() * onClick.length)];
    particlesJSON.interactivity.events.onHover.mode = onHover[Math.floor(Math.random() * onHover.length)];
    particlesJSON.interactivity.events.onHover.parallax.enable = Math.random() > 0.3 ? true : false;
    particlesJSON.interactivity.events.onHover.parallax.force = Math.floor(Math.random() * (150 - 10)) + 40;
    particlesJSON.interactivity.events.onHover.parallax.smooth = Math.floor(Math.random()* (120 - 10)) + 40;

    particlesJSON.interactivity.modes.bubble.distance = Math.floor(Math.random() * (500 - 50)) + 50;
    particlesJSON.interactivity.modes.bubble.duration = (Math.random() * (5-0.2)) +0.2;
    particlesJSON.interactivity.modes.bubble.opacity = Math.random() + 0.2;
    particlesJSON.interactivity.modes.bubble.size = Math.floor(Math.random() * (100-10)) + 20;
    particlesJSON.interactivity.modes.connect.distance = Math.floor(Math.random() * (500 - 50)) + 50;
    particlesJSON.interactivity.modes.connect.links.opacity = Math.random() + 0.2;
    particlesJSON.interactivity.modes.connect.radius = Math.floor(Math.random() * (100-10)) + 20;
    particlesJSON.interactivity.modes.grab.distance = Math.floor(Math.random() * (500 - 50)) + 50;
    particlesJSON.interactivity.modes.grab.links.opacity = Math.random() + 0.2;
    particlesJSON.interactivity.modes.push.quantity = Math.floor(Math.random() * (10-1)) + 1;
    particlesJSON.interactivity.modes.remove.quantity = Math.floor(Math.random() * (10-1)) + 1;
    particlesJSON.interactivity.modes.repulse.distance = Math.floor(Math.random() * (500 - 50)) +50;
    particlesJSON.interactivity.modes.repulse.duration = (Math.random() * (5-0.2)) + 0.2;
    particlesJSON.interactivity.modes.repulse.speed = Math.floor(Math.random() * (15-2)) +2;
    particlesJSON.interactivity.modes.slow.factor = Math.floor(Math.random() * (10-1)) +1;
    particlesJSON.interactivity.modes.slow.radius = Math.floor(Math.random() * (100-10)) + 20;
    console.log("HOLA");
    return particlesJSON;
}
