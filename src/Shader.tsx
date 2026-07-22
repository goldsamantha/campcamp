import React, { useEffect, useRef, useState } from 'react';
import { Shaders, Node, GLSL } from  'gl-react';
import { Surface } from 'gl-react-dom'; // or 'gl-react-native'

// 1. Import your .frag file (the bundler converts this to a string)
import colorGrad from './shaders/colorGrad.frag';
import shader1 from './shaders/shader1.frag';


const shaders = Shaders.create({
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


// useAnimationTime returns elapsed seconds, ticked each animation frame.
function useAnimationTime(): number {
  const [time, setTime] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const loop = (now: number) => {
      if (start.current === null) start.current = now;
      setTime((now - start.current) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return time;
}

// 3. Create your gl-react Component: animated noise blended with the image input.
const SIZE = 800;

const ColorGradShader: React.FC = ()  => {
    const time = useAnimationTime();

    return (
      <Surface width={SIZE/2} height={SIZE/2} className="circle-mask">
        <Node
          shader={shaders.shader1}
          uniforms={{
            time,
            tex0: '/assets/shader1.jpg',
          }}
        />
      </Surface>
    );
}


export default ColorGradShader;