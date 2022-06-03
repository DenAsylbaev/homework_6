Vue.component('error_el', {
    props: ['errorValue'],
    template: `
            <div v-show='$root.error' class="error-message">
                <h2>Ошибка связи с сервером:</h2>        
                <h3>{{ errorValue }}</h3>
            </div>
    `
})