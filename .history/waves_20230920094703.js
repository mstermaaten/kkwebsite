var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 25, 200);
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true // Enable alpha for transparency
});

renderer.setSize(window.innerWidth, window.innerHeight);

const heroSection = document.getElementById("herosection");
heroSection.appendChild(renderer.domElement);
window.addEventListener( 'resize', function(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}, false );

// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.minPolarAngle = THREE.Math.degToRad(80);
// controls.maxPolarAngle = THREE.Math.degToRad(87);
// controls.minDistance = 100;
// controls.maxDistance = 250;
// controls.enablePan = false;
var speed = 0.18; // 1 is normal speed
var pWidth = 100;
var pHeight = 100;
var planeGeom = new THREE.PlaneBufferGeometry(500, 500, pWidth, pHeight).toGrid();
planeGeom.rotateX(-Math.PI * .5);

var seaDown = new THREE.LineSegments(planeGeom, new THREE.ShaderMaterial({
  uniforms: {
    color: {
      value: new THREE.Color("#db39d6")
    },
    opacity: {
      value: 1
    },
    time: {
      value: 0
    },
    amplitude: {
      value: 15
    },
    waveLength: {
      value: Math.PI * 10
    }
  },
  vertexShader: vertShader,
  fragmentShader: fragShader,
}));
scene.add(seaDown);

var clock = new THREE.Clock();
var t = 0;
var delta = 0;
render();

function render() {

  requestAnimationFrame(render);
  delta = clock.getDelta();
  t += delta *  speed;

  seaDown.material.uniforms.time.value = t;
    //seaDown.material.uniforms.amplitude.value = 10 * Math.sin(t); // You can adjust the amplitude factor as needed
  scene.rotation.y += delta *  0.06;
    //camera.position.z -= t * 0.5;
    renderer.setClearColor(0xff0000, 0);
  renderer.render(scene, camera);

}
