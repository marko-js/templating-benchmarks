const Vue = require('vue');

const App = Vue.component('my-app', {
    template: `
        <div class="simple-1" style="background-color: blue; border: 1px solid black">
            <div class="colors">
            <span class="hello">
                Hello {{name}}! <strong>You have {{messageCount}} messages!</strong>
            </span>

            <ul v-if="colors.length">
                <li v-for="color in colors" class="color">
                    {{color}}
                </li>
            </ul>
                <div v-else>
                    No colors!
                </div>
            </div>
            <button type="button" v-bind:class="primary ? 'primary' : 'secondary'">
                Click me!
            </button>
        </div>`
});

module.exports = App;