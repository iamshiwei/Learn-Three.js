let camera, scene, renderer, light, cube, stats, param
function threeStart() {
  initThree()
  initCamrea()
  initScene()
  initLight()
  initobject()
  creatUI()
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
  //  透视投影相机
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.x = 200
  camera.position.y = 200
  camera.position.z = 600
  camera.up.x = 0
  camera.up.y = 1
  camera.up.z = 0
  camera.lookAt({ x: 0, y: 0, z: 0 })
}
function initLight() {
  light = new THREE.AmbientLight(0x88ff00)
  scene.add(light)
}
function initobject() {
  var gemetry = new THREE.CubeGeometry(200, 100, 50, 4, 4)
  var material = new THREE.MeshLambertMaterial({ color: 0xff0000 })
  cube = new THREE.Mesh(gemetry, material)
  cube.position = new THREE.Vector3(0, 0, 0)
  scene.add(cube)
}
function creatUI() {
  var paramsObj = function() {
    this.x = 0
    this.y = 0
    this.z = 0
  }
  param = new paramsObj()
  var gui = new DAT.GUI()
  gui.add(param, 'x', -10000, 10000).name('x位置')
  gui.add(param, 'y', -10000, 10000).name('y位置')
  gui.add(param, 'z', -10000, 10000).name('z位置')
}
function changeFov() {
  camera.fov = param.fov
  camera.updateProjectionMatrix()
}
function animate() {
  light.position.set(param.x, param.y, param.z)
  stats.begin()
  stats.end()
  TWEEN.update()
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
threeStart()
