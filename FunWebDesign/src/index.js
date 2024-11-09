import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// GSAP Animations on Load
window.addEventListener('load', () => {
    gsap.from(".hero-content h2", {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    });
    gsap.from(".hero-content p", {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power2.out"
    });
    gsap.from(".cta-button", {
        y: 30,
        opacity: 0,
        duration: 2.5,
        ease: "power2.out"
    });
});

// ScrollTrigger Animations for Sections
const sections = gsap.utils.toArray("section");  // Using `gsap.utils.toArray()` directly
sections.forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: true
        }
    });
});

// Three.js Globe Visualization
const globeContainer = document.getElementById('globe-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(600, 600);
globeContainer.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 15;

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// GSAP Animation for Globe Rotation
gsap.to(globe.rotation, {
    y: "+=6.28319", // One full rotation (2 * Math.PI)
    duration: 10,
    repeat: -1,
    ease: "none"
});
