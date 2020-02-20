<template>
    <div class="header">
        <header class="bg-gray white">
            <div class="container">
                <div class="row">
                   <div class="col-6">
                        <p>This header is epic</p>
                   </div>
                   <div class="col-6 text-right">
                        <router-link to="/"><p class="white"><strong>Home</strong></p></router-link>
                        <router-link to="/test"><p class="white"><strong>Testpage</strong></p></router-link>
                   </div>
                </div>
            </div>
            <div class="">
                
            </div>
            
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>