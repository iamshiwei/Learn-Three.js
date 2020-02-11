let camera, scene, renderer, light, cube, stats
function threeStart() {
  initThree()
  initCamrea()
  initScene()
  initLight()
  initobject()
  initAxes()
  initTween()
  animate()
}
function initThree() {
  renderer = new THREE.WebGLRenderer({ antialias: false })
  renderer.setClearColor('#fff')
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('output').append(renderer.domElement)

  stats = new Stats()
  stats.setMode(1)
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.top = '0px'
  stats.domElement.style.left = '0px'
  document.getElementById('output').append(stats.domElement)
}
function initScene() {
  scene = new THREE.Scene()
}

function initAxes() {
  var axes = new THREE.AxisHelper(4)
  scene.add(axes)
}
function initCamrea() {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 20
  camera.up.x = 0
  camera.up.y = 0
  camera.up.z = 1
  camera.lookAt({ x: 0, y: 0, z: 0 })
}
function initLight() {
  light = new THREE.DirectionalLight(0xff0000, 1.0, 0)
  light.position.set(100, 100, 200)
  scene.add(light)
}
function initobject() {
  var gemetry = new THREE.CubeGeometry(3, 3, 3)
  var material = new THREE.MeshBasicMaterial({ color: '#00ff00' })
  cube = new THREE.Mesh(gemetry, material)
  cube.position.set(2, 2, 2)
  scene.add(cube)
}
function initTween() {
  new TWEEN.Tween(camera.position)
    .to({ x: 100 }, 3000)
    .repeat(3)
    .start()
}
function animate() {
  stats.begin()
  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  // cube.rotation.z += 0.01
  // camera.position.x += 0.1
  stats.end()
  TWEEN.update()
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
threeStart()
