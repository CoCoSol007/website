<script>
  import thal from "../../../assets/renderer/thal.png";
  import pyth from "../../../assets/renderer/pyth.png";
  import conv from "../../../assets/renderer/conv.png";
  import conv3D from "../../../assets/renderer/conv3D.png";
  import dist from "../../../assets/renderer/dist.png";
  import example from "../../../assets/renderer/example.mp4";
</script>

<svelte:head>
  <title>My Own 3D Renderer</title>
  <meta
    name="description"
    content="Learn how to build a basic 3D renderer using math concepts such as Pythagorean and Thales' theorem. This article covers basic usage, mesh creation, camera movement, rotation, and the math behind rendering 3D objects to a 2D plane."
  />
</svelte:head>

<main class="p-6 max-w-3xl mx-auto">
  <h1 id="my-own-3d-renderer" class="text-4xl font-bold text-gray-100 mb-4">
    My Own 3D Renderer
  </h1>

  <h1 id="overview" class="text-4xl font-bold text-gray-100 mb-2">Overview</h1>
  <p class="text-lg text-gray-300 mb-1">
    This is a basic 3D <strong class="font-bold">renderer</strong> created using
    <strong class="font-bold">Math</strong>.
  </p>

  <p class="text-lg text-gray-300 mb-4">
    link to the <a
      href="https://github.com/CoCoSol007/misc/tree/main/3DViewPy"
      class="text-blue-500 hover:underline">repository</a
    >.
  </p>

  <h2 id="basic-usage" class="text-2xl font-semibold text-gray-100 mb-2">
    Basic usage
  </h2>
  <p class="text-lg text-gray-300 mb-4">
    The basic use of my rendering engine:
  </p>

  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >"""The main file of the 3D renderer"""

# Import the renderer module
from renderer.renderer import Renderer, ViewCamera

# Create the renderer with the size of 400x400
# with the view calculated by PYTHAGORE; you can also choose THALES
renderer = Renderer(400, 400, ViewCamera.PYTHAGORE)

renderer.new_mesh([ (0, 0, 0), (0, 1, 0), (1, 0, 0) ])
renderer.new_mesh([ (0, 0, 0), (0, 1, 0), (0, 0, 1) ])

# Launch the renderer
renderer.launch()</code
    ></pre>

  <p class="text-lg text-gray-300 mb-4">
    I can show you just 2 pictures and the difference between the two views:
  </p>

  <div class="flex flex-col md:flex-row md:space-x-4 mx-auto items-center">
    <div class="flex-1 text-center max-w-3xl">
      <h3 class="text-xl font-semibold text-gray-100 mb-2">
        Pythagorean view:
      </h3>
      <img class="mt-2 h-auto rounded mb-4" src={pyth} alt="Pythagorean view" />
    </div>

    <div class="flex-1 text-center mt-4 md:mt-0">
      <h3 class="text-xl font-semibold text-gray-100 mb-2">Thales view:</h3>
      <img class="mt-2 h-auto rounded mb-4" src={thal} alt="Thales view" />
    </div>
  </div>

  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      ># Init with PYTHAGORE view
renderer = Renderer(x, y, ViewCamera.PYTHAGORE)

# Init with THALES view
renderer = Renderer(x, y, ViewCamera.THALES)</code
    ></pre>

  <p class="text-lg text-gray-300 mb-4">
    We will look at the technical and calculation differences between them
    later.
  </p>

  <hr class="my-6" />

  <p class="text-lg text-gray-300 mb-4">
    I will show you how to add a new mesh to the renderer:
  </p>

  <p class="text-lg text-gray-300 mb-4">
    <code class="code bg-gray-800 p-1 rounded">
      renderer.new_mesh([(0, 0, 0), (0, 1, 0), (1, 0, 0)])
    </code>
  </p>

  <p class="text-lg text-gray-300 mb-4">
    The function accepts a single argument, namely a list of three 3D points.
    The renderer then generates a triangle based on these three corners.
  </p>

  <p class="text-lg text-gray-300 mb-4">
    To create a square, as illustrated in the preceding screenshot, a suitable
    function would be:
  </p>

  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >def square_2d(x, y, width, height):
    return [
        [(x, y, 0), (x + width, y, 0), (x + width, y + height, 0)],
        [(x, y, 0), (x, y + height, 0), (x + width, y + height, 0)]
    ]

for x in range(0, 10):
    for y in range(0, 10):
        meshes = square_2d(x * 1.1, y * 1.1, 1, 1)
        renderer.new_mesh(meshes[0])
        renderer.new_mesh(meshes[1])</code
    ></pre>

  <h2
    id="movement-and-rotation"
    class="text-2xl font-semibold text-gray-100 mb-2"
  >
    Movement and rotation
  </h2>

  <p class="text-lg text-gray-300 mb-4">
    Once the meshes have been added to the renderer, you can execute the main
    file, and the WQSD, ZQSD, or arrow keys can be used to navigate the
    environment. Additionally, a mouse can be utilized to rotate the camera
    horizontally. For example:
  </p>

  <div class="relative mb-4">
    <video controls class="w-full h-auto rounded-lg shadow-md" alt="example">
      <track kind="captions" />
      <source src={example} type="video/mp4" />
      Votre navigateur ne supporte pas la balise vidéo.
    </video>
  </div>

  <h1 id="how-it-works-" class="text-4xl font-bold text-gray-100 mb-4">
    How it works
  </h1>

  <h2
    id="how-it-works-thales"
    class="text-2xl font-semibold text-gray-100 mb-2"
  >
    Renderer
  </h2>

  <h3 id="thales" class="text-xl font-semibold text-gray-100 mb-2">Thales</h3>
  <p class="text-lg text-gray-300 mb-4">
    When I was younger, a day without internet left me with time to fill. I
    decided to take on the challenge of creating a <strong class="font-bold"
      >simple 3D renderer</strong
    >. At the time, my knowledge of 3D matrices and vector calculations was
    limited, but I had a solid understanding of the
    <strong class="font-bold">Pythagorean</strong>
    and <strong class="font-bold">Thales</strong> theorems from school. After
    some thought, I began sketching ideas on paper to explore how to translate
    3D into 2D. I soon realized that converting 3D to 2D is conceptually similar
    to converting <strong class="font-bold">2D into 1D</strong>. After about an
    hour of work, my sketch looked like this:
  </p>

  <img class="mt-2 h-auto rounded mb-4" src={conv} alt="Thales view sketch" />
  <p class="text-lg text-gray-300 mb-4">
    At this point, two important questions arose:
  </p>
  <ol class="list-decimal list-inside text-lg text-gray-300 mb-4">
    <li>What does the dot on the left represent?</li>
    <li>How do we determine the 1D coordinate?</li>
  </ol>
  <p class="text-lg text-gray-300 mb-4">
    For the first question, I assumed the dot represents the 1D camera. As for
    the second, the answer lies in applying Thales' theorem.
  </p>
  <p class="text-lg text-gray-300 mb-4">
    By repeating this process with a 3D point, you can create a 3D renderer
    using just two applications of Thales' theorem.
  </p>

  <img
    class="mt-2 h-auto rounded mb-4"
    src={conv3D}
    alt="3D renderer example"
  />
  <p class="text-lg text-gray-300 mb-4">
    This method involves four key variables: `x`, `y`, `z`, and `dist`. The
    first three represent the coordinates of the point you want to project into
    2D. The `dist` variable refers to the distance between the camera and the
    projection plane. This distance is a critical parameter in 3D rendering as
    it determines how objects are projected onto a 2D plane from a 3D scene. The
    larger the `dist` value, the smaller the rendered objects will appear.
  </p>
  <p class="text-lg text-gray-300 mb-4">
    The new 2D projected coordinates are then calculated using the following
    formulas:
  </p>
  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >new_x = x * dist / z
new_y = y * dist / z</code
    ></pre>
  <p class="text-lg text-gray-300 mb-4">
    To visualize this process differently, think of it as looking through a pane
    of glass and drawing what you see on that glass. Your eyes act as the
    camera, the glass represents the 2D world, and what you observe is in 3D.
  </p>
  <p class="text-lg text-gray-300 mb-4">
    In other words, when you look through the glass, you perceive a
    three-dimensional world, but if you were to draw what you see directly on
    the glass, your drawing would be in two dimensions. The glass serves as a
    flat surface where you project a view of a three-dimensional world,
    simplifying its complexity into a 2D representation.
  </p>

  <h3 id="pythagoras" class="text-xl font-semibold text-gray-100 mb-2">
    Pythagoras
  </h3>
  <p class="text-lg text-gray-300 mb-4">
    The way I discovered how to view the 3D world on a 2D surface using the
    Pythagorean theorem stems from a mathematical misconception of mine, which
    can be observed in the distortions at the corners. To understand how this
    method works with the Pythagorean theorem, it’s helpful to break down the
    process into clear steps.
  </p>
  <ul class="list-disc list-inside text-lg text-gray-300 mb-4">
    <li>
      <strong class="font-bold">Calculating the 3D Distance</strong>: Using the
      Pythagorean theorem to find the distance from a point to the camera.
    </li>
  </ul>
  <img
    class="mt-2 h-auto rounded mb-4"
    src={dist}
    alt="3D distance calculation"
  />
  <ul class="list-disc list-inside text-lg text-gray-300 mb-4">
    <li>
      <strong class="font-bold">Projecting into 2D</strong>: Normalizing the
      coordinates to convert them into a 2D view.
    </li>
  </ul>
  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >new_x = current_x / vector3D_pointToCam
new_y = current_y / vector3D_pointToCam</code
    ></pre>
  <ul class="list-disc list-inside text-lg text-gray-300 mb-4">
    <li>
      <strong class="font-bold">Transforming into Screen Coordinates</strong>:
      Scaling and centering the coordinates to display them correctly on the
      screen.
    </li>
  </ul>
  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >pygame.math.Vector2(new_x * 500 + width / 2, new_y * 500 + height / 2)</code
    ></pre>
  <p class="text-lg text-gray-300 mb-4">
    This 3D rendering method has limitations because it inappropriately uses the
    Pythagorean theorem to calculate the distance from a 3D point to the camera.
    By directly projecting these distances to normalize the 2D coordinates, it
    causes distortions, particularly at the corners of the image. These
    distortions occur because the method does not account for the perspective
    effects necessary for realistic projection. As a result, the corners appear
    stretched or compressed, making the 3D view incorrect and the shapes poorly
    represented.
  </p>

  <h2 id="global-function" class="text-2xl font-semibold text-gray-100 mb-2">
    Global Function
  </h2>
  <p class="text-lg text-gray-300 mb-4">
    You now have all the data to understand the global function:
  </p>
  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >def to_2d(camera, width: float, height: float):
    if camera.view == ViewCamera.THALES:
        dist = -camera.dist
        
        if current_z >= 0:
            return None
        
        new_x = x * dist / z
        new_y = y * dist / z

        return pygame.math.Vector2(new_x * 500 + width / 2, new_y * 500 + height / 2)

    elif camera.view == ViewCamera.PYTHAGORE:

        if z >= 0:
            return None

        vector3D_pointToCam = math.sqrt(x * x + y * y + z * z)

        if vector3D_pointToCam &lt;= 0:
            return None

        new_x = x / vector3D_pointToCam
        new_y = y / vector3D_pointToCam

        return pygame.math.Vector2(new_x * 500 + width / 2, new_y * 500 + height / 2)</code
    ></pre>

  <h2 id="camera-movement" class="text-2xl font-semibold text-gray-100 mb-2">
    Camera Movement
  </h2>
  <p class="text-lg text-gray-300 mb-4">
    Camera movement is straightforward: you just need to save a 3D position and
    pass it as an argument to the <code class="code bg-gray-800 p-1 rounded"
      >to_2d</code
    > function. To change the camera's position and update the view, simply modify
    the 3D point.
  </p>

  <h2 id="camera-rotation" class="text-2xl font-semibold text-gray-100 mb-2">
    Camera Rotation
  </h2>

  <p class="text-lg text-gray-300 mb-4">
    Later, after learning more about matrices, I was able to improve my code and
    add camera rotation to my renderer. Let me explain how it works:
  </p>

  <h3 class="text-xl font-semibold text-gray-100 mb-2">
    Creating Rotation Matrices
  </h3>

  <p class="text-lg text-gray-300 mb-4">
    The functions <code class="code bg-gray-800 p-1 rounded"
      >rotation_matrix_x</code
    >
    and <code class="code bg-gray-800 p-1 rounded">rotation_matrix_y</code> create
    matrices to rotate an object around the X and Y axes, respectively. These matrices
    are 4x4, which is commonly used in 3D transformations to also include translations
    if necessary.
  </p>

  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >def rotation_matrix_x(theta):
    """Creates a rotation matrix around the X axis."""
    c, s = np.cos(theta), np.sin(theta)
    return np.array([
        [1, 0, 0, 0],
        [0, c, -s, 0],
        [0, s, c, 0],
        [0, 0, 0, 1]
    ])</code
    ></pre>

  <p class="text-lg text-gray-300 mb-4">Explanation:</p>
  <ul class="list-disc pl-6 text-gray-300 mb-4">
    <li>
      <strong class="font-bold">c</strong> and
      <strong class="font-bold">s</strong>
      represent the cosine and sine of the angle
      <strong class="font-bold">theta</strong>, respectively.
    </li>
    <li>The returned matrix performs a rotation around the X axis.</li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-100 mb-2">
    Calculating the Final Rotation Matrix
  </h3>

  <p class="text-lg text-gray-300 mb-4">
    We calculate the final rotation matrix by combining rotations around the X
    and Y axes. The rotation matrices are multiplied in the order Y -> X to
    obtain the final matrix.
  </p>

  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >rotation_matrix = rotation_matrix_y(rotation_y) @ rotation_matrix_x(rotation_x)</code
    ></pre>

  <p class="text-lg text-gray-300 mb-4">Explanation:</p>
  <ul class="list-disc pl-6 text-gray-300 mb-4">
    <li>
      The rotation matrices are multiplied in this order to apply the rotations
      in the correct sequence.
    </li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-100 mb-2">
    Creating the Camera Matrix
  </h3>

  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >camera_position = np.array([camera_x, camera_y, camera_z])
camera_matrix = np.identity(4)
camera_matrix[:3, 3] = camera_position</code
    ></pre>

  <h3 class="text-xl font-semibold text-gray-100 mb-2">
    Calculating the View Matrix
  </h3>

  <p class="text-lg text-gray-300 mb-4">
    The view matrix is created by combining the rotation matrix and the camera
    matrix. It represents the transformation needed to convert world coordinates
    to camera coordinates.
  </p>

  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >view_matrix = rotation_matrix.copy()
view_matrix[:3, :3] = rotation_matrix[:3, :3]
view_matrix = view_matrix @ camera_matrix</code
    ></pre>

  <p class="text-lg text-gray-300 mb-4">Explanation:</p>
  <ul class="list-disc pl-6 text-gray-300 mb-4">
    <li>
      We copy the rotation matrix and multiply it by the camera matrix to get
      the view matrix.
    </li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-100 mb-2">
    Transforming the 3D Point
  </h3>

  <p class="text-lg text-gray-300 mb-4">
    The 3D point is transformed by applying the view matrix. This adjusts the
    point based on the defined rotations and translations, giving the new
    position of the point from the camera's perspective.
  </p>

  <pre class="bg-gray-800 p-4 rounded overflow-x-auto text-gray-100 mb-4">
<code class="code language-python"
      >point_3d = np.array([point_x, point_y, point_z, 1])
transformed_point = view_matrix @ point_3d</code
    ></pre>

  <p class="text-lg text-gray-300 mb-4">Explanation:</p>
  <ul class="list-disc pl-6 text-gray-300 mb-4">
    <li>
      We add a homogeneous component (1) to the 3D point to use 4x4 matrix
      multiplication.
    </li>
    <li>The point is transformed by multiplying it with the view matrix.</li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-100 mb-2">Rendering the Point</h3>

  <p class="text-lg text-gray-300 mb-4">
    After obtaining the new position of the point based on the camera's
    rotation, we can project it using the <code
      class="code bg-gray-800 p-1 rounded">to_2d</code
    > function.
  </p>

  <h2
    id="limitations-and-improvements"
    class="text-2xl font-semibold text-gray-100 mb-2"
  >
    Limitations and Improvements
  </h2>

  <h3 class="text-xl font-semibold text-gray-100 mb-2">Z Buffer</h3>

  <p class="text-lg text-gray-300 mb-4">
    One significant limitation of this simple renderer is the absence of a <strong
      class="font-bold">Z-buffer</strong
    >. The Z-buffer, or depth buffer, is a crucial component in 3D rendering
    that helps manage depth information for each pixel on the screen. It ensures
    that objects closer to the camera obscure objects further away, thus
    providing proper occlusion. Without it, our renderer might display incorrect
    visual results where objects overlap or where the depth relationship between
    objects is not accurately represented.
  </p>

  <p class="text-lg text-gray-300 mb-4">
    In the future, I will address this limitation by studying data about 3D
    rendering. For example, with this great <a
      href="https://youtu.be/qSrGbVxCYeo?si=2ufH6zUgWBgM7G5V"
      class="text-blue-500 hover:underline">documentation video</a
    >.
  </p>
</main>
