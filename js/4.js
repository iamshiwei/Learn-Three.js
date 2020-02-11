let camera, scene, renderer, light, cube, stats
function threeStart() {
  initThree()
  initCamrea()
  initScene()
  initLight()
  initobject()
  initAxes()
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
  var axes = new THREE.AxisHelper(600)
  scene.add(axes)
}
function initCamrea() {
  // 正投影相机
  camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    1,
    1000
  )
  camera.position.x = 0
  camera.position.x = 0
  camera.position.z = 150

  camera.up.x = 0
  camera.up.y = 1
  camera.up.z = 0
  camera.lookAt({ x: 0, y: 0, z: 0 })
}
function initLight() {
  light = new THREE.DirectionalLight(0xff0000, 1.0, 0)
  light.position.set(100, 100, 200)
  scene.add(light)
}
function initobject() {
  var gemetry = new THREE.CylinderGeometry(70, 100, 200)
  var material = new THREE.MeshLambertMaterial({ color: '#ffffff' })
  cube = new THREE.Mesh(gemetry, material)
  cube.position = new THREE.Vector3(0, 0, 0)
  cube.position.set(2, 2, 2)
  scene.add(cube)
}
function animate() {
  stats.begin()
  stats.end()
  TWEEN.update()
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
threeStart()
