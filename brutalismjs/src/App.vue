<template>
    <div>
        <video class="brutalismjs-video" loop muted autoplay>
            <source src="./assets/videos/demo-video.mp4" type="video/mp4"/>
        </video>
        <div>
            <label>Intensity:</label>
            <input v-model="intensity" type="range" min="0" max="100" @change="updateVideo"/>
        </div>
    </div>
</template>
<script setup lang="ts">
    import applyBrutalism from './lib/animation';
    import {onMounted, ref} from 'vue';

    const intensity = ref(100);

    onMounted(()=> {
        updateVideo();

    })

    const updateVideo = () => {
        applyBrutalism(intensity.value);
    };
</script>
<style lang="scss"></style>
