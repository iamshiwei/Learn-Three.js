var scene = new THREE.Scene()
var renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor('#fff')
document.body.append(renderer.domElement)
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000)
var gemetry = new THREE.CubeGeometry(3, 3, 3)
var material = new THREE.MeshBasicMaterial({ color: '#ff0000' })
var cube = new THREE.Mesh(gemetry, material)
scene.add(cube)

camera.position.z = 20
function render() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  cube.rotation.z += 0.01
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}
render()
