const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {

            listaPersonajes: [],
            listaPlanetas: [],
            listaVehiculos: [],
            detallesPersonaje: {},
            detallesPlaneta: {},
            detallesVehiculo: {},

            listaFavoritos: [],
            classNameFavoritos: "btn btn-outline-light",
            auth: false
            //    personajeFavorito: ""
        },
        actions: {
            // Use getActions to call a function within a fuction
            cambiaClassNameFavoritos: () => {
                let store = getStore()
                if (store.classNameFavoritos == "btn btn-outline-light") {
                    setStore({
                        classNameFavoritos: "btn btn-light"
                    })
                } else {
                    setStore({
                        classNameFavoritos: "btn btn-outline-light"
                    })
                }

            },
            getListaFavoritos: (favorito) => {
                let store = getStore()
                if (store.listaFavoritos.includes(favorito)) {
                    getActions().eliminarFavorito(favorito)

                } else {

                    setStore({
                        listaFavoritos: [...store.listaFavoritos, favorito],

                    }, )

                }
            },


            eliminarFavorito: (favorito) => {
                let store = getStore()
                setStore({
                    listaFavoritos: store.listaFavoritos.filter((item) => item !== favorito)
                })
            },

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
            },

            getDetallePersonaje: async (id) => {

                try {
                    const response = await fetch("https://swapi.dev/api/people/" + id)
                    const data = await response.json();
                    console.log(data);
                    // let propiedades = data.results;
                    // console.log(propiedades);
                    setStore({
                        detallesPersonaje: data
                    });


                } catch (err) {
                    console.log(err);
                }

            },

            getDetallePlaneta: async (id) => {

                try {
                    const response = await fetch("https://swapi.dev/api/planets/" + id)
                    const data = await response.json();
                    console.log(data);
                    // let propiedades = data.results;
                    // console.log(propiedades);
                    setStore({
                        detallesPlaneta: data
                    });


                } catch (err) {
                    console.log(err);
                }

            },

            getDetalleVehiculo: async (id) => {

                try {
                    const response = await fetch("https://swapi.dev/api/vehicles/" + id)
                    const data = await response.json();
                    console.log(data);
                    // let propiedades = data.results;
                    // console.log(propiedades);
                    setStore({
                        detallesVehiculo: data
                    });


                } catch (err) {
                    console.log(err);
                }

            },

            //aca creamos la funcion de Login
            login: async (firstName, lastName, email, password, username) => {
                try {
                    const response = await fetch('https://3000-lauramagall-databasesta-lnpte522lkm.ws-us71.gitpod.io/login', {
                        method: 'POST',
                        body: JSON.stringify({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password,
                            username: username
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })

                    if (response.status === 200) {
                        const data = await response.json();
                        localStorage.setItem('token', data.access_token)
                        console.log(data);
                        setStore({
                            auth: true
                        })
                        return true;

                    }

                } catch (error) {
                    console.log(error);
                    return false;
                }
            },

            logout: () => {
                localStorage.removeItem('token')
                setStore({
                    auth: false
                })
                return false;
            }
        }
    };
};


export default getState;