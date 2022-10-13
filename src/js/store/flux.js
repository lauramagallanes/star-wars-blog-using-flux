const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {

            listaPersonajes: [],
            listaPlanetas: [],
            listaVehiculos: []
        },
        actions: {
            // Use getActions to call a function within a fuction

            getListaPersonajes: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/people/")
                    const data = await response.json();
                    console.log(data);
                    let personajes = data.results;
                    console.log(personajes);
                    setStore({
                        listaPersonajes: personajes
                    });
                    // console.log(listaPersonajes);

                } catch (err) {
                    console.log(err);
                }
            },

            getListaPlanetas: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/")
                    const data = await response.json();
                    console.log(data);
                    let planetas = data.results;
                    console.log(planetas);
                    setStore({
                        listaPlanetas: planetas
                    });
                    // console.log(listaPersonajes);

                } catch (err) {
                    console.log(err);
                }
            },

            getListaVehiculos: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/vehicles/")
                    const data = await response.json();
                    console.log(data);
                    let vehiculos = data.results;
                    console.log(vehiculos);
                    setStore({
                        listaVehiculos: vehiculos
                    });
                    // console.log(listaPersonajes);

                } catch (err) {
                    console.log(err);
                }
            }
        }
    };
};


export default getState;