<script>
    import axios from 'axios';


    export default{
        data(){
            return {
                name: '',
                email: '',
                message: '',
                errors: {},
                loading: false,
                success: false
            }
        },

        methods: {
            sendMessage(){

                if(this.loading === true) return


                this.errors = {}
                this.loading = true

                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                axios.post('http://127.0.0.1:8000/api/contacts', data)
                .then(res => {

                    if(res.data.success === true){

                    }else{
                        this.errors = res.data.errors
                    }
                })
                .finally(() => {
                    this.loading = false
                    this.success = true
                })
            }
        }
    }
</script>





<template>
    <div class="contact-page">
        <div class="container">
            <h1 class="text-coral">
                Contact Me
            </h1>
            <p>
                Hello! I'm Marco Colloca. 
            </p>
            <p>
                If you want to contact me.. please don't.
            </p>
            <form v-if="success === false" class="my-5 contact-form" action="" @submit.prevent="sendMessage">
        
                <!-- Name Form -->
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Your Name" v-model="name">
                    <small class="text-danger" v-if="errors.name">{{ errors.name.join(' ') }}</small>
                </div>
        
                <!-- Email Form -->
                <div class="mb-3">
                    <label for="email" class="form-label">Email address:</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="mail@example.com" v-model="email">
                    <div id="emailHelp" class="form-text text-warning fw-bold text-end">I'll never share your email with anyone else.</div>
                    <small class="text-danger" v-if="errors.name">{{ errors.email.join(' ') }}</small>
                </div>
        
                <!-- Message Form -->
                <div class="mb-3 form-check">
                    <label class="form-check-label" for="message">Message:</label>
                    <textarea class="form-control" id="message" placeholder="Cosa cerchi?" v-model="message"></textarea>
                    <small class="text-danger" v-if="errors.name">{{ errors.message.join(' ') }}</small>
                </div>
        
                <div v-if="loading===true"> Wait!</div>

                <button v-else type="submit" class="btn btn-outline-coral">Submit</button>
            </form>
            <div v-else>
                <h2 class="text-coral">
                    Grazie, per avermi contattato. Ti risponderò il prima possibile! 
                </h2>
            </div>
        </div>
    </div>   
</template>



<style language="scss" scoped>
    .contact-page{
        padding: 50px 0;
    }

    .contact-form{
        max-width: 700px;
        border: 1px solid coral;
        padding: 30px 15px;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(77, 41, 0, 0.5)), url('/imgs/maxcoach-shape-13.png');
        background-size: 2%;

    }

    input, textarea{
        &:focus{
            &::placeholder{                
                color: transparent;
            }
        }
    }
</style>