<template>
    <div id="gallery"></div>
</template>

<script setup>

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { onMounted } from "vue";
import pokeApp from '../assets/pokeApp.png';
import aresrpg from '../assets/aresrpg.png';
import pokeApi from '../assets/poke-api.png';
import giveway from '../assets/giveway.png';
import js from '../assets/javascript-black.jpeg';

let camera, scene, renderer;
let controls;

function Element(id, link, x, y, z, ry, rx = null) {

    if(rx) {
        const img = document.createElement('img');
        img.style.width = '600px';
        img.style.height = '600px';
        img.style.border = '0px';
        img.src = id;

        const object = new CSS3DObject(img);
        object.position.set(x, y, z);
        object.rotation.y = ry;
        object.rotation.x = rx;

        return object;
    }
    const img = document.createElement('img');
    img.style.width = '600px';
    img.style.height = '360px';
    img.style.border = '0px';
    img.classList.add('cursor-pointer')
    img.src = id;
    img.addEventListener('pointerdown', () => {
        window.open(link, '_blank');
    })

    const object = new CSS3DObject(img);
    object.position.set(x, y, z);
    object.rotation.y = ry;
    

    return object;

}

onMounted(() => {
    init();
    animate();
})

function init() {

    const container = document.getElementById('gallery');

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(500, 100, 750);

    scene = new THREE.Scene();

    renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.add(new Element(js, null, 0, 180, 0, 0, Math.PI / 2));
    group.add(new Element(js, null, 0, -180, 0, 0, Math.PI / 2));
    group.add(new Element(pokeApi, "https://github.com/SohKey/poke-api", 0, 0, 300, 0));
    group.add(new Element(pokeApp, "https://github.com/SohKey/poke-app-angular", 300, 0, 0, Math.PI / 2));
    group.add(new Element(aresrpg, "https://github.com/aresrpg", 0, 0, - 300, Math.PI));
    group.add(new Element(giveway, "https://github.com/SohKey/Giveaway-BOT", - 300, 0, 0, - Math.PI / 2));
    scene.add(group);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enabled = true
    controls.rotateSpeed = 1;

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {
    for (let i = 0; i < scene.children.length; i++) {

        const child = scene.children[i];
        child.rotation.y += 0.005;

    }

    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);

}

</script>
