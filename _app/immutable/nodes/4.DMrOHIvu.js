import{t as a,a as t}from"../chunks/disclose-version.CRH15Tq2.js";import"../chunks/legacy.B7x09vCb.js";import{$ as n}from"../chunks/runtime.DeXpxtC2.js";import{h as l}from"../chunks/svelte-head.tW1tNO1N.js";import{a as e}from"../chunks/attributes.CaPm3nup.js";const h=""+new URL("../assets/intro.CSyXUABa.png",import.meta.url).href,c=""+new URL("../assets/rast.BuaQUlGH.png",import.meta.url).href,d=""+new URL("../assets/shad.UmFbctmw.png",import.meta.url).href;var p=a('<meta name="description" content="Learn how 3D rendering works, covering the key steps of Vertex Shading, Rasterisation, and Fragment Shading in the rendering pipeline.">'),m=a(`<main class="p-6 max-w-3xl mx-auto"><h1 class="text-4xl font-bold text-gray-100 my-4">How does a 3D renderer work?</h1> <section class="text-lg text-gray-300 mb-4"><p class="font-semibold">authors : Lucien VILLARD &amp; Corentin SOLOIS</p></section> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2">Introduction</h2> <p class="text-lg text-gray-300 mb-1">3D is everywhere in our new technology. Think of film (animation, VFX),
    video games (virtual reality, 3D animation) and even fields like
    architecture. But have you ever wondered how our computers transform 3D
    models into 2D images on the screen? This process is a sequence of
    algorithms, called the "pipeline", executed by the 3D renderer. This series
    of instructions consists of 3 key steps: Vertex Shading, Rasterisation and
    Fragment Shading. In this article, we will review the 3 key steps to
    understand the basis of the 3D renderer.</p> <img${e("src",h)} alt="intro" class="w-full"> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Vertex Shading</h2> <p class="text-lg text-gray-300 mb-1">First of all, it is very important to understand how 3D models are
    represented. It contains a set of triangles and their vertices. Each vertex
    is a point in a 3D space, so it can be represented by x, y and z
    coordinates. The Vertex Shading step consists of transforming each vertex of
    each 3D triangle into a vertex of 2D triangle relative to a camera. This
    process is repeated hundreds of thousands of times. And for a 120 fps game,
    imagine the number of calculations required. Although this may seem to be
    extreme, graphics cards (the main component for 3D rendering) are designed
    for this type of operation. With ten of sections that are asynchronous,
    computers are able to perform 35 trillion of operations per second. To
    better understand this step, imagine a 3D world, say a classroom. We want to
    display it on a screen, which is a bit like taking a picture of that room.
    We need to convert a 3D point, e.g. on a table, into a screen position. To
    start with, we need to know the local position of this point on the table.
    Then we need to convert these local coordinates (relative to the table) into
    global coordinates (relative to the classroom). This process takes into
    account the position, rotation and scale of the table in the room. This
    position is then adjusted relative to the camera view, using the camera's
    position, rotation, scale and field of view as factors. Finally, the
    position is projected onto the 2D screen.</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Rasterisation</h2> <p class="text-lg text-gray-300 mb-1">To continue, just remember that a screen is a grid of millions of pixels of
    any colors. For now, our program renders only the points vertex of the
    triangles, which is not very interesting for now. The goal is to fill each
    triangle with the right color in the right place. Thanks to the previous
    operations, vertices are already placed on the screen, and pixels between
    them are also filled. However, if you apply this method naively, some hidden
    object faces may appear, as their triangles are drawn after those that
    should hide them. To avoid this, each point in the image is associated with
    an additional value: its distance from the camera. So, when you draw a
    pixel, you check that the recorded distance is not smaller than the one
    you're about to draw. The closest point is therefore the one that will be
    displayed on screen.</p> <img${e("src",c)} alt="Rasterisation" class="w-full"> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Fragment Shading</h2> <p class="text-lg text-gray-300 mb-1">After the first two steps, we get a passable rendering, but there's no
    relief or volume to the image. For example, a sphere appears as a simple
    colored circle. To correct this, a third step is added to the pipeline:
    Fragment Shading. With light sources already placed in the environment (sun,
    lamp, etc.), this last major step can be carried out. Before going any
    further, it's important to understand a key concept in 3D: the normal of a
    surface. This is a vector that indicates the direction and sense of the
    surface at a given point (it is perpendicular to the surface). Using this
    notion, we can calculate the angle between the normal of each triangle and
    the direction of the light source. This angle is used to determine the
    quantity of light per cm² reaching the surface (front = light intensity,
    perpendicular = 0). Other calculations are then performed to obtain the best
    possible rendering. For example, each object reacts differently to light,
    depending on its color, roughness (gloss) or refractive index.</p> <img${e("src",d)} alt="Fragment Shading" class="w-full"> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Conclusion</h2> <p class="text-lg text-gray-300 mb-1">This article is just an overview of the world of 3D rendering engines. We
    hope it has inspired you to find out more about this incredibly complex
    field. We could have talked about UV maps, which allow objects to be
    non-monochrome, smooth shading, which gives rounded shapes with fewer
    triangles, normal maps, which create the illusion of more complex
    geometries, or ray tracing, another rendering technology that simulates
    light in a very realistic way. That's why we invite you to learn more about
    this field.</p> <section class="mt-8"><h2 class="text-2xl font-bold text-gray-100 mb-2">Sources</h2> <ul class="text-lg text-gray-300 list-disc ml-6"><li><a href="https://www.youtube.com/watch?v=C8YtdC8mxTU" class="text-blue-400 hover:underline" target="_blank">How do Video Game Graphics Work?</a></li> <li><a href="https://en.wikipedia.org/wiki/Shader#Vertex_shaders" class="text-blue-400 hover:underline" target="_blank">Vertex Shaders</a></li> <li><a href="https://en.wikipedia.org/wiki/Graphics_pipeline" class="text-blue-400 hover:underline" target="_blank">Graphics Pipeline</a></li> <li><a href="https://en.wikipedia.org/wiki/3D_projection" class="text-blue-400 hover:underline" target="_blank">3D projection</a></li> <li><a href="https://en.wikipedia.org/wiki/3D_rendering" class="text-blue-400 hover:underline" target="_blank">3D Rendering</a></li></ul></section></main>`);function b(i){var o=m();l(r=>{var s=p();n.title="How does a 3D renderer work?",t(r,s)}),t(i,o)}export{b as component};
