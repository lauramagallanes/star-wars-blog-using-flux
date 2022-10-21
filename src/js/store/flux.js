import axios from 'axios';

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
            auth: false,
            registered: false
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
            login: async (email, password) => {
                try {

                    const response = await axios.post('https://3000-lauramagall-databasesta-lnpte522lkm.ws-us72.gitpod.io/login', {

                        email: email,
                        password: password

                    })

                    if (response.status === 200) {

                        localStorage.setItem('token', response.data.access_token)

                        setStore({
                            auth: true
                        })

                    }
                    return true;

                } catch (error) {
                    console.log(error);
                    if (error.response.status === 404) {
                        alert(error.response.data.msg)
                        setStore({
                            auth: false
                        })
                        return false;
                    }

                }
            },

            logout: () => {
                localStorage.removeItem('token')
                setStore({
                    auth: false
                })
                return false;
            },
            // aca creo la funcion para registrarse - Signup
            signup: async (first_name, last_name, email, password, username) => {
                try {

                    const response = await axios.post('https://3000-lauramagall-databasesta-lnpte522lkm.ws-us72.gitpod.io/users', {

                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                        password: password,
                        username: username

                    })

                    if (response.status === 200) {
                        getActions().login(email, password)
                        setStore({
                            registered: true
                        })

                    }
                    return true;

                } catch (error) {
                    console.log(error);
                    if (error.response.status === 400) {
                        alert(error.response.data.msg)
                        setStore({
                            auth: false
                        })
                        return false;
                    }

                }
            }
        }
    };
};


export default getState;