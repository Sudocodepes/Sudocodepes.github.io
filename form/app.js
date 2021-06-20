// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
//const geometry = new THREE.SphereGeometry( 1, 64, 64 );
const particlesGeometry= new THREE.BufferGeometry;
const particleCnt=5000
const posArray=new Float32Array(particleCnt*3);
for(let i=0;i<particleCnt*3;i++){
    //posArray[i]=Math.random();
    // posArray[i]=Math.random()-0.5;
    posArray[i]=(Math.random()-0.5)*15;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray,3));
// Materials
const material = new THREE.PointsMaterial({
    size: 0.005
  })
const pointmaterial = new THREE.PointsMaterial({
    size: 0.005
})

// Mesh
//const sphere = new THREE.Points(geometry,material)
const particleMesh=new THREE.Points(particlesGeometry,pointmaterial)
scene.add(particleMesh);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)


// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
console.clear();
/**
 * Animate
 */
document.addEventListener('',animateparticles)
let mouseY=0;
let mouseX=0;
function animateparticles(e){
    mouseX=e.clientX
    mouseY=e.clientY
}

const clock = new THREE.Clock()
var fac=0.5;
const tick = () =>
{ 
    const elapsedTime = clock.getElapsedTime()
    particleMesh.rotation.y=fac*elapsedTime
    particleMesh.rotation.x=fac*elapsedTime
    renderer.render(scene, camera)
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()