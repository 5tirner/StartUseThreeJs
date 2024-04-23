//Create A Namespace That Named `THREEJS` And Import Every Thing From ThreeJs Into It;
import * as THREE from "https://threejs.org/build/three.module.js"
//Create An Instence Of WebGl(AppProgramming nterface) It's tool That threeJs Use It To Allocate Space On The WebPage To Add Animate To All 3D Stuff That We Add.
const renderer = new THREE.WebGLRenderer();
//Set Size For This Allocation Which Is The Height And THe Width For The Window.
renderer.setSize(window.innerWidth , window.innerHeight);
//Inject The Space That We Allocate It We Have Created Which Is Basically A Canvas Element Into The Page.
document.body.appendChild(renderer.domElement);
//Create The Scene
const scene = new THREE.Scene();
//Create A LifeStyle Camera With Four Principale Elements
const camera = new THREE.PerspectiveCamera(
    /*fieldOfView*/60,
    /*aspect by dividing width of the window by it's higth our canvas well have size of our window*/ window.innerWidth / window.innerHeight,
    /*near and far cliping planes*/ 0.1, 1000);
//Add AxesHelper Helper So We Can See What We Do
const axesH = new THREE.AxesHelper(5);
//Prepared The AxesH
scene.add(axesH);
//Set The Three Cordonates To Values Those Help Us To See What Heppen In Our Canvas
camera.position.set(0, 1, 7);
//Add Box To Our Scene
const boxGeometry = new THREE.BoxGeometry();
const boxMatirial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const theBox = new THREE.Mesh(boxGeometry, boxMatirial);
scene.add(theBox);
//Link The Scene With THe Camera Using Using Rendrer
renderer.render(scene, camera);