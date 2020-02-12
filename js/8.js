let camera, scene, renderer, light, stats, param
function threeStart() {
  initThree()
  initCamrea()
  initScene()
  initLight()
  initobject()
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
  camera.position.x = 600
  camera.position.y = 0
  camera.position.z = 600
  camera.up.x = 0
  camera.up.y = 1
  camera.up.z = 0
  camera.lookAt({ x: 0, y: 0, z: 0 })
}
function initLight() {
  var paramsObj = function() {
    this.x = 0
    this.y = 0
    this.z = 0
  }
  param = new paramsObj()
  var gui = new DAT.GUI()
  gui.add(param, 'x', -10000, 10000).name('点光源x的位置')
  gui.add(param, 'y', -10000, 10000).name('点光源y的位置')
  gui.add(param, 'z', -10000, 10000).name('点光源z的位置')
  light = new THREE.PointLight(0xff0000, 1, 1000, 0.5)
  light.position.set(param.x, param.y, param.z)
  scene.add(light)
}
function initobject() {
  var gemetry = new THREE.CubeGeometry(200, 100, 50, 4, 4)
  var material = new THREE.MeshLambertMaterial({ color: 0xffffff })
  var cube = new THREE.Mesh(gemetry, material)
  cube.position.set(0, 0, 0)
  scene.add(cube)

  var gemetry2 = new THREE.CubeGeometry(200, 100, 50, 4, 4)
  var material2 = new THREE.MeshLambertMaterial({ color: 0xffffff })
  var cube2 = new THREE.Mesh(gemetry2, material2)
  cube2.position.set(0, -150, 0)
  scene.add(cube2)

  var gemetry3 = new THREE.CubeGeometry(200, 100, 50, 4, 4)
  var material3 = new THREE.MeshLambertMaterial({ color: 0xffffff })
  var cube3 = new THREE.Mesh(gemetry3, material3)
  cube3.position = new THREE.Vector3(0, 150, 0)
  scene.add(cube3)

  var cube4 = new THREE.Mesh(gemetry3, material3)
  cube4.position.set(0, 150, 0)
  scene.add(cube4)

  var mesh5 = new THREE.Mesh(gemetry3, material3)
  mesh5.position.set(300, 0, 0)
  scene.add(mesh5)

  var mesh6 = new THREE.Mesh(gemetry3, material3)
  mesh6.position.set(0, 0, -100)
  scene.add(mesh6)
}

function animate() {
  light.position.set(param.x, param.y, param.z)
  stats.begin()
  stats.end()
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
threeStart()
