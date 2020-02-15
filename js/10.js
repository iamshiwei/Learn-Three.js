var renderer, camera, mesh, scene
init()
animate()

function init() {
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 400

  scene = new THREE.Scene()

  var geometry = new THREE.PlaneGeometry(500, 300)
  var material
  var loader = new THREE.TextureLoader()
  loader.load(
    '../imgs/a.jpg',
    function(texture) {
      material = new THREE.MeshBasicMaterial({
        map: texture
      })
      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
    },
    function(xhr) {
      console.log((xhr.loaded / xhr.total) * 100) + '% loaded'
    },
    function(err) {
      console.log(err)
    }
  )
  window.addEventListener('onresize', onWindowResize, false)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
