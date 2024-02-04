export const fetchProjects = async () => {

    const response = await fetch('/api/get-projects');
    return await response.json();
}


export const fetchServices = async () => {

    const response = await fetch('/api/get-services');
    return await response.json();
}