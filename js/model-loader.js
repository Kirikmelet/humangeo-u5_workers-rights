/* A module to load models */


import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export class ModelLoader {
  /**
   * @constructor
   * @param {String} path - The Path to Model to Load
   * @param {String} domID - ID of Element to append to
   */
  constructor (path, domID) {
    this.model = path
    this.dom = document.getElementById(domID)
    if (this.dom === undefined) {
      console.error('Failed to get DOM')
      throw TypeError
    }
    this.scene = new Three.Scene()
    this.scene.background = new Three.Color(0xBBBBFF)
    this.render = new Three.WebGLRenderer({canvas: this.dom})
    this.render.setSize(this.dom.clientWidth, this.dom.clientHeight)
    this.dom.parentNode.appendChild(this.render.domElement)
    this.camera = new Three.PerspectiveCamera(75, this.dom.clientWidth / this.dom.clientHeight, 0.1, 1000)
    this.camera.position.set(0, 10, 0)
    this.control = new OrbitControls(this.camera, this.render.domElement)
    this.loader = new GLTFLoader()
    this.start()
  }
  /**
   * Starts Program
   */
  start () {    
    const sun = new Three.HemisphereLight(new Three.Color(0xFFFFFF),
                                            new Three.Color(0xBBBBFF),
                                            1)
    const ambience = new Three.AmbientLight(new Three.Color(0xFFFFFF))
    this.scene.add(sun)
    this.scene.add(ambience)
    this.loader.load(this.model, (gltf) => {
      this.scene.add(gltf.scene)
    })
    const animate  = () => {
      requestAnimationFrame(animate)
      this.render.render(this.scene, this.camera)
      this.control.update()
    }
    animate()
    window.addEventListener('resize', () => {
      this.render.setSize(this.dom.clientWidth, this.dom.clientHeight)
      this.camera.aspect = this.dom.clientWidth / this.dom.clientHeight
      this.camera.updateProjectionMatrix()
      this.control.update()
    }, false)
  }
}



class ObjectWrapper {
  /**
   * @returns {Three.Light}
   */
  static getLight () {
    const light = new Three.HemisphereLight(new Three.Color(0xffffff))
    light.position.y = 10
    return light
  }
}

(() => {
  const path = globalThis.three.path ?? undefined
  const domID = globalThis.three.domID ?? undefined
  if (path !== undefined || domID !== undefined) {
    new ModelLoader(path, domID)
  }
})()
