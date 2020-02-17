if (!Detector.webgl) Detector.addGetWebGLMessage()

var container, stats, camera, controls, scene, renderer, cross, mesh

init()
animate()

function init() {
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1e10)
  camera.position.z = 0.2
  scene = new THREE.Scene()
  scene.add(camera)

  var dirLight = new THREE.DirectionalLight(0xffffff)
  dirLight.position.set(200, 200, 1000).normalize()
  camera.add(dirLight)
  camera.add(dirLight.target)

  var material = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide })
  var loader = new THREE.VTKLoader()
  loader.load('../vtk/bunny.vtk', function(geometry) {
    geometry.computeVertexNormals()
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.setY(-0.09)
    scene.add(mesh)
  })

  renderer = new THREE.WebGLRenderer({ antialias: false })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.getElementById('output').appendChild(renderer.domElement)
  // container.appendChild(renderer.domElement)

  stats = new Stats()
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.top = '0px'
  stats.domElement.style.left = '0px'
  document.getElementById('output').appendChild(stats.domElement)
}
function animate() {
  stats.update()
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
