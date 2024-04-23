<script>
import {
    page
} from '$app/stores'; // Assurez-vous que cette importation est correcte et que le magasin existe
</script>

<div class="min-h-screen flex items-center justify-center">
    <div class="max-w-2xl bg-gradient-to-br from-blue-950 to-gray-900 p-8 rounded-lg shadow-lg text-center text-white">
        <h1 class="text-5xl font-extrabold mb-6">Oops! Something went wrong...</h1>
        <h2 class="text-3xl font-semibold mb-8">{$page.error.message}</h2>
        <p>While we fix things up, why not take a moment to enjoy this adorable cat?</p>
        <img src="https://cataas.com/cat/cute" alt="Adorable Cat" class="mt-8 mx-auto rounded-2xl" style="max-width: 300px;">
        <p class="mt-4 text-sm">Psst... You can reload to see a new cat!</p>
    </div>
</div>
