import{s as v,n as c}from"../chunks/scheduler.Cs0xm5t1.js";import{S as y,i as w,e as p,s as m,h as H,c as g,d as a,a as h,g as b,j as r,k as P,l as d}from"../chunks/index.odHI_-bW.js";function _(f){let o,n,t,u=`<img src="https://raw.githubusercontent.com/CoCoSol007/hexing/main/logo.png" alt="Logo" class="w-3/4 md:w-1/2 max-w-md"/> <div class="flex flex-col items-center md:items-start text-center md:text-left"><h3 class="text-4xl font-bold mb-4 text-gray-100">Hexing</h3> <p class="text-lg text-gray-300"><i class="italic">&quot;Hexagons are the bestagons&quot;</i> <br/>
      A basic Rust library to manipulate hexagonal grids.</p></div>`,l,s,x=`<p class="mb-4"><code class="code bg-gray-700 p-1 rounded">hexing</code> is a Rust library designed
    for manipulation and calculations on hexagonal grids. It provides tools for working
    with hexagonal positions and directions, as well as iterators for exploring hexagonal
    rings and spirals.</p> <p class="mb-4">The link to the <a href="https://docs.rs/hexing/latest/hexing/" class="text-blue-500 hover:underline">docs</a>
    or the
    <a href="https://github.com/CoCoSol007/hexing" class="text-blue-500 hover:underline">repository</a>.</p> <h2 class="text-2xl font-semibold mb-2">Features</h2> <ul class="list-disc pl-5 mb-4"><li><strong>Hexagonal Coordinate Manipulation</strong>: Represent and
      manipulate positions in a hexagonal grid using axial coordinates.</li> <li><strong>Distance Calculations</strong>: Compute the distance between two
      hexagonal positions.</li> <li><strong>Pixel Coordinate Conversion</strong>: Convert hexagonal positions
      to pixel coordinates for graphical use.</li> <li><strong>Reflection and Rotation</strong>: Apply reflection and rotation to
      hexagonal positions.</li> <li><strong>Ring and Spiral Iterators</strong>: Obtain positions in a ring or
      spiral around a central position.</li> <li><strong>Line Iterators</strong>: Obtain positions along a line between two
      hexagonal positions.</li></ul> <hr class="mb-4 border-gray-700"/> <h2 class="text-2xl font-semibold mb-2">Number Trait</h2> <p class="mb-4">The library uses the <code class="code bg-gray-700 p-1 rounded">Number</code> trait to allow generic calculations with various numeric types. This trait
    is implemented for several types, including integers and floating-point numbers.</p> <hr class="mb-4 border-gray-700"/> <h2 class="text-2xl font-semibold mb-2">Main Types</h2> <h3 class="text-xl font-semibold mb-2" id="HexPosition">HexPosition&lt;T&gt;</h3> <p class="mb-4">Represents a position in a hexagonal grid with coordinates <code class="bg-gray-700 p-1 rounded">T</code>. Coordinates are in axial format
    <code class="code bg-gray-700 p-1 rounded">(x, y)</code>.</p> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Creation:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">let pos = HexPosition::new(1, 2);
let pos2 = HexPosition(3, 4);

// Constant: The origin of the hexagonal grid.
let origin = HexPosition::ORIGIN;</code></pre> <p class="mt-2">Creates a new <a href="https://www.redblobgames.com/grids/hexagons/#coordinates" class="text-blue-500 hover:underline">HexPosition</a>
      with the given <code class="code bg-gray-700 p-1 rounded">q</code> and
      <code class="code bg-gray-700 p-1 rounded">r</code> coordinates in an axial
      format.</p></div> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Conversion to Pixel Coordinates:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">let pixel_coords = pos.to_pixel_coordinates();
let pixel_coords2 = HexPosition::from_pixel_coordinates(pixel_coords);</code></pre> <p class="mt-2">Converts the current <a href="#HexPosition" class="text-blue-500 hover:underline">HexPosition</a> into a pixel coordinate. Basically, it converts a position in a hexagonal
      grid to a position in an orthogonal grid.</p></div> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Distance Calculation:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">let distance = pos.distance(HexPosition::new(3, 4));</code></pre> <p class="mt-2">Calculates the distance between two hexagonal positions, using the <a href="https://en.wikipedia.org/wiki/Taxicab_geometry" class="text-blue-500 hover:underline">Manhattan distance</a>.</p></div> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Rotation:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">let rotated_pos = pos.rotation(2);</code></pre> <p class="mt-2">Will apply a rotation of 2 x 60 degrees around the origin.</p></div> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Reflection:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">let reflected_pos = pos.reflect();</code></pre> <p class="mt-2">Will apply a central symmetric reflection around the origin.</p></div> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Ring Iterators:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">for ring_pos in pos.ring(2) {
    println!(&quot;{:?}&quot;, ring_pos);
}</code></pre> <p class="mt-2">An iterator that returns positions in a ring around a central position.
      The iterator will return positions in a ring with the given radius.</p></div> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Spiral Iterators:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">for spiral_pos in pos.spiral(2) {
    println!(&quot;{:?}&quot;, spiral_pos);
}</code></pre> <p class="mt-2">An iterator that returns positions in a spiral around a central position.
      The iterator will return positions in a spiral with the given radius.</p></div> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Line Iterators:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">let a = HexPosition(0, 0);
let b = HexPosition(-2, -1);
for line_pos in a.line(b) {
    println!(&quot;{:?}&quot;, line_pos);
}</code></pre> <p class="mt-2">An iterator that returns positions along a line between two hexagonal
      positions.</p></div> <hr class="mb-4 border-gray-700"/> <h3 class="text-xl font-semibold mb-2" id="HexDirection">HexDirection</h3> <p class="mb-4">Enum representing the six possible directions in a hexagonal grid.</p> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Available Directions:</h4> <ul class="list-disc pl-5 mb-4"><li><code class="code bg-gray-700 p-1 rounded">Right</code> (1, 0)</li> <li><code class="code bg-gray-700 p-1 rounded">UpRight</code> (1, -1)</li> <li><code class="code bg-gray-700 p-1 rounded">UpLeft</code> (0, -1)</li> <li><code class="code bg-gray-700 p-1 rounded">Left</code> (-1, 0)</li> <li><code class="code bg-gray-700 p-1 rounded">DownLeft</code> (-1, 1)</li> <li><code class="code bg-gray-700 p-1 rounded">DownRight</code> (0, 1)</li></ul></div> <div class="rounded mb-4"><h4 class="text-lg font-semibold mb-2">Convert to Vector:</h4> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">let direction = HexDirection::Right;
let vector = direction.to_vector();</code></pre> <p class="mt-2">You can convert a <a href="#HexDirection" class="text-blue-500 hover:underline">HexDirection</a>
      to a
      <a href="#HexPosition" class="text-blue-500 hover:underline">HexPosition</a>
      by using the <code class="code bg-gray-700 p-1 rounded">to_vector</code> method.</p></div> <hr class="mb-4 border-gray-700"/> <h2 class="text-2xl font-semibold mb-2">Usage Examples</h2> <h3 class="text-xl font-semibold mb-2">Creating Hexagonal Positions</h3> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">use hexing::HexPosition;

let pos = HexPosition::new(1, 2);
let pos2 = HexPosition(3, 4);
let origin = HexPosition::ORIGIN;

println!(&quot;Position 1: {:?}&quot;, pos);
println!(&quot;Position 2: {:?}&quot;, pos2);
println!(&quot;Origin: {:?}&quot;, origin);</code></pre> <h3 class="text-xl font-semibold mb-2">Conversion to Pixel Coordinates</h3> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">use hexing::HexPosition;

let position = HexPosition::new(1, 0);
let pixel_coords = position.to_pixel_coordinates();
println!(&quot;Pixel coordinates: {:?}&quot;, pixel_coords);

let new_position: HexPosition&lt;i32&gt; = HexPosition::from_pixel_coordinates(pixel_coords);
println!(&quot;New position: {:?}&quot;, new_position);

assert!(position == new_position);</code></pre> <h3 class="text-xl font-semibold mb-2">Calculating Distance Between Positions</h3> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">use hexing::HexPosition;

let pos1 = HexPosition::new(0, 0);
let pos2 = HexPosition::new(-2, -1);
let dist = pos1.distance(pos2);
println!(&quot;Distance: {:?}&quot;, dist);</code></pre> <h3 class="text-xl font-semibold mb-2">Iterating Over Rings and Spirals</h3> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">use hexing::{HexPosition, HexRing, HexSpiral};

let center = HexPosition::new(0, 0);

// Ring of radius 1
let ring = center.ring(1);
for pos in ring {
    println!(&quot;Ring position: {:?}&quot;, pos);
}

// Spiral of radius 2
let spiral = center.spiral(2);
for pos in spiral {
    println!(&quot;Spiral position: {:?}&quot;, pos);
}</code></pre> <h3 class="text-xl font-semibold mb-2">Rotation of Hexagonal Position</h3> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">use hexing::HexPosition;
let rotation = 120;
let pos = HexPosition::new(1, 2);
let rotated_pos = pos.rotation(rotation / 60); // Rotates 120 degrees
println!(&quot;Rotated Position: {:?}&quot;, rotated_pos);</code></pre> <h3 class="text-xl font-semibold mb-2">Reflection of Hexagonal Position</h3> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">use hexing::HexPosition;

let pos = HexPosition::new(1, 2);
let reflected_pos = pos.reflect();
println!(&quot;Reflected Position: {:?}&quot;, reflected_pos);</code></pre> <h3 class="text-xl font-semibold mb-2">Line Iterator</h3> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">use hexing::HexPosition;

let start = HexPosition::new(0, 0);
let end = HexPosition::new(3, -3);
for pos in start.line(end) {
    println!(&quot;Line Position: {:?}&quot;, pos);
}</code></pre> <h3 class="text-xl font-semibold mb-2">Using HexDirection</h3> <pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-rust">use hexing::HexDirection;

let direction = HexDirection::UpRight;
let vector = direction.to_vector();
println!(&quot;Vector for Right Direction: {:?}&quot;, vector);

let new_position = HexPosition::new(0, 0) + vector * 3;
println!(&quot;New Position after moving Right: {:?}&quot;, new_position);</code></pre> <hr class="mb-4 border-gray-700"/> <h2 class="text-2xl font-semibold mb-2">Full Documentation</h2> <p class="mb-4">For more detailed documentation and additional explanations about hexagonal
    grids, please refer to the <a href="https://www.redblobgames.com/grids/hexagons/" class="text-blue-500 hover:underline">Red Blob Games hexagonal grid documentation</a>.</p> <hr class="mb-4 border-gray-700"/> <h2 class="text-2xl font-semibold mb-2">Installation</h2> <div class="rounded mb-4"><pre class="bg-gray-800 rounded my-2 p-2 overflow-x-auto"><code class="code language-toml">[dependencies]
hexing = &quot;0.2.0&quot;</code></pre> <p class="mt-2">Add <code class="code bg-gray-700 p-1 rounded">hexing</code> to your
      <code class="code bg-gray-700 p-1 rounded">Cargo.toml</code>.</p></div>`;return{c(){o=p("meta"),n=m(),t=p("div"),t.innerHTML=u,l=m(),s=p("main"),s.innerHTML=x,this.h()},l(e){const i=H("svelte-1fe78ls",document.head);o=g(i,"META",{name:!0,content:!0}),i.forEach(a),n=h(e),t=g(e,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-14oqpsi"&&(t.innerHTML=u),l=h(e),s=g(e,"MAIN",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-1e84tay"&&(s.innerHTML=x),this.h()},h(){document.title="Hexing: Rust Library for Hexagonal Grid Manipulation",r(o,"name","description"),r(o,"content","Hexing is a basic Rust library designed to manipulate hexagonal grids, offering features such as distance calculations, pixel coordinate conversion, and more."),r(t,"class","flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 px-4 mt-8 max-w-3xl mx-auto"),r(s,"class","p-6 max-w-3xl mx-auto")},m(e,i){P(document.head,o),d(e,n,i),d(e,t,i),d(e,l,i),d(e,s,i)},p:c,i:c,o:c,d(e){e&&(a(n),a(t),a(l),a(s)),a(o)}}}class C extends y{constructor(o){super(),w(this,o,null,_,v,{})}}export{C as component};
