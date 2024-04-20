//Create A Namespace That Named `THREEJS` And Import Every Thing From ThreeJs Into It;
import * as THREEJS from 'three'
//Create An Instence Of The WebGl(App Programming Interface) It's A tool That threeJs Use It To Allocate Space On The WebPage To Add Animate To All 3D Stuff That We Add.
const render = new THREEJS.WebGLRenderer();
//Set Size For This Allocation Which Is The Height And THe Width For The Window.
render.setSize(window.innerWidth , window.innerHeight);
//Inject The Space That We Allocate It We Have Created Which Is Basically A Canvas Element Into The Page.
document.body.appendChild(render.domElement);