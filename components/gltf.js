import React from 'react'
import * as THREE from 'three';

import GLTFLoader from 'three-gltf-loader';


export default class Gltf extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.getElementById('canvas').appendChild( renderer.domElement );

    var loader = new GLTFLoader();

    loader.load('/public/standing.glb', function(gltf) {
    scene.add(gltf.scene);
    }, undefined, function(error) {
      console.error(error);
    });

    renderer.render( scene, camera );
  }

render() {
  return (
    <section id="canvas" />
  )
}

}
