import React from 'react';
import { Shaders, Node, GLSL } from  'gl-react';
import { Surface } from 'gl-react-dom'; // or 'gl-react-native'

// 1. Import your .frag file (the bundler converts this to a string)
import colorGrad from './shaders/colorGrad.frag';
import shader1 from './shaders/shader1.frag';


const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}`
  },
  colorGrad: {
    frag: GLSL`${colorGrad}`,
    // resources:{
    //   u_resolution: { value: [window.innerWidth, window.innerHeight], type: "vec2<f32>" } 
    // }
  },
  shader1: {
    frag: GLSL`${shader1}`,
  }
});

class HelloBlue extends React.Component {
  render() {
    const { blue } = this.props;
    return <Node
      shader={shaders.helloBlue}
      uniforms={{ blue }}
    />;
  }
}


// 2. Define the shader using gl-react Shaders.create
// const shaders = Shaders.create({
//   colorGrad: {
//     frag: GLSL`${colorGrad}`, // Pass the imported string here
//     resources:{
//       u_resolution: { value: [window.innerWidth, window.innerHeight], type: "vec2<f32>" } 
//     }
//   },
// });

// 3. Create your gl-react Component
const ColorGradShader: React.FC = ()  => {
    return (
      <Surface width={800} height={800}>
        {/* <HelloBlue blue={0.5} /> */}
        <Node 
          shader={shaders.shader1}
          uniforms={{
            // probably need to useRef tho...
            // u_resolution: [window.innerWidth ?? 300, window.innerHeight ?? 300],
            resolution: [800, 800],
            tex0: './assets/shader1.jpg',
            tex1: './assets/shader1.jpg',
            // tex1: './waves.jpg'
            // u_resolution: { value: new Float32Array([window.innerWidth, window.innerHeight]), type: "vec2<f32>" } 
          }}
        />
        {/* <Node shader={shaders.helloBlue} /> */}
      </Surface>
    );
}

// class MyShaderComponent extends React.Component {
//   render() {
//     return (
//       <Surface width={400} height={400}>
//         <Node shader={shaders.myCustomShader} />
//       </Surface>
//     );
//   }
// }

export default ColorGradShader;