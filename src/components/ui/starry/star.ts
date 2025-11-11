import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const loadParticles = async () => {
    await loadSlim(tsParticles);

    await tsParticles.load({
        id: "tsparticles",
        options: {
            background: {
                color: "#000", // Background color of the sky
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                move: {
                    enable: true,
                    speed: 0.5, // Adjust speed of stars
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: {
                        default: "out",
                    },
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150, // Number of stars
                },
                opacity: {
                    value: { min: 0.1, max: 0.5 },
                    animation: {
                        enable: true,
                        speed: 1,
                        sync: false,
                    },
                },
                size: {
                    value: { min: 0.5, max: 1.5 },
                },
            },
        },
    });
};

loadParticles();