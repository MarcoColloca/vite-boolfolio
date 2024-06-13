<script>
    export default{
        
    }
</script>





<template>
    <div class="contact-page">
        <div class="container">
            <h1>
                Contact
            </h1>
            <p>
                Hello! I am Marco Colloca. 
            </p>
            <p>
                If you want to contact me.. please don't.
            </p>
            <form class="my-5 contact-form" action="" method="">
        
                <!-- Name Form -->
                <div class="mb-3">
                    <label for="contact-name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="contact-name">
                </div>
        
                <!-- Email Form -->
                <div class="mb-3">
                    <label for="contact-mail" class="form-label">Email address:</label>
                    <input type="email" class="form-control" id="contact-mail" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text text-danger">I'll never share your email with anyone else.</div>
                </div>
        
                <!-- Message Form -->
                <div class="mb-3 form-check">
                    <label class="form-check-label" for="contact-message">Message:</label>
                    <textarea class="form-control" id="contact-message"></textarea>
                </div>
        
        
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>



<style language="scss" scoped>
    .contact-page{
        padding: 50px 0;
    }

    .contact-form{
        border: 1px solid coral;
        padding: 30px 15px;
    }
</style>