let camera, scene, renderer, light, cube
function threeStart() {
  initThree()
  initCamrea()
  initScene()
  initLight()
  initobject()
  initAxes()
  renderer.clear()
  renderer.render(scene, camera)
}
function initThree() {
  renderer = new THREE.WebGLRenderer({ antialias: false })
  renderer.setClearColor('#fff')
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('output').append(renderer.domElement)
}
function initScene() {
  scene = new THREE.Scene()
}

function initAxes() {
  var axes = new THREE.AxisHelper(200)
  scene.add(axes)
}
function initCamrea() {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 800
  // camera.up.x = 0
  // camera.up.y = 0
  // camera.up.z = 1
  // camera.lookAt({ x: 0, y: 0, z: 0 })
}
function initLight() {
  light = new THREE.DirectionalLight(0xff0000, 1.0, 0)
  light.position.set(100, 100, 200)
  scene.add(light)
}
function initobject() {
  var geometry = new THREE.Geometry()
  var material = new THREE.LineBasicMaterial({ vertexColors: true, color: '#f00' }) //vertexColors: false 是否使用顶点颜色
  var color1 = new THREE.Color(0x444444),
    color2 = new THREE.Color(0xff0000),
    color3 = new THREE.Color(0xff0000)
  var p1 = new THREE.Vector3(-100, 0, 0)
  var p2 = new THREE.Vector3(100, 0, 0)
  var p3 = new THREE.Vector3(0, -100, 0)
  geometry.vertices.push(p1)
  geometry.vertices.push(p2)
  geometry.vertices.push(p3)
  geometry.vertices.push(p1)
  geometry.colors.push(color1, color2, color3, color1)
  var line = new THREE.Line(geometry, material, THREE.LinePieces)
  scene.add(line)
}
threeStart()
