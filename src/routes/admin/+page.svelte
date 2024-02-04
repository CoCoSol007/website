<script>
    let P_title = "";
    let S_title = "";
    let P_description = "";
    let S_description = "";
    let P_imageFile = null;
    let S_imageFile = null;
    let P_link = "";
    let S_link = "";
    let ProjecttoggleAddProject = false;
    let ServicetoggleAddProject = false;

    const ProjecthandleSubmit = async () => {
        const formData = createFormData(
            P_title,
            P_description,
            P_imageFile,
            P_link,
        );
        try {
            const response = await fetch("/api/add-project", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                resetProjectFormValues();
            } else {
                // Handle response errors here
            }
        } catch (error) {
            // Handle exceptions here
        }
    };

    const ServicehandleSubmit = async () => {
        const formData = createFormData(
            S_title,
            S_description,
            S_imageFile,
            S_link,
        );
        try {
            const response = await fetch("/api/add-service", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                resetServiceFormValues();
            } else {
                // Handle response errors here
            }
        } catch (error) {
            // Handle exceptions here
        }
    };

    const createFormData = (title, description, imageFile, link) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", imageFile);
        formData.append("link", link);
        return formData;
    };

    const resetProjectFormValues = () => {
        P_title = "";
        P_description = "";
        P_imageFile = null;
        P_link = "";
    };

    const resetServiceFormValues = () => {
        S_title = "";
        S_description = "";
        S_imageFile = null;
        S_link = "";
    };

    const ProjecthandleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            P_imageFile = file;
        }
    };

    const ServicehandleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            S_imageFile = file;
        }
    };
</script>

<div class="container mx-auto my-4 form-container">
    <!-- Toggle Box for Add Project Section -->
    <div class="my-4 flex justify-center mb-10 mt-10">
        <button
            on:click={() =>
                (ProjecttoggleAddProject = !ProjecttoggleAddProject)}
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
            {#if ProjecttoggleAddProject}
                Close Form
            {:else}
                Add Project
            {/if}
        </button>
    </div>
    <!-- Add Project Section -->
    {#if ProjecttoggleAddProject}
        <div class="my-4 transition-opacity">
            <h1 class="text-3xl font-bold text-center">Add Project</h1>
            <!-- Form to add project -->
            <form on:submit|preventDefault={ProjecthandleSubmit} class="mt-4">
                <!-- Title Input -->
                <div class="mb-4">
                    <label for="title" class="block">Title:</label>
                    <input
                        bind:value={P_title}
                        type="text"
                        id="title"
                        name="title"
                        class="w-full px-3 py-2 rounded-lg bg-gray-700"
                        required
                    />
                </div>
                <!-- Description Input -->
                <div class="mb-4">
                    <label for="description" class="block">Description:</label>
                    <textarea
                        bind:value={P_description}
                        id="description"
                        name="description"
                        class="w-full px-3 py-2 rounded-lg bg-gray-700"
                        required
                    ></textarea>
                </div>
                <!-- Image Input -->
                <div class="mb-4">
                    <label
                        for="image"
                        class="block font-medium text-white p-4 rounded-lg bg-gray-700"
                        >Image Upload:</label
                    >
                    <input
                        type="file"
                        id="image"
                        name="image"
                        class="sr-only"
                        accept="image/*"
                        on:change={ProjecthandleImageChange}
                        required
                    />
                </div>
                <!-- Link Input -->
                <div class="mb-4">
                    <label for="link" class="block">Link:</label>
                    <input
                        bind:value={P_link}
                        type="text"
                        id="link"
                        name="link"
                        class="w-full px-3 py-2 rounded-lg bg-gray-700"
                    />
                </div>
                <!-- Submit Button -->
                <button
                    type="submit"
                    class="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >Add Project</button
                >
            </form>
        </div>
    {/if}
</div>

<div
    class="container mx-auto my-4 form-container transition-opacity duration-500 ease-in-out"
>
    <!-- Toggle Box for Add Service Section -->
    <div class="my-4 flex justify-center mb-10 mt-10">
        <button
            on:click={() =>
                (ServicetoggleAddProject = !ServicetoggleAddProject)}
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
            {#if ServicetoggleAddProject}
                Close Form
            {:else}
                Add Service
            {/if}
        </button>
    </div>
    <!-- Add Service Section -->
    {#if ServicetoggleAddProject}
        <div class="my-4">
            <h1 class="text-3xl font-bold text-center">Add Service</h1>
            <!-- Form to add service -->
            <form on:submit|preventDefault={ServicehandleSubmit} class="mt-4">
                <!-- Title Input -->
                <div class="mb-4">
                    <label for="title" class="block">Title:</label>
                    <input
                        bind:value={S_title}
                        type="text"
                        id="title"
                        name="title"
                        class="w-full px-3 py-2 rounded-lg bg-gray-700"
                        required
                    />
                </div>
                <!-- Description Input -->
                <div class="mb-4">
                    <label for="description" class="block">Description:</label>
                    <textarea
                        bind:value={S_description}
                        id="description"
                        name="description"
                        class="w-full px-3 py-2 rounded-lg bg-gray-700"
                        required
                    ></textarea>
                </div>
                <!-- Image Input -->
                <div class="mb-4">
                    <label
                        for="image"
                        class="block font-medium text-white p-4 rounded-lg bg-gray-700"
                        >Image Upload:</label
                    >
                    <input
                        type="file"
                        id="image"
                        name="image"
                        class="sr-only"
                        accept="image/*"
                        on:change={ServicehandleImageChange}
                        required
                    />
                </div>
                <!-- Link Input -->
                <div class="mb-4">
                    <label for="link" class="block">Link:</label>
                    <input
                        bind:value={S_link}
                        type="text"
                        id="link"
                        name="link"
                        class="w-full px-3 py-2 rounded-lg bg-gray-700"
                    />
                </div>
                <!-- Submit Button -->
                <button
                    type="submit"
                    class="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >Add Service</button
                >
            </form>
        </div>
    {/if}
</div>
