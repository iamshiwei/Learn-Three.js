var scene, renderer, mesh, camera
var width = document.getElementById('output').clientWidth
var height = document.getElementById('output').clientHeight
init()
function initThree() {
  renderer = new THREE.WebGLRenderer({
    antialias: true
  })
  renderer.setSize(width, height)
  document.getElementById('output').appendChild(renderer.domElement)
  renderer.setClearColor(0xffffff)
}
function initCamera() {
  camera = new THREE.PerspectiveCamera(54, width / height, 1, 1000)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 500
  camera.up.x = 0
  camera.up.y = 1
  camera.up.z = 0
  camera.lookAt({
    x: 0,
    y: 0,
    z: 0
  })
}
function initScene() {
  scene = new THREE.Scene()
}
function initLight() {
  var light = new THREE.DirectionalLight(0xff0000, 1)
  light.position.set(100, 100, 200)
  scene.add(light)
}
function initObject() {
  var geometry = new THREE.PlaneGeometry(100, 100)
  var material = new THREE.MeshBasicMaterial({
    vertexColors: THREE.VertexColors,
    wireframe: false
  })
  var color1 = new THREE.Color(0x00900f)
  var color2 = new THREE.Color(0x0000f0)
  var color3 = new THREE.Color(0x20f0ff)
  var color4 = new THREE.Color(0x04080f)

  for (let index = 0; index < geometry.faces.length; index++) {
    var face = geometry.faces[index]
    face.vertexColors[0] = color1
    face.vertexColors[1] = color2
    face.vertexColors[2] = color3
  }

  var object = new THREE.Mesh(geometry, material)
  scene.add(object)
}
function init() {
  initThree()
  initCamera()
  initScene()
  initLight()
  initObject()
  renderer.render(scene, camera)
}
