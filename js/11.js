var renderer, camera, mesh, scene, texture
init()
animate()

function init() {
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  window.addEventListener('onresize', onWindowResize, false)
  creatUI()
  document.body.appendChild(renderer.domElement)

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 400
  scene = new THREE.Scene()

  var geometry = new THREE.PlaneGeometry(500, 300)
  var material
  var loader = new THREE.TextureLoader()
  loader.load(
    '../imgs/a.jpg',
    function(text) {
      texture = text
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping
      material = new THREE.MeshBasicMaterial({
        map: text
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
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  change()
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

function creatUI() {
  var params = function() {
    this.repeat = 1
    this.srap = 1
  }
  pama = new params()
  var gui = new DAT.GUI()
  gui.add(pama, 'repeat', 1, 5).name('纹理重复')
}
function change() {
  if (texture != null) {
    texture.repeat.x = texture.repeat.y = pama.repeat
  }
}
